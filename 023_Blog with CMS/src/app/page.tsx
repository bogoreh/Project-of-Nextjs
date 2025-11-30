import Link from 'next/link';
import { getAllPosts } from '@/lib/utils';

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A simple blog CMS built with Next.js and TypeScript. 
          Create, edit, and manage your blog posts with ease.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>By {post.author}</span>
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            href="/blog"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </section>
    </div>
  );
}