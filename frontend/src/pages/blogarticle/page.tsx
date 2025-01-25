import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'
import { MY_URL_STRAPI } from "@/config";
import Navbar from "@/components/navbar";
import moment from "moment";
import useFormatText from "@/hooks/useFormatText";
import BlogErrorPage from "./components/blogErrorPage";
import React, { useState } from "react";
import Divider  from "@/components/general/divider";
import CommentForm from "./components/commentForm";
import CommentSection from "./components/commentSection";
import { CopyBlock, a11yDark  } from 'react-code-blocks';
import useCopyToClipboard from "@/animations/useCopyToClipboard";

const fetchDataDE = async (blogId: string) => {
    const response = await fetch(`${MY_URL_STRAPI}/api/blogs/${blogId}?populate=deep`);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};
const Blogarticle = () => {
    const copyToClipboard = useCopyToClipboard();
    const { blogId } = useParams();
    const [updateComments, setUpdateComments] = useState(false)
    const { isLoading, isError, data } = useQuery({ queryKey: ['dataww', blogId], queryFn: () => fetchDataDE(blogId as string) })

    if (isLoading) {
        return <p className="w-screen h-screen pt-28 px-40 font-roboto">Loading...</p>;
    }
    
    if(isError){
        return <BlogErrorPage />
    }

    const handleUpdateComments = () => {
        setUpdateComments(!updateComments)
    }

    const handleCopy  = async (text: string) => {
        await copyToClipboard(text)
      };
    
    return(
        <>

            <Navbar />
            <div className="w-full pt-20 lg:pt-32 px-4 xl:px-40 font-inter">
                <section className="relative">
                    <h1 className="text-3xl md:text-4xl font-bold w-full text-center pt-16 xl:pt-12 pb-4 font-inter">
                        {data.data.attributes.title}
                    </h1>
                    <div className="flex justify-center pl-8 pb-8">
                        <p className="text-sm lg:text-md flex items-center text-gray-500 font-inter">{moment(data.data.attributes.publishingDate).format( 'DD.MM.YYYY')}</p>
                    </div>

                    <div className="xl:px-20 text-xl xl:py-20 rounded-b-3xl font-merriweather leading-relaxed font-semibold">
                        {data && data.data && data.data.attributes.a.map((index: any, i: number) => (
                            <React.Fragment key={i}>
                                {index.h1 && (
                                    <p className="text-2xl font-bold pt-8 pb-4">{useFormatText(index.h1)}</p>
                                )}
                                {index.h2 && (
                                    <p className="font-semibold text-xl py-4">{useFormatText(index.h2)}</p>
                                )}
                                {index.text && (
                                    <p className="pb-4 tracking-wide font-normal text-base leading-7 font-inter">{useFormatText(index.text)}</p>
                                )}
                                {index.Code && (
                                    <CopyBlock
                                        text={index.Code}
                                        language={"python"}
                                        showLineNumbers={false}
                                        codeBlock
                                        onCopy={() => handleCopy (index.Code)}
                                        theme={a11yDark}
                                        customStyle={{
                                            height: '300px',
                                            overflowY: 'scroll',
                                            margin: '0px 0.75rem',
                                            padding: '1rem',
                                            borderRadius: '20px',
                                            fontSize: '0.75rem',
                                          }}
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
        </>
    )
}

export default Blogarticle