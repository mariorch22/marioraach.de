import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import PostList from './PostList';

vi.mock('./PostListItem', () => ({
  default: vi.fn(({ post }) => <div data-testid="post-item">{post.slug}</div>),
}));

test('renders post list with posts', () => {
  const posts = [
    {
      slug: 'test-post-1',
      title: 'Test 1',
      date: '2024-01-01',
      excerpt: 'Excerpt 1',
      category: 'blog' as const,
    },
    {
      slug: 'test-post-2',
      title: 'Test 2',
      date: '2024-01-02',
      excerpt: 'Excerpt 2',
      category: 'blog' as const,
    },
  ];
  const { getAllByTestId } = render(<PostList posts={posts} locale="en" />);
  expect(getAllByTestId('post-item')).toHaveLength(2);
});
