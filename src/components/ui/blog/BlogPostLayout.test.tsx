import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import BlogPostLayout from './BlogPostLayout';

test('renders blog post layout with children', () => {
  const { getByText } = render(
    <BlogPostLayout>
      <div>Test Content</div>
    </BlogPostLayout>
  );
  expect(getByText('Test Content')).toBeDefined();
});
