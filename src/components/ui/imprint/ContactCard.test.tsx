import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactCard from './ContactCard';

test('renders title and content', () => {
  render(<ContactCard title="Contact Title" content="Contact Content" />);

  expect(screen.getByText('Contact Title')).toBeDefined();
  expect(screen.getByText('Contact Content')).toBeDefined();
});
