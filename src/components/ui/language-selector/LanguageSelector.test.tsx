import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import LanguageSelector from './LanguageSelector';

vi.mock('@/i18n/navigation', () => ({
  Link: ({
    children,
    href,
    className,
    onClick,
  }: {
    children: React.ReactNode;
    href: string;
    className: string;
    onClick?: () => void;
  }) => (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  ),
  useRouter: () => ({
    replace: vi.fn(),
  }),
}));

test('renders language options with active state', () => {
  const data = [
    { locale: 'en', label: 'EN', isActive: true, href: '/' },
    { locale: 'de', label: 'DE', isActive: false, href: '/' },
  ];

  render(<LanguageSelector data={data} />);

  expect(screen.getByText('EN')).toBeDefined();
  expect(screen.getByText('DE')).toBeDefined();
});
