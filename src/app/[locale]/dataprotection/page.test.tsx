import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import DataProtectionPage from './page';

vi.mock('next-intl/server', () => ({
  setRequestLocale: vi.fn(),
  getTranslations: vi.fn(() => (key: string) => key),
}));

vi.mock('@/features/data-protection/DataProtectionContainer', () => ({
  default: () => <div>Data Protection Content</div>,
}));

test('DataProtectionPage renders without errors', async () => {
  const { container } = render(
    await DataProtectionPage({ params: Promise.resolve({ locale: 'de' }) })
  );
  expect(container).toBeDefined();
});
