import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPostsMeta } from '@/lib/blog'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Blog o webdesignu a SEO',
  description: 'Praktické rady o tvorbě webů, SEO a online prezentaci pro živnostníky a malé firmy. Bez zbytečné teorie.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  const posts = getAllPostsMeta()

  return (
    <>
      <main className="section blog-index">
        <div className="container">
          <h1 className="section-title">Blog</h1>
          <p className="section-subtitle">Praktické rady o webdesignu, SEO a online prezentaci pro živnostníky a malé firmy.</p>

          {posts.length > 0 ? (
            <div className="blog-grid">
              {posts.map(post => (
                <article key={post.slug} className="blog-card">
                  <Link href={`/blog/${post.slug}`} className="blog-card-thumb-link" tabIndex={-1} aria-hidden="true">
                    <div className={`blog-card-thumb${!post.image ? ' blog-card-thumb--placeholder' : ''}`}>
                      {post.image && <img src={post.image} alt={post.title} loading="lazy" />}
                    </div>
                  </Link>
                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <time dateTime={post.date}>{post.dateReadable}</time>
                      {post.tags.map(tag => (
                        <span key={tag} className="blog-card-tag">{tag}</span>
                      ))}
                    </div>
                    <h2 className="blog-card-title">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    {post.description && <p className="blog-card-perex">{post.description}</p>}
                    <Link href={`/blog/${post.slug}`} className="blog-card-cta">
                      Číst článek
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="blog-empty">Zatím žádné články. Brzy se tu něco objeví.</p>
          )}
        </div>
      </main>

      <Footer blogFooter />
    </>
  )
}
