import { useQuery } from '@tanstack/react-query'
import { MY_URL_STRAPI } from '../../../../config';
import BlogCover from '../blogCover';
import BlogHeadersSkeleton from '../loading/blogHeadersSkeleton';
import moment from 'moment';
import { MdArrowForwardIos } from "react-icons/md";
interface Article {
    attributes: {
        title: string;
        publishingDate: Date;
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

    const { isLoading, isError, data, error } = useQuery({ queryKey: ['dataww'], queryFn: fetchDataDE })
    if (isLoading) {
        return <BlogHeadersSkeleton />;
    }
    if(isError){
        return <p className="w-screen h-screen bg-backgroundGray text-white pt-28 px-40 font-roboto">Error: {error.message}</p>
    }

    return(
        <>



            <div className="w-full md:px-40 grid grid-cols-1 md:grid-cols-2">
                {data && data.data && Object.entries(data.data)
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
                                    img="" 
                                    publishingDate={moment(article.attributes.publishingDate.toString()).format('DD.MM.YYYY')} 
                                    kategorie={article.attributes.Kategorie} 
                                    id={article.id} 
                                />
                            )}
                        </div>
                    )
                )}

            </div>
        </>
    )
}

export default FetchBlogData