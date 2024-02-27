import { Button } from "../../ui_components/shadn/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui_components/shadn/components/ui/card"
import { GoArrowUpRight } from "react-icons/go";
import SlideUpWhenVisible from "../../animations/slideUpWhenVisible";

  interface BlogCoverProps {
    title: string;
    img: string;
    kategorie: string;
    publishingDate: string;
}

const BlogCover: React.FC<BlogCoverProps> = ({title, img, kategorie, publishingDate}) => {
    return(
        <SlideUpWhenVisible>
            <Card className="bg-gray-800 rounded-xl border-none shadow-3xl shadow-white/10 hover:shadow-3xl hover:shadow-white/30 min-h-[15rem] max-h-[25rem] relative w-full bg-blog_ai">            
                <CardHeader className="absolute top-0 rounded-tl-xl rounded-br-xl bg-blue-800/60">
                        <CardTitle className="text-gray-200">{title}</CardTitle>
                        <CardDescription>{kategorie}, {publishingDate}</CardDescription>
                </CardHeader>
                <CardContent>

                    <Button className="absolute right-4 bottom-4 bg-blue-800 hover:bg-blue-600">
                        <p className="pr-2 font-roboto">Zum Artikel</p>
                        <GoArrowUpRight />
                    </Button>
                </CardContent>
            </Card>
        </SlideUpWhenVisible>
    )
}

export default BlogCover