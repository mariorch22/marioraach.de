import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import LanguageSelectorPresentation from './LanguageSelectorPresentation';

vi.mock('@/i18n/navigation', () => ({
  Link: ({
    children,
    href,
    className,
  }: {
    children: React.ReactNode;
    href: string;
    className: string;
  }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

test('renders language options with active state', () => {
  const data = [
    { locale: 'en', label: 'EN', isActive: true, href: '/' },
    { locale: 'de', label: 'DE', isActive: false, href: '/' },
  ];

  render(<LanguageSelectorPresentation data={data} />);

  expect(screen.getByText('EN')).toBeDefined();
  expect(screen.getByText('DE')).toBeDefined();
});
