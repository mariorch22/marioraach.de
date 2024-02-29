import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from '@tanstack/react-query'
import { MY_URL_STRAPI } from "../config";
import Navbar from "../components/navbar";
import moment from "moment";
import useFormatText from "../hooks/useFormatText";
import { IoArrowBack } from "react-icons/io5";

const Blogarticle = () => {

    const { blogId } = useParams();

    const fetchDataDE = async () => {
        const response = await fetch(`${MY_URL_STRAPI}/api/blogs/${blogId}`);
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
        return <p>Error: {error.message}</p>
    }
    
    return(
        <>
            <Navbar />
            <div className="w-full min-h-screen bg-backgroundGray text-white pt-28 px-2 xl:px-40 font-roboto">

                <section className="bg-gray-200 text-black border border-gray-500 rounded-3xl relative">
                    <span className="absolute left-4 top-4">
                        <a href="/blog">
                            <IoArrowBack size={30} />
                        </a>
                    </span>
                    <h1 className="text-7xl font-bold w-full text-center pt-8 pb-4">
                        {data.data.attributes.title}
                    </h1>
                    <h2 className="flex justify-center pb-8">
                        <span className="grid grid-cols-[1fr_2fr] max-w-[20rem] font-semibold">
                            <p className="text-black text-md">
                                Kategorie :
                            </p>
                            <p className="text-xl">
                                {data.data.attributes.Kategorie}
                            </p>
                            <p className="text-black text-md">
                                Datum:
                            </p>
                            <p className="text-xl">
                                {moment(data.data.attributes.publishingDate).format( 'DD.MM.YYYY')}
                            </p>
                        </span>
                    </h2>

                    <div className="px-4 xl:px-20 text-xl bg-white text-black py-8 xl:py-20 rounded-b-3xl">
                        
                        {useFormatText(data.data.attributes.blogtext)}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Blogarticle