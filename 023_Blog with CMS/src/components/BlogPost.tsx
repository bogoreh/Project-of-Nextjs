import Link from 'next/link';
import { BlogPost as BlogPostType } from '@/lib/types';

interface BlogPostProps {
  post: BlogPostType;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-bold text-gray-800 mb-3">
        <Link 
          href={`/blog/${post.slug}`}
          className="hover:text-blue-600 transition-colors"
        >
          {post.title}
        </Link>
      </h2>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>By {post.author}</span>
        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
      </div>
      <Link 
        href={`/blog/${post.slug}`}
        className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
      >
        Read Full Article →
      </Link>
    </article>
  );
}