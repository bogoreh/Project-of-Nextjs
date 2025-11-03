import { getPosts } from '@/lib/markdown'
import BlogCard from '@/components/BlogCard'

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}