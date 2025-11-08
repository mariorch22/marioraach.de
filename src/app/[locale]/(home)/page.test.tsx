import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import Home from './page';

vi.mock('next-intl/server', () => ({
  setRequestLocale: vi.fn(),
  getTranslations: vi.fn(() => (key: string) => key),
}));

vi.mock('@/features/home/HomeContent', () => ({
  default: ({ locale }: { locale: string }) => <div data-testid="home-content">{locale}</div>,
}));

test('Home renders without errors', async () => {
  const { container } = render(await Home({ params: Promise.resolve({ locale: 'de' }) }));
  expect(container).toBeDefined();
});
