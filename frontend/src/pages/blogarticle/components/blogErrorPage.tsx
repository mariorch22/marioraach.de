import { Link } from "react-router-dom"
import Navbar from "@/components/navbar"

const BlogErrorPage = () => {
    return(
        <div className="w-screen h-screen">
            
            <Navbar />

            <div className="h-full w-full flex justify-center items-center flex-col px-6 text-xl text-center gap-6">
                Error: No  blog post found. Please check the URL or come back later.

                <Link to="/blog" className="underline text-4xl md:text-5xl">
                    Go Back to Blog
                </Link>
            </div>
        </div>
    )
}

export default BlogErrorPage