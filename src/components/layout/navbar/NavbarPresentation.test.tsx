import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import NavbarPresentation from './NavbarPresentation';

vi.mock('@/features/layout/logo-link/LogoContainer', () => ({
  default: () => <div>Logo</div>,
}));

vi.mock('@/features/i18n/LanguageSelectorContainer', () => ({
  default: () => <div>Language Selector</div>,
}));

test('renders navigation with logo and language selector', () => {
  render(<NavbarPresentation />);
  expect(screen.getByRole('navigation', { name: 'Primary' })).toBeDefined();
  expect(screen.getByText('Logo')).toBeDefined();
  expect(screen.getByText('Language Selector')).toBeDefined();
});
