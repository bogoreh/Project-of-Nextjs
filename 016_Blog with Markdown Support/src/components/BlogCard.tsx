import Link from 'next/link'

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
}

interface BlogCardProps {
  post: Post
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-2xl font-bold mb-2 hover:text-blue-600">
          {post.title}
        </h2>
      </Link>
      <p className="text-gray-600 mb-4">
        {new Date(post.date).toLocaleDateString()}
      </p>
      <p className="text-gray-700 mb-4">{post.excerpt}</p>
      <Link 
        href={`/blog/${post.slug}`}
        className="text-blue-600 hover:underline"
      >
        Read more →
      </Link>
    </div>
  )
}