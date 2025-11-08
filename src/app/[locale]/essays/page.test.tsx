import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import EssaysIndex from './page';

vi.mock('next-intl/server', () => ({
  setRequestLocale: vi.fn(),
}));

vi.mock('@/lib/contentful/api/postApi', () => ({
  getAllPosts: vi.fn(() => Promise.resolve([])),
}));

vi.mock('@/i18n/navigation', () => ({
  Link: ({ children }: { children: React.ReactNode }) => <a>{children as string}</a>,
}));

test('EssaysIndex renders without errors', async () => {
  const { container } = render(await EssaysIndex({ params: Promise.resolve({ locale: 'de' }) }));
  expect(container).toBeDefined();
});
