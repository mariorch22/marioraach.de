import { useParams, Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'
import { MY_URL_STRAPI } from "../config";
import Navbar from "../components/navbar";
import moment from "moment";
import useFormatText from "../hooks/useFormatText";
import { IoArrowBack } from "react-icons/io5";
import BlogErrorPage from "../components/blog/blogpostPage/blogErrorPage";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import React, { useState } from "react";
import Divider  from "../components/general/divider";
import CommentForm from "../components/blog/blogpostPage/commentForm";
import CommentSection from "../components/blog/blogpostPage/commentSection";
import pageTransition from "../animations/pageTransiton";
import { CopyBlock, dracula  } from 'react-code-blocks';
import copy from 'copy-to-clipboard';

const fetchDataDE = async (blogId: string) => {
    const response = await fetch(`${MY_URL_STRAPI}/api/blogs/${blogId}?populate=deep`);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};
const Blogarticle = () => {

    const { blogId } = useParams();
    const [updateComments, setUpdateComments] = useState(false)
    const { isLoading, isError, data } = useQuery({ queryKey: ['dataww', blogId], queryFn: () => fetchDataDE(blogId as string) })

    if (isLoading) {
        return <p className="w-screen h-screen bg-backgroundGray text-white pt-28 px-40 font-roboto">Loading...</p>;
    }
    
    if(isError){
        return <BlogErrorPage />
    }

    const handleUpdateComments = () => {
        setUpdateComments(!updateComments)
    }
    
    return(
        <HelmetProvider>
            <Helmet>
                <title>{data.data.attributes.title}</title>
                <meta name="description" content={`Blog - ${data.data.attributes.title}`} />
                <meta name="keywords" content={`${data.data.attributes.title}`} />
            </Helmet>
            <Navbar />
            <div className="w-full min-h-screen bg-backgroundGray text-white pt-28 px-2 xl:px-40 font-roboto">
                <section className="bg-gray-200 text-black border border-gray-500 rounded-3xl relative">
                    <span className="absolute left-4 top-4">
                        <Link to="/blog">
                            <IoArrowBack size={30} className="text-gray-500" />
                        </Link>
                    </span>
                    <h1 className="text-3xl px-4 xl:text-7xl font-bold w-full text-center pt-16 xl:pt-12 xl:px-24 pb-4">
                        {data.data.attributes.title}
                    </h1>
                    <div className="flex justify-start pl-8 pb-8">
                        <span className="grid grid-cols-[2fr_3fr] max-w-[40rem] font-semibold text-gray-500">
                            <p className="text-md flex items-center">Kategorie :</p>
                            <p className="text-xl flex items-center">{data.data.attributes.Kategorie}</p>
                            <p className="text-md flex items-center">Datum:</p>
                            <p className="text-xl flex items-center">{moment(data.data.attributes.publishingDate).format( 'DD.MM.YYYY')}</p>
                        </span>
                    </div>

                    <div className="px-4 xl:px-20 text-xl bg-white text-black py-8 xl:py-20 rounded-b-3xl">
                        {data && data.data && data.data.attributes.a.map((index: any, i: number) => (
                            <React.Fragment key={i}>
                                {index.h1 && (
                                    <p className="text-4xl font-bold pt-8 pb-4">{useFormatText(index.h1)}</p>
                                )}
                                {index.h2 && (
                                    <p className="font-semibold text-2xl py-4">{useFormatText(index.h2)}</p>
                                )}
                                {index.text && (
                                    <p className="pb-8 leading-7 md:leading-9">{useFormatText(index.text)}</p>
                                )}
                                {index.Code && (
                                    <CopyBlock
                                        text={index.Code}
                                        language={"javascript"}
                                        showLineNumbers={true}
                                        theme={dracula}
                                        codeBlock
                                        onCopy={() => copy(index.Code)}
                                    />
                                )}

                                {index.bild.data && (
                                    <span className="w-full flex justify-center items-center">
                                        <img className="py-2 w-auto text-center" src={`${MY_URL_STRAPI}${index.bild.data.attributes.url}`} alt="Bild" />
                                    </span>
                                )}
                            </React.Fragment>
                        ))}

                        <Divider />

                        <div className="pt-12">
                            <h1 className="text-3xl font-bold">
                                Comments
                            </h1>

                            <CommentSection commentState={updateComments} />
                            <CommentForm handleState={handleUpdateComments} />

                        </div>
                    </div>
                    
                </section>

            </div>
        </HelmetProvider>
    )
}

export default pageTransition(Blogarticle)