import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import HomeLayout from './HomeLayout';

test('renders home layout with children', () => {
  const { getByText } = render(
    <HomeLayout>
      <div>Test Content</div>
    </HomeLayout>
  );
  expect(getByText('Test Content')).toBeDefined();
});
