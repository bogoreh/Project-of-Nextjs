interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  slug: string
}

export default function BlogCard({
  title,
  excerpt,
  date,
  readTime,
  category,
  slug
}: BlogCardProps) {
  return (
    <article className="group bg-white dark:bg-bg-secondary rounded-lg border border-border-color overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary-color/30">
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 bg-primary-color/10 text-primary-color rounded-full text-sm font-medium">
            {category}
          </span>
          <span className="text-text-light text-sm">{date}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary-color transition-colors">
          <a href={`/blog/${slug}`}>{title}</a>
        </h3>
        
        <p className="text-text-light mb-4 line-clamp-2">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <a 
            href={`/blog/${slug}`}
            className="text-primary-color font-medium hover:text-secondary-color transition-colors inline-flex items-center"
          >
            Read more
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <span className="text-text-light text-sm">{readTime} read</span>
        </div>
      </div>
    </article>
  )
}