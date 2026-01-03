export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    slug: "getting-started-with-nextjs-14",
    excerpt: "Learn how to build modern web applications with Next.js 14 and its new features.",
    content: "Full blog post content here...",
    date: "2024-01-15",
    readTime: "5 min",
    category: "Web Development",
    tags: ["Next.js", "React", "JavaScript"]
  },
  {
    id: 2,
    title: "The Art of Clean Code",
    slug: "the-art-of-clean-code",
    excerpt: "Principles and practices for writing maintainable and readable code.",
    content: "Full blog post content here...",
    date: "2024-01-10",
    readTime: "8 min",
    category: "Programming",
    tags: ["Clean Code", "Best Practices"]
  },
  {
    id: 3,
    title: "Introduction to TypeScript",
    slug: "introduction-to-typescript",
    excerpt: "Why TypeScript is becoming essential for modern web development.",
    content: "Full blog post content here...",
    date: "2024-01-05",
    readTime: "6 min",
    category: "Web Development",
    tags: ["TypeScript", "JavaScript"]
  },
  {
    id: 4,
    title: "Building a Personal Brand Online",
    slug: "building-personal-brand-online",
    excerpt: "Tips and strategies for establishing your personal brand in the digital space.",
    content: "Full blog post content here...",
    date: "2024-01-01",
    readTime: "7 min",
    category: "Personal Growth",
    tags: ["Branding", "Career"]
  }
]