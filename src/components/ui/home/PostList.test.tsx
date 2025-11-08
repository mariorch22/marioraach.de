import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import PostList from './PostList';
import { BlogPost } from '@/types/blog';

vi.mock('@/lib/utils', () => ({
  cn: (...classes: string[]) => classes.filter(Boolean).join(' '),
}));

vi.mock('./PostListItem', () => ({
  PostListItem: ({ post }: { post: BlogPost }) => <div>{post.title}</div>,
}));

test('renders post list with items', () => {
  const posts: BlogPost[] = [
    { slug: 'post-1', title: 'Post 1' },
    { slug: 'post-2', title: 'Post 2' },
  ];

  render(<PostList posts={posts} locale="en" category="blog" />);

  expect(screen.getByText('Post 1')).toBeDefined();
  expect(screen.getByText('Post 2')).toBeDefined();
});

test('renders nothing when posts array is empty', () => {
  const { container } = render(<PostList posts={[]} locale="en" category="blog" />);

  expect(container.firstChild).toBeNull();
});
