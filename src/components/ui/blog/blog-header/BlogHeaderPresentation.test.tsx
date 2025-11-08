import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import BlogHeaderPresentation from './BlogHeaderPresentation';

test('renders title and optional content', () => {
  render(
    <BlogHeaderPresentation
      title="Test Title"
      summary="Test Summary"
      formattedDate="January 1, 2025"
      summaryLabel="Summary"
    />
  );

  expect(screen.getByText('Test Title')).toBeDefined();
  expect(screen.getByText('Test Summary')).toBeDefined();
  expect(screen.getByText('January 1, 2025')).toBeDefined();
});
