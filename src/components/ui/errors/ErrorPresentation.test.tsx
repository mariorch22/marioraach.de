import { expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ErrorPresentation from './ErrorPresentation';

vi.mock('@/i18n/navigation', () => ({
  Link: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

test('renders error with retry and home buttons', () => {
  const onRetry = vi.fn();

  render(
    <ErrorPresentation
      title="Something went wrong"
      retryText="Try again"
      backHomeText="Back to Home"
      onRetry={onRetry}
    />
  );

  expect(screen.getByText('Something went wrong')).toBeDefined();
  expect(screen.getByText('Try again')).toBeDefined();
  expect(screen.getByText('Back to Home')).toBeDefined();

  const retryButton = screen.getByText('Try again');
  fireEvent.click(retryButton);
  expect(onRetry).toHaveBeenCalled();
});
