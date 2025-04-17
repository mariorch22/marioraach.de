import { useBlogList } from "@/hooks/useBlogList";
import { Link } from "react-router-dom";

function BlogOverview() {
  const { blogs, loading, error } = useBlogList();

  if (loading) {
    return <div className="loading pt-32 px-4 text-center text-lg">Loading blog list...</div>;
  }

  if (error) {
    return <div className="error pt-32 px-4 text-center text-lg text-red-600">
      Error loading blog list. Please try again later.
    </div>;
  }

  if (!blogs || blogs.length === 0) {
    return <div className="no-blogs pt-32 px-4 text-center text-lg">
      No blog posts found.
    </div>;
  }

  return (
    <div className="blog-overview pt-32 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog Posts</h1>
      <div className="grid gap-6 max-w-4xl mx-auto">
        {blogs
          .sort((a, b) => {
            if (!a.publishingDate || !b.publishingDate) return 0;
            return new Date(b.publishingDate).getTime() - new Date(a.publishingDate).getTime();
          })
          .map((blog) => (
            <Link 
              key={blog.slug} 
              to={`/blog/${blog.slug}`}
              className="blog-card p-6 border rounded-lg hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              {blog.publishingDate && (
                <p className="text-sm text-gray-500 mb-2">
                {new Date(blog.publishingDate).toLocaleDateString()}
                </p>
              )}
              {blog.summary && (
            <p className="blog-summary text-gray-700">{blog.summary}</p>
              )}
            </Link>
          ))}
      </div>
    </div>
  );
}

export default BlogOverview;