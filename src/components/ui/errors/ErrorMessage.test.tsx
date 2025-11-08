import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

test('renders error title and optional message', () => {
  render(<ErrorMessage title="Error Title" message="Error details" />);

  expect(screen.getByText('Error Title')).toBeDefined();
  expect(screen.getByText('Error details')).toBeDefined();
});
