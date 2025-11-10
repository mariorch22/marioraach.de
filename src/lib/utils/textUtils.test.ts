import { describe, it, expect } from 'vitest';
import { softTruncate, formatDate } from './textUtils';

describe('softTruncate', () => {
  it('returns text unchanged if shorter than maxLen', () => {
    expect(softTruncate('Hello', 10)).toBe('Hello');
  });

  it('returns text unchanged if equal to maxLen', () => {
    const text = 'a'.repeat(200);
    expect(softTruncate(text, 200)).toBe(text);
  });

  it('truncates at last space before maxLen', () => {
    const text = 'Hello world this is a long text';
    expect(softTruncate(text, 15)).toBe('Hello world …');
  });

  it('truncates at maxLen if no space found', () => {
    const text = 'a'.repeat(250);
    expect(softTruncate(text, 200)).toBe('a'.repeat(200) + ' …');
  });

  it('normalizes multiple spaces to single space', () => {
    expect(softTruncate('Hello    world', 50)).toBe('Hello world');
  });

  it('trims whitespace', () => {
    expect(softTruncate('  Hello world  ', 50)).toBe('Hello world');
  });

  it('uses default maxLen of 200', () => {
    const text = 'a'.repeat(250);
    expect(softTruncate(text)).toBe('a'.repeat(200) + ' …');
  });

  it('handles empty string', () => {
    expect(softTruncate('')).toBe('');
  });
});

describe('formatDate', () => {
  it('formats date in German locale', () => {
    expect(formatDate('2024-03-15', 'de')).toBe('15.03.2024');
  });

  it('formats date in English locale', () => {
    expect(formatDate('2024-03-15', 'en')).toBe('03/15/2024');
  });

  it('formats date with non-de locale as English', () => {
    expect(formatDate('2024-03-15', 'fr')).toBe('03/15/2024');
  });

  it('returns empty string for empty input', () => {
    expect(formatDate('', 'de')).toBe('');
  });

  it('handles ISO date-time strings', () => {
    expect(formatDate('2024-03-15T10:30:00Z', 'de')).toBe('15.03.2024');
  });
});
