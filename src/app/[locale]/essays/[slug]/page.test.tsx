import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import EssayPage from './page';

vi.mock('next-intl/server', () => ({
  setRequestLocale: vi.fn(),
  getTranslations: vi.fn(() => (key: string) => key),
}));

vi.mock('@/lib/contentful/api/postApi', () => ({
  getPost: vi.fn(() =>
    Promise.resolve({
      title: 'Test Post',
      slug: 'test-post',
      summary: 'Test summary',
      publishingDate: '2025-01-01',
    })
  ),
  getAllPosts: vi.fn(() => Promise.resolve([])),
}));

vi.mock('@/features/blog/BlogPostContent', () => ({
  default: () => <div>Essay Post Content</div>,
}));

test('EssayPage renders without errors', async () => {
  const { container } = render(
    await EssayPage({
      params: Promise.resolve({ locale: 'de', slug: 'test-post' }),
    })
  );
  expect(container).toBeDefined();
});
