import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import EmbeddedAsset from './EmbeddedAsset';

vi.mock('next/image', () => ({
  // eslint-disable-next-line @next/next/no-img-element
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

test('renders image with correct attributes', () => {
  const { container } = render(<EmbeddedAsset imageUrl="/test.jpg" alt="Test Image" />);

  const img = container.querySelector('img');
  expect(img).toBeDefined();
  expect(img?.getAttribute('src')).toBe('/test.jpg');
  expect(img?.getAttribute('alt')).toBe('Test Image');
});
