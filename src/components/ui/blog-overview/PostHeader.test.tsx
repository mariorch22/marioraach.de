import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import PostHeader from './PostHeader';

test('renders post header with title and subtitle', () => {
  const { getByText } = render(<PostHeader title="Test Title" subtitle="Test Subtitle" />);
  expect(getByText('Test Title')).toBeDefined();
  expect(getByText('Test Subtitle')).toBeDefined();
});
