import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import Blog from './page';

vi.mock('next-intl/server', () => ({
  setRequestLocale: vi.fn(),
  getTranslations: vi.fn(() => (key: string) => key),
}));

vi.mock('@/lib/contentful/api/postApi', () => ({
  getAllPosts: vi.fn(() => Promise.resolve([])),
}));

vi.mock('@/i18n/navigation', () => ({
  Link: ({ children }: { children: React.ReactNode }) => <a>{children as string}</a>,
}));

test('Blog renders without errors', async () => {
  const { container } = render(await Blog({ params: Promise.resolve({ locale: 'de' }) }));
  expect(container).toBeDefined();
});
