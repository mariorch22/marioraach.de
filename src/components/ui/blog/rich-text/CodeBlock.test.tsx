import { expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CodeBlock from './CodeBlock';

test('renders code block with copy button', () => {
  const handleCopy = vi.fn();

  render(
    <CodeBlock text="const x = 42;" handleCopy={handleCopy} copiedId={null} codeId="code-1" />
  );

  expect(screen.getByText('const x = 42;')).toBeDefined();

  const copyButton = screen.getByTitle('Copy to clipboard');
  fireEvent.click(copyButton);

  expect(handleCopy).toHaveBeenCalledWith('const x = 42;', 'code-1');
});
