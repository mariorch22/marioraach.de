import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PostListItem } from './PostListItem';
import { BlogPost } from '@/types/blog';

vi.mock('@/i18n/navigation', () => ({
  Link: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

vi.mock('@/lib/utils/textUtils', () => ({
  formatDate: (date: string) => date,
  softTruncate: (text: string) => text,
}));

test('renders post item with title and metadata', () => {
  const post: BlogPost = {
    slug: 'test-post',
    title: 'Test Post',
    summary: 'Test summary',
    publishingDate: '2025-01-01',
  };

  render(<PostListItem post={post} locale="en" basePath="/blog" label="Blog" />);

  expect(screen.getByText('Test Post')).toBeDefined();
  expect(screen.getByText('Test summary')).toBeDefined();
  expect(screen.getByText('Blog')).toBeDefined();
});
