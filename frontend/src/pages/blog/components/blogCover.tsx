import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/ui_components/shadn/components/ui/card';

// Types
interface BlogCoverProps {
  id: number;
  title: string;
  kategorie: string;
  publishingDate: string;
  className?: string;
}

// Constants
const STYLES = {
  card: 'bg-backgroundGray border border-gray-400 rounded-xl shadow-3xl shadow-white/10 hover:shadow-3xl hover:shadow-white/30 min-w-[17rem] md:min-w-[25rem] min-h-[12rem] max-h-[25rem] relative w-full transition-shadow duration-300',
  header: 'absolute top-0 rounded-tl-xl rounded-br-xl',
  title: 'text-gray-200',
} as const;

const BlogCover: React.FC<BlogCoverProps> = ({
  id,
  title,
  kategorie,
  publishingDate,
  className,
}) => {
  const formattedMeta = `${kategorie}, ${publishingDate}`;
  const blogUrl = `/blog/${id}`;

  return (
    <Link to={blogUrl} className="block" aria-label={`Read blog post: ${title}`}>
      <Card className={STYLES.card}>
        <CardHeader className={STYLES.header}>
          <CardTitle className={STYLES.title}>{title}</CardTitle>
          <CardDescription>{formattedMeta}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default React.memo(BlogCover);
