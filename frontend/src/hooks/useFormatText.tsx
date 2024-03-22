const useFormatText = (text: string) => {
    const regex = /\*\*(.+?)\*\*/g;
    const formattedText = text.replace(regex, "<b>$1</b>"); // Use <b> for bold text
  
    return formattedText.split('\n').map((line, index) => (
      <span key={index}>
        {/* Dangerously set innerHTML for demonstration purposes only (consider security implications) */}
        <div className="py-1" dangerouslySetInnerHTML={{ __html: line }} />
      </span>
    ));
  };
  
  export default useFormatText;
  