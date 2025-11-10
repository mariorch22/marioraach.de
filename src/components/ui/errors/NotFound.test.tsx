import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

vi.mock('@/i18n/navigation', () => ({
  Link: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

test('renders 404 page with title and home link', () => {
  render(<NotFound title="Page not found" backToHomeText="Back to Home" />);

  expect(screen.getByText('Page not found')).toBeDefined();
  expect(screen.getByText('Back to Home')).toBeDefined();
});
