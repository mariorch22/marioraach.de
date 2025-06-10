import { useParams } from "react-router-dom";
import { useBlogData } from "@/hooks/useBlogData";
import { BlogHeader } from "./components/BlogHeader";
import { BlogContent } from "./components/BlogContent";
import FadeInWhenVisible from "@/animations/fadeInWhenVisible";

function Blog() {
  const { slug } = useParams();

  const { blogs, loading, error } = useBlogData(slug);

  if (loading) {
    return <div className="loading pt-32 px-4 text-center text-lg">Loading blog post...</div>;
  }

  if (error) {
    return <div className="error pt-32 px-4 text-center text-lg text-red-600">
      Error loading blog post. Please try again later.
    </div>;
  }

  if (!blogs || blogs.length === 0) {
    return <div className="no-blogs pt-32 px-4 text-center text-lg">
      No blog post found with slug: {slug}
    </div>;
  }

  // filter for the first slug => API returns an array
  const blog = blogs[0];

  return (
    <div className="app pt-32 px-4 flex justify-center items-center flex-col">
      <main className="blog-container w-full max-w-[80rem]">
        <FadeInWhenVisible>
          <article className="blog-post">
            <BlogHeader 
              title={blog.title}
              summary={blog.summary}
              publishingDate={blog.publishingDate}
            />
            <BlogContent blog={blog} />
          </article>
        </FadeInWhenVisible>
      </main>
    </div>
  );
}

export default Blog;