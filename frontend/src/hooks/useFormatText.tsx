const useFormatText = (text: string) => {
  // First handle tabs - replace with 4 non-breaking spaces
  const textWithTabs = text.replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
  
  // Handle links - format [text](url) to <a> tags with blue color
  const linkRegex = /\[(.+?)\]\((.+?)\)/g;
  const textWithLinks = textWithTabs.replace(linkRegex, '<a href="$2" class="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">$1</a>');

  // Then handle bold text
  const boldRegex = /\*\*(.+?)\*\*/g;
  const formattedText = textWithLinks.replace(boldRegex, "<b>$1</b>");

  return formattedText.split('\n').map((line, index) => (
    <span key={index}>
      <p className="py-1 whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: line }} />
    </span>
  ));
};

export default useFormatText;