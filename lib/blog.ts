import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDir = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  dateReadable: string
  image: string
  tags: string[]
  contentHtml: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  dateReadable: string
  image: string
  tags: string[]
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'numeric', year: 'numeric' })
}

function isoDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toISOString().split('T')[0]
}

export function getAllPostsMeta(): BlogPostMeta[] {
  const filenames = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'))
  const posts = filenames.map(filename => {
    const slug = filename.replace(/\.md$/, '')
    const fullPath = path.join(contentDir, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: isoDate(data.date),
      dateReadable: formatDate(data.date),
      image: data.image || '',
      tags: (data.tags || []).filter((t: string) => t !== 'blog'),
    }
  })
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const fullPath = path.join(contentDir, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const processed = await remark().use(html).process(content)
  const contentHtml = processed.toString()
  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: isoDate(data.date),
    dateReadable: formatDate(data.date),
    image: data.image || '',
    tags: (data.tags || []).filter((t: string) => t !== 'blog'),
    contentHtml,
  }
}

export function getAllSlugs(): string[] {
  return fs.readdirSync(contentDir)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''))
}
