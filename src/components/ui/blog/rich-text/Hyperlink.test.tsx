import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hyperlink from './Hyperlink';

test('renders link with correct attributes', () => {
  render(<Hyperlink uri="https://example.com" text="Test Link" />);

  const link = screen.getByText('Test Link');
  expect(link).toBeDefined();
  expect(link.getAttribute('href')).toBe('https://example.com');
  expect(link.getAttribute('target')).toBe('_blank');
  expect(link.getAttribute('rel')).toBe('noopener noreferrer');
});
