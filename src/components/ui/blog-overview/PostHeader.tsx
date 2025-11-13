interface PostHeaderProps {
  title: string;
  subtitle: string;
}

const PostHeader = ({ title, subtitle }: PostHeaderProps) => {
  return (
    <header>
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">{title}</h1>
      <p className="mt-2 text-gray-alpha-400">{subtitle}</p>
    </header>
  );
};

export default PostHeader;
