import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { MY_URL_STRAPI } from '@/config';

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


const BlogSection = () => {
  const { isLoading, isError, data, error } = useQuery<StrapiData, Error>({
    queryKey: ['dataww'],
    queryFn: fetchDataDE,
  });
  if (isLoading) {
    return "Lade...";
  }
  if (isError) {
    return <p className="w-screen h-screen pt-28 px-40 font-roboto">Error: {error?.message}</p>; // Fehlerbehandlung verbessert
  }

  return (
    <div className="items-center justify-center w-full max-w-[60rem]">
      <h1 className='text-center text-xl'>
        Latest
      </h1>

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
            <div key={positionKey} className="my-3">
              {article && article.attributes && (
              <>
                <Link to={`/blog/${article.id}`} className="text-base md:text-lg font-roboto hover:text-blue-300">
                  <span className="text-gray-400">
                    {new Date(article.attributes.publishingDate).toLocaleDateString('de-DE', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    })}
                  </span>
                  {' '}
                  ▫
                  {' '}
                  {article.attributes.title}
                </Link>
              </>
              )}
            </div>
          ))
      }

    </div>
  );
};

export default BlogSection;
