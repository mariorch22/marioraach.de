export const softTruncate = (text: string, maxLen = 200): string => {
  const cleanText = text.replace(/\s+/g, ' ').trim();

  if (cleanText.length <= maxLen) {
    return cleanText;
  }

  const cut = cleanText.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(' ');

  return (lastSpace > 0 ? cut.slice(0, lastSpace) : cut) + ' …';
};

export const formatDate = (dateString: string, locale: string): string => {
  if (!dateString) return '';

  return new Date(dateString).toLocaleDateString(locale === 'de' ? 'de-DE' : 'en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'UTC',
  });
};
