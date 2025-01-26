import { useQuery } from '@tanstack/react-query';
import { MY_URL_STRAPI } from '@/config';
import BlogCover from '@/pages/blog/components/blogCover';
import BlogHeadersSkeleton from '@/pages/blog/components/loading/blogHeadersSkeleton';
import moment from 'moment';

interface Article {
  attributes: {
    title: string;
    publishingDate: string; // Änderung von Date auf string
    Kategorie: string;
    blogtext: string;
  };
  id: number;
}

interface StrapiData {
  data: {
    [positionKey: string]: Article;
  };
}

const fetchDataDE = async (): Promise<StrapiData> => {
  const response = await fetch(`${MY_URL_STRAPI}/api/blogs?populate=*`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json() as Promise<StrapiData>;
};

const FetchBlogData = () => {
  const { isLoading, isError, data, error } = useQuery<StrapiData, Error>({
    queryKey: ['dataww'],
    queryFn: fetchDataDE,
  }); // Typisierung hinzugefügt
  if (isLoading) {
    return <BlogHeadersSkeleton />;
  }
  if (isError) {
    return <p className="w-screen h-screen pt-28 px-40 font-roboto">Error: {error?.message}</p>; // Fehlerbehandlung verbessert
  }

  return (
    <>
      <div className="w-full md:px-40 grid grid-cols-1 md:grid-cols-2">
        {data &&
          data.data &&
          Object.entries<Article>(data.data) // Hier wird ein Type Assertion verwendet, um TypeScript mitzuteilen, dass die Werte Article-Objekte sind
            .sort(([, articleA], [, articleB]) => {
              if (!articleA.attributes) {
                return 0;
              }
              const timestampA = new Date(articleA.attributes.publishingDate).getTime();
              const timestampB = new Date(articleB.attributes.publishingDate).getTime();
              return timestampB - timestampA;
            })
            .map(([positionKey, article]) => (
              <div key={positionKey} className="my-2 md:my-8 md:mx-12">
                {article && article.attributes && (
                  <BlogCover
                    title={article.attributes.title}
                    publishingDate={moment(article.attributes.publishingDate).format('DD.MM.YYYY')}
                    kategorie={article.attributes.Kategorie}
                    id={article.id}
                  />
                )}
              </div>
            ))}
      </div>
    </>
  );
};

export default FetchBlogData;
