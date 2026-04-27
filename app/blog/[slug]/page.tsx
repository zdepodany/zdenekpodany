import type { Metadata } from 'next'
import Link from 'next/link'
import { getPostBySlug, getAllSlugs } from '@/lib/blog'
import Footer from '@/components/layout/Footer'

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  return (
    <>
      <main className="blog-post">
        <div className="blog-post-container">
          <Link href="/blog" className="blog-post-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Zpět na blog
          </Link>

          <article>
            <header className="blog-post-header">
              <div className="blog-post-meta">
                <time dateTime={post.date}>{post.dateReadable}</time>
                {post.tags.map(tag => (
                  <span key={tag} className="blog-post-tag">{tag}</span>
                ))}
              </div>
              <h1 className="blog-post-title">{post.title}</h1>
              {post.description && <p className="blog-post-lead">{post.description}</p>}
            </header>

            {post.image && (
              <div className="blog-post-hero">
                <img src={post.image} alt={post.title} loading="eager" />
              </div>
            )}

            <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

            <footer className="blog-post-footer">
              <Link href="/blog" className="blog-post-back">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Zpět na blog
              </Link>
            </footer>
          </article>
        </div>
      </main>

      <Footer blogFooter />
    </>
  )
}
