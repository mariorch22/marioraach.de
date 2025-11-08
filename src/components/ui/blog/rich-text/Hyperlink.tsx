import { ReactNode } from 'react';

interface HyperlinkProps {
  uri: string;
  text: ReactNode;
}

const Hyperlink = ({ uri, text }: HyperlinkProps) => {
  return (
    <a
      href={uri}
      className="underline underline-offset-4"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};

export default Hyperlink;
