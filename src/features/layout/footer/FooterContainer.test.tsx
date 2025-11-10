import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import FooterContainer from './FooterContainer';

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}));

vi.mock('@/components/layout/footer/Footer', () => ({
  default: vi.fn(() => <footer data-testid="footer">Footer</footer>),
}));

test('renders footer with translations', () => {
  const { getByTestId } = render(<FooterContainer />);
  expect(getByTestId('footer')).toBeDefined();
});
