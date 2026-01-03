import { blogPosts } from '@/lib/data'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface BlogDetailPageProps {
  params: {
    slug: string
  }
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto">
      <Link 
        href="/blog" 
        className="inline-flex items-center text-primary-color hover:text-secondary-color mb-6 transition-colors"
      >
        ← Back to Blog
      </Link>

      <header className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 bg-primary-color/10 text-primary-color rounded-full text-sm font-medium">
            {post.category}
          </span>
          <span className="text-text-light">{post.date}</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center justify-between text-text-light">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-color to-secondary-color"></div>
            <span>John Doe</span>
          </div>
          <span>{post.readTime} read</span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        {/* Content would go here */}
        <p className="lead text-xl text-text-light mb-6">
          {post.excerpt}
        </p>
        
        <p>
          This is where the full blog post content would go. In a real application, 
          you would have the complete article here with proper formatting, images, 
          and other rich content.
        </p>
        
        <p>
          You can use Markdown or a rich text editor to create your blog posts and 
          then render them here using a suitable parser.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-border-color">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-bg-secondary rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}