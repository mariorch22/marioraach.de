import { useQuery } from '@tanstack/react-query'
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui_components/shadn/components/ui/card"
import { useParams, Link } from "react-router-dom";
import { useEffect, useCallback } from 'react';
import PopUp from '../../../animations/popUp';

const fetchDataDE = async () => {
    const response = await fetch(`https://j4hxxa1fo2.execute-api.eu-central-1.amazonaws.com/getMySiteComments`);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    return response.json();
};

interface CommentSectionProps {
    commentState: boolean;
}

const CommentSection: React.FC<CommentSectionProps> = ({ commentState }) => {
    const { blogId } = useParams();

    
    const { isLoading, isError, data, error, refetch } = useQuery({ queryKey: ['datawwuu'], queryFn: fetchDataDE })

    const fetchData = useCallback(async () => {
        try {
            await refetch();
        } catch (error) {
            console.error('Failed to refetch data:', error);
        }
    }, [refetch]);

    useEffect(() => {
        fetchData();
    }, [fetchData, commentState]);

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if(isError){
        return <p className="w-screen h-screen bg-backgroundGray text-white pt-28 px-40 font-roboto">Error: {error.message}</p>
    }

    const filteredData = data.filter((item: any) => item.blogId === blogId);

    const sortedData = filteredData.slice().sort((a: any, b: any) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });
      
    return(
        <div className="pt-4">
            {data && sortedData.map((item: any, index: number) => (
                <PopUp>
                    <div key={index} className='m-4'>
                        <Card className='shadow-2xl'>
                            <CardHeader>
                                <CardTitle className='flex justify-between w-full font-semibold'>
                                    <p className='text-md'>{item.username}</p>
                                    <p className='text-sm'>{new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(item.date))}</p>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {item.comment}
                                {commentState ? "!": "s22"}
                            </CardContent>
                        </Card>
                    </div>
                </PopUp>
            ))}
        </div>
    )
}

export default CommentSection;
