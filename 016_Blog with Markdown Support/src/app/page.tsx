import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Blog</h1>
      <p className="text-xl mb-8">A simple blog built with Next.js and Markdown</p>
      <Link 
        href="/blog" 
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        View All Posts
      </Link>
    </div>
  )
}