import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';

interface BlogContentProps {
  json: Document;
  renderOptions: Options;
}

const BlogContent = ({ json, renderOptions }: BlogContentProps) => {
  return (
    <div className="w-full max-w-[60rem] mx-auto">
      {documentToReactComponents(json, renderOptions)}
    </div>
  );
};

export default BlogContent;
