import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomeHero from './HomeHero';

test('renders title and subline', () => {
  render(<HomeHero title="Welcome" subline="This is a subline" />);

  expect(screen.getByText('Welcome')).toBeDefined();
  expect(screen.getByText('This is a subline')).toBeDefined();
});
