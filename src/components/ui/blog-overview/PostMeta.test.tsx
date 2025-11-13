import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import PostMeta from './PostMeta';

test('renders post meta with date and category', () => {
  const { getByText } = render(<PostMeta date="2024-01-01" category="Blog" />);
  expect(getByText('Blog')).toBeDefined();
});
