import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'src/posts')

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export async function getPosts(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  const posts: Post[] = []

  for (const fileName of fileNames) {
    if (!fileName.endsWith('.md')) continue

    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    posts.push({
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt || content.slice(0, 200) + '...',
      content: '',
    })
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const processedContent = await remark()
      .use(html)
      .process(content)
    
    const contentHtml = processedContent.toString()

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt || content.slice(0, 200) + '...',
      content: contentHtml,
    }
  } catch (error) {
    return null
  }
}