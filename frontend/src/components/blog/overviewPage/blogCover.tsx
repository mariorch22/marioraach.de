import { Button } from "../../../ui_components/shadn/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../ui_components/shadn/components/ui/card"
import { GoArrowUpRight } from "react-icons/go";
import React from "react";

  interface BlogCoverProps {
    title: string;
    img: string;
    kategorie: string;
    publishingDate: string;
    id: number;
}

const BlogCover: React.FC<BlogCoverProps> = ({title, kategorie, publishingDate, id}) => {
    return(

        <Card className="bg-backgroundGray border border-gray-400 rounded-xl shadow-3xl shadow-white/10 hover:shadow-3xl hover:shadow-white/30 min-w-[17rem] md:min-w-[25rem] min-h-[12rem] max-h-[25rem] relative w-full"> 
                      
            <CardHeader className="absolute top-0 rounded-tl-xl rounded-br-xl">
                <CardTitle className="text-gray-200">{title}</CardTitle>
                <CardDescription>{kategorie}, {publishingDate}</CardDescription>
            </CardHeader>

            <CardContent>
                <a href={`/blog/${id}`}>
                    <Button className="absolute right-4 bottom-4 bg-blue-800 hover:bg-blue-600">
                        <p className="pr-2 font-roboto">Zum Artikel</p>
                        <GoArrowUpRight />
                    </Button>
                </a>
            </CardContent>
        </Card>

    )
}

export default React.memo(BlogCover);