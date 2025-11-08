import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import BlogContentPresentation from './BlogContentPresentation';
import { Document, BLOCKS } from '@contentful/rich-text-types';

vi.mock('@contentful/rich-text-react-renderer', () => ({
  documentToReactComponents: vi.fn(() => <div>Rendered Content</div>),
}));

test('renders blog content with document and options', () => {
  const mockDocument: Document = {
    nodeType: BLOCKS.DOCUMENT,
    data: {},
    content: [],
  };

  const { container } = render(<BlogContentPresentation json={mockDocument} renderOptions={{}} />);

  expect(container.querySelector('.max-w-\\[60rem\\]')).toBeDefined();
});
