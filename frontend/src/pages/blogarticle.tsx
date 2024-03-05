import { useParams, Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query'
import { MY_URL_STRAPI } from "../config";
import Navbar from "../components/navbar";
import moment from "moment";
import useFormatText from "../hooks/useFormatText";
import { IoArrowBack } from "react-icons/io5";
import BlogErrorPage from "../components/blog/blogErrorPage";
import { Helmet } from 'react-helmet';


const Blogarticle = () => {

    const { blogId } = useParams();

    const fetchDataDE = async () => {
        const response = await fetch(`${MY_URL_STRAPI}/api/blogs/${blogId}?populate=deep`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    };

    const { isLoading, isError, data, error } = useQuery({ queryKey: ['dataww'], queryFn: fetchDataDE })

    if (isLoading) {
        return <p className="w-screen h-screen bg-backgroundGray text-white pt-28 px-40 font-roboto">Loading...</p>;
    }
    
    if(isError){
        return <BlogErrorPage />
    }
    
    return(
        <>
            <Helmet>
                <title>{data.data.attributes.title}</title>
                <meta name="description" content={`Blogeintrag von Mario Raach zum Thema ${data.data.attributes.title}`} />
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
                <h2 className="flex justify-start pl-8 pb-8">
                    <span className="grid grid-cols-[1fr_2fr] max-w-[20rem] font-semibold text-gray-500">
                        <p className="text-md">Kategorie :</p>
                        <p className="text-xl">{data.data.attributes.Kategorie}</p>
                        <p className="text-md">Datum:</p>
                        <p className="text-xl">{moment(data.data.attributes.publishingDate).format( 'DD.MM.YYYY')}</p>
                    </span>
                </h2>

                <div className="px-4 xl:px-20 text-xl bg-white text-black py-8 xl:py-20 rounded-b-3xl">
                    {data.data.attributes.a.map((index:any) => (
                        <>
                            {index.h1 && (
                                <p className="text-4xl font-bold pt-8 pb-4" key={index.h1}>{useFormatText(index.h1)}</p>
                            )}
                            {index.h2 && (
                                <p className="font-semibold text-2xl py-4" key={index.h2}>{useFormatText(index.h2)}</p>
                            )}
                            {index.text && (
                                <p className="pb-8 leading-9" key={index.text}>{useFormatText(index.text)}</p>
                            )}
                            {index.bild.data && (
                                <span className="w-full flex justify-center items-center" key={`image-${index}`}>
                                    <img className="py-8 w-auto text-center" src={`${MY_URL_STRAPI}${index.bild.data.attributes.url}`} alt="Bild" />
                                </span>
                            )}
                        </>
                    ))}
                </div>
            </section>

            </div>
        </>
    )
}

export default Blogarticle