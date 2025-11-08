import { expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Paragraph from './Paragraph';

test('renders code block with copy button', async () => {
  const handleCopy = vi.fn();

  render(
    <Paragraph text="console.log('test')" handleCopy={handleCopy} copiedId={null} codeId="code-1" />
  );

  expect(screen.getByText("console.log('test')")).toBeDefined();

  const copyButton = screen.getByTitle('Copy to clipboard');
  fireEvent.click(copyButton);

  expect(handleCopy).toHaveBeenCalledWith("console.log('test')", 'code-1');
});
