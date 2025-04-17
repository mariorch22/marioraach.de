import React from 'react';

const useFormatText = (text: string) => {
  // First handle tabs - replace with 4 non-breaking spaces
  const textWithTabs = text.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');

  // Handle indented lines and bullet points
  const lines = textWithTabs.split('\n');
  const processedLines = lines.map(line => {
    const indentMatch = line.match(/^(\s+)(•|\-|\d+\.)?(\s*)(.+)/);
    if (indentMatch) {
      const [_, spaces, bullet, bulletSpace, content] = indentMatch;
      const indentWidth = spaces.length + (bullet?.length || 0) + (bulletSpace?.length || 0);
      return `<div style="padding-left: ${indentWidth}ch; text-indent: -${bullet ? bullet.length : 0}ch;"><span style="font-weight: 600">${bullet || ''}</span>${bullet ? ' ' : ''}${content}</div>`;
    }
    return line;
  });
  const textWithIndentation = processedLines.join('\n');

  // Handle multiple newlines - preserve them with smaller <br> tags
  const textWithNewlines = textWithIndentation.replace(/\n\n+/g, match => {
    const brCount = match.length;
    return `<div class="empty-line" style="height: ${brCount * 0.5}rem"></div>`;
  });

  // Handle inline quotes with /q tags
  const quoteRegex = /\/q(.*?)\/q/g;
  const textWithQuotes = textWithNewlines.replace(quoteRegex, '<span class="italic">„$1"</span>');

  // Handle links - format [text](url) to <a> tags with blue color
  const linkRegex = /\[(.+?)\]\((.+?)\)/g;
  const textWithLinks = textWithQuotes.replace(
    linkRegex,
    '<a href="$2" class="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  // Then handle bold text
  const boldRegex = /\*\*(.+?)\*\*/g;
  const formattedText = textWithLinks.replace(boldRegex, '<b>$1</b>');

  return formattedText.split('\n').map((line, index) => (
    <span key={index}>
      <p className="py-0.5 whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: line }} />
    </span>
  ));
};

export default useFormatText;
