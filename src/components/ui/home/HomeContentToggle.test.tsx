import { expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import HomeContentToggle from './HomeContentToggle';

vi.mock('@/lib/utils', () => ({
  cn: (...classes: string[]) => classes.filter(Boolean).join(' '),
}));

test('renders tabs and switches content on click', () => {
  render(
    <HomeContentToggle leftLabel="Blog" rightLabel="Essays">
      <div>Blog Content</div>
      <div>Essays Content</div>
    </HomeContentToggle>
  );

  expect(screen.getByText('Blog')).toBeDefined();
  expect(screen.getByText('Essays')).toBeDefined();
  expect(screen.getByText('Blog Content')).toBeDefined();

  const essaysTab = screen.getByText('Essays');
  fireEvent.click(essaysTab);

  expect(screen.getByText('Essays Content')).toBeDefined();
});
