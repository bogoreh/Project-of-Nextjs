import { getPosts, getPostBySlug } from '@/lib/markdown'
import { notFound } from 'next/navigation'

interface BlogPostProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">
        Published on {new Date(post.date).toLocaleDateString()}
      </p>
      <div 
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}