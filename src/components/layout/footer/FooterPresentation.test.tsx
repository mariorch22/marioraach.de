import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import FooterPresentation from './FooterPresentation';

vi.mock('@/i18n/navigation', () => ({
  Link: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

const defaultProps = {
  copyrightHolder: 'Mario Raach',
  currentYear: 2025,
  imprintLabel: 'Imprint',
  dataProtectionLabel: 'Data Protection',
};

test('renders copyright and navigation links', () => {
  render(<FooterPresentation {...defaultProps} />);
  expect(screen.getByText(/© 2025 Mario Raach/)).toBeDefined();
  expect(screen.getByText('Imprint')).toBeDefined();
  expect(screen.getByText('Data Protection')).toBeDefined();
});
