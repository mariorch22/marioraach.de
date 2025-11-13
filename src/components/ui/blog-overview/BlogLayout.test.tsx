import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import BlogLayout from './BlogLayout';

test('renders blog layout with children', () => {
  const { getByText } = render(
    <BlogLayout>
      <div>Test Content</div>
    </BlogLayout>
  );
  expect(getByText('Test Content')).toBeDefined();
});
