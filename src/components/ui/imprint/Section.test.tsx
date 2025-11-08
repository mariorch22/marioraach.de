import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Section from './Section';

test('renders title and content', () => {
  render(<Section title="Section Title" content="Section Content" />);

  expect(screen.getByText('Section Title')).toBeDefined();
  expect(screen.getByText('Section Content')).toBeDefined();
});
