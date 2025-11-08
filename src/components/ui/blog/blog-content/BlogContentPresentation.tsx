import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';

interface ContentRendererPresentationProps {
  json: Document;
  renderOptions: Options;
}

const BlogContentPresentation = ({ json, renderOptions }: ContentRendererPresentationProps) => {
  return (
    <div className="w-full max-w-[60rem] mx-auto">
      {documentToReactComponents(json, renderOptions)}
    </div>
  );
};

export default BlogContentPresentation;
