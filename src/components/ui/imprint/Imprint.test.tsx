import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Imprint from './Imprint';
import { ImprintData } from '@/types/imprint';

vi.mock('@/components/ui/imprint/Section', () => ({
  default: ({ title, content }: { title: string; content: string }) => (
    <div>
      <h3>{title}</h3>
      <div>{content}</div>
    </div>
  ),
}));

vi.mock('@/components/ui/imprint/ContactCard', () => ({
  default: ({ title, content }: { title: string; content: React.ReactNode }) => (
    <div>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  ),
}));

test('renders imprint with data', () => {
  const mockData: ImprintData = {
    title: 'Imprint',
    legalReference: 'Legal Reference',
    operator: { title: 'Operator', name: 'John Doe' },
    address: { title: 'Address', street: 'Main St', city: 'Berlin' },
    contact: { title: 'Contact', email: 'test@example.com' },
    responsible: { title: 'Responsible', name: 'Jane Doe', street: 'Main St', city: 'Berlin' },
    disclaimer: { title: 'Disclaimer', sections: [{ title: 'Section 1', content: 'Content 1' }] },
  };

  render(<Imprint data={mockData} />);

  expect(screen.getByText('Imprint')).toBeDefined();
  expect(screen.getByText('Legal Reference')).toBeDefined();
});
