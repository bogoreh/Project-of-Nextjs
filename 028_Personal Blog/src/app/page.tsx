import BlogCard from '@/components/BlogCard'
import { blogPosts } from '@/lib/data'
import Link from 'next/link'

export default function Home() {
  const featuredPosts = blogPosts.slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-12 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to My{' '}
          <span className="bg-gradient-to-r from-primary-color to-secondary-color bg-clip-text text-transparent">
            Personal Blog
          </span>
        </h1>
        <p className="text-xl text-text-light max-w-2xl mx-auto mb-8">
          Sharing thoughts, experiences, and tutorials about web development, programming, and personal growth.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/blog" className="btn">
            Read Blog
          </Link>
          <Link href="/about" className="btn btn-secondary">
            About Me
          </Link>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Featured Posts</h2>
          <Link href="/blog" className="text-primary-color hover:text-secondary-color transition-colors">
            View all →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              category={post.category}
              slug={post.slug}
            />
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-gradient-to-r from-bg-secondary to-transparent rounded-2xl p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">About the Author</h2>
            <p className="text-text-light mb-4">
              Hello! I'm a passionate developer who loves sharing knowledge and experiences through writing. 
              This blog is my space to document my journey and help others in the process.
            </p>
            <p className="text-text-light mb-6">
              From coding tutorials to personal reflections, you'll find a variety of content here that I hope 
              you'll find valuable and engaging.
            </p>
            <Link href="/about" className="btn">
              Learn More About Me
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-r from-primary-color/20 to-secondary-color/20 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-primary-color/30 to-secondary-color/30"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}