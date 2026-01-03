import BlogCard from '@/components/BlogCard'
import { blogPosts } from '@/lib/data'

export default function BlogPage() {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog Posts</h1>
        <p className="text-text-light max-w-2xl mx-auto">
          All my latest thoughts, tutorials, and experiences in one place.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <button className="px-4 py-2 bg-primary-color text-white rounded-full">
          All Posts
        </button>
        {['Web Development', 'Programming', 'Personal Growth'].map((cat) => (
          <button
            key={cat}
            className="px-4 py-2 bg-bg-secondary hover:bg-border-color rounded-full transition-colors"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
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
    </>
  )
}