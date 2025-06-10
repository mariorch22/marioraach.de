import React from 'react';

const useFormatText = (text: string) => {
  // First handle tabs - replace with 4 non-breaking spaces
  const textWithTabs = text.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');

  // Handle indented lines and bullet points with proper semantic structure
  const lines = textWithTabs.split('\n');
  const processedLines = lines.map(line => {
    const indentMatch = line.match(/^(\s+)(•|\-|\d+\.)?(\s*)(.+)/);
    if (indentMatch) {
      const [_, spaces, bullet, bulletSpace, content] = indentMatch;
      const indentWidth = spaces.length + (bullet?.length || 0) + (bulletSpace?.length || 0);
      
      // Use proper list semantics when bullet points are detected
      if (bullet && (bullet === '•' || bullet === '-')) {
        return `<div role="listitem" style="padding-left: ${indentWidth}ch; text-indent: -${bullet.length}ch;" class="list-item"><span class="font-semibold" aria-hidden="true">${bullet}</span> ${content}</div>`;
      } else if (bullet && bullet.match(/\d+\./)) {
        return `<div role="listitem" style="padding-left: ${indentWidth}ch; text-indent: -${bullet.length}ch;" class="list-item"><span class="font-semibold" aria-hidden="true">${bullet}</span> ${content}</div>`;
      }
      
      return `<div style="padding-left: ${indentWidth}ch;" class="indented-content">${content}</div>`;
    }
    return line;
  });
  const textWithIndentation = processedLines.join('\n');

  // Handle multiple newlines - preserve them with proper spacing
  const textWithNewlines = textWithIndentation.replace(/\n\n+/g, match => {
    const brCount = match.length;
    return `<div class="content-spacer" style="height: ${Math.min(brCount * 0.5, 2)}rem" aria-hidden="true"></div>`;
  });

  // Handle inline quotes with proper semantic markup
  const quoteRegex = /\/q(.*?)\/q/g;
  const textWithQuotes = textWithNewlines.replace(quoteRegex, '<q class="italic">$1</q>');

  // Handle links with improved accessibility
  const linkRegex = /\[(.+?)\]\((.+?)\)/g;
  const textWithLinks = textWithQuotes.replace(
    linkRegex,
    '<a href="$2" class="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded-sm" target="_blank" rel="noopener noreferrer" aria-label="$1 (opens in new tab)">$1</a>'
  );

  // Handle bold text with proper semantic emphasis
  const boldRegex = /\*\*(.+?)\*\*/g;
  const formattedText = textWithLinks.replace(boldRegex, '<strong class="font-semibold">$1</strong>');

  return formattedText.split('\n').map((line, index) => {
    // Skip empty lines
    if (!line.trim()) return null;
    
    return (
      <span key={index}>
        <p 
          className="py-0.5 whitespace-pre-wrap leading-relaxed" 
          dangerouslySetInnerHTML={{ __html: line }}
        />
      </span>
    );
  }).filter(Boolean); // Remove null entries
};

export default useFormatText;
