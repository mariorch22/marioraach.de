import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from '@tanstack/react-query'
import { MY_URL_STRAPI } from "../config";
import Navbar from "../components/navbar";

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
        return <p className="w-full min-h-screen bg-backgroundGray text-white pt-28 px-40 font-roboto">Loading...</p>;
    }
    
    if(isError){
        return <p>Error: {error.message}</p>
    }
    return(
        <>
            <Navbar />
            <div className="w-full min-h-screen bg-backgroundGray text-white pt-28 px-40 font-roboto">
                {data.data.attributes.title}
                {data.data.attributes.Kategorie}
                {data.data.attributes.publishingDate}
            </div>
        </>
    )
}

export default Blogarticle