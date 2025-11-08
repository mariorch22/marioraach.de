import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import ImprintPage from './page';

vi.mock('next-intl/server', () => ({
  setRequestLocale: vi.fn(),
  getTranslations: vi.fn(() => {
    const t = (key: string) => key;
    t.raw = () => [];
    return t;
  }),
}));

vi.mock('@/features/imprint/ImprintContainer', () => ({
  default: () => <div>Imprint Content</div>,
}));

test('ImprintPage renders without errors', async () => {
  const { container } = render(await ImprintPage({ params: Promise.resolve({ locale: 'de' }) }));
  expect(container).toBeDefined();
});
