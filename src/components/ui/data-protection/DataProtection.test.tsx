import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import DataProtection from './DataProtection';

test('renders data protection page with translations', () => {
  const mockTranslations = ((key: string) => key) as Awaited<
    ReturnType<typeof import('next-intl/server').getTranslations>
  >;
  mockTranslations.raw = (key: string) => {
    if (key.includes('paragraphs') || key.includes('bullets') || key.includes('addressLines')) {
      return ['Mock paragraph 1', 'Mock paragraph 2'];
    }
    return [];
  };

  render(<DataProtection translations={mockTranslations} locale="de" />);

  expect(screen.getByText('h1')).toBeDefined();
  expect(screen.getByText('overview.title')).toBeDefined();
  expect(screen.getByText('hosting.title')).toBeDefined();
  expect(screen.getByText('general.title')).toBeDefined();
});
