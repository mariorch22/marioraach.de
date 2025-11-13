import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import PostListItem from './PostListItem';

vi.mock('@/i18n/navigation', () => ({
  Link: vi.fn(({ children, href }) => <a href={href}>{children}</a>),
}));

vi.mock('./PostMeta', () => ({
  default: vi.fn(() => <div data-testid="post-meta">Meta</div>),
}));

test('renders post list item with post data', () => {
  const post = {
    slug: 'test-post',
    title: 'Test Post',
    publishingDate: '2024-01-01',
    summary: 'Test summary',
    category: 'blog' as const,
  };
  const { getByText } = render(<PostListItem post={post} locale="en" />);
  expect(getByText('Test Post')).toBeDefined();
});
