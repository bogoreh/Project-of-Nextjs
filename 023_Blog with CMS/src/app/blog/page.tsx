import { getAllPosts } from '@/lib/utils';
import BlogPost from '@/components/BlogPost';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Blog Posts</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
        {posts.length === 0 && (
          <p className="text-center text-gray-500 text-lg py-8">
            No blog posts found.
          </p>
        )}
      </div>
    </div>
  );
}