import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Divider from './DividerPresentation';

vi.mock('@/lib/utils', () => ({
  cn: (...classes: string[]) => classes.filter(Boolean).join(' '),
}));

test('renders divider with separator role', () => {
  render(<Divider />);

  const divider = screen.getByRole('separator');
  expect(divider).toBeDefined();
  expect(divider.getAttribute('aria-label')).toBe('Divider');
});
