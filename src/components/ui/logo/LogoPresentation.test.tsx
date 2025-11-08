import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import LogoPresentation from './LogoPresentation';

vi.mock('next/image', () => ({
  // eslint-disable-next-line @next/next/no-img-element
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

vi.mock('@/i18n/navigation', () => ({
  Link: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

test('renders logo with link and image', () => {
  render(<LogoPresentation targetLocale="en" ariaLabel="Home" altText="Logo" />);

  const img = screen.getByAltText('Logo');
  expect(img).toBeDefined();
  expect(img.getAttribute('src')).toBe('/images/logo_r.png');
});
