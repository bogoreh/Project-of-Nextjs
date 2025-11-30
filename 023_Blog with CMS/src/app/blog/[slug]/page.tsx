import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/utils';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <div className="flex items-center space-x-4 text-gray-600">
          <span>By {post.author}</span>
          <span>•</span>
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString()}
          </time>
        </div>
      </header>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 mb-6">{post.excerpt}</p>
        <div className="text-gray-800 leading-relaxed">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}