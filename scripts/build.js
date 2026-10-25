#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const ROOT = path.join(__dirname, '..');
const SRC_PAGES = path.join(ROOT, 'src/pages');
const SRC_PARTIALS = path.join(ROOT, 'src/partials');
const SRC_CSS = path.join(ROOT, 'src/css');
const SRC_JS = path.join(ROOT, 'src/js');
const PUBLIC_DIR = path.join(ROOT, 'public');
const BLOG_CONTENT_DIR = path.join(ROOT, 'content/blog');
const DIST = path.join(ROOT, 'dist');

function rmrf(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function readPartial(name) {
  return fs.readFileSync(path.join(SRC_PARTIALS, `${name}.html`), 'utf8');
}

function applyIncludes(content) {
  return content.replace(/<!--include:([\w-]+)-->/g, (_, name) => readPartial(name));
}

function writeFile(destPath, content) {
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, content);
}

function isoDate(dateStr) {
  return new Date(dateStr).toISOString().split('T')[0];
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('cs-CZ', { day: 'numeric', month: 'numeric', year: 'numeric' });
}

// ─── Static pages (everything under src/pages except src/pages/blog) ────────
function buildStaticPages() {
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (full === path.join(SRC_PAGES, 'blog')) continue;
        walk(full);
      } else if (entry.name.endsWith('.html')) {
        const rel = path.relative(SRC_PAGES, full);
        const content = applyIncludes(fs.readFileSync(full, 'utf8'));
        writeFile(path.join(DIST, rel), content);
      }
    }
  };
  walk(SRC_PAGES);
}

// ─── Blog ─────────────────────────────────────────────────────────────────
function getAllPosts() {
  const filenames = fs.readdirSync(BLOG_CONTENT_DIR).filter((f) => f.endsWith('.md'));
  return filenames
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(BLOG_CONTENT_DIR, filename), 'utf8');
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        date: isoDate(data.date),
        dateReadable: formatDate(data.date),
        image: data.image || '',
        tags: (data.tags || []).filter((t) => t !== 'blog'),
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

function renderBlogCard(post) {
  const thumb = post.image
    ? `<div class="blog-card-thumb"><img src="${post.image}" alt="${post.title}" loading="lazy" /></div>`
    : `<div class="blog-card-thumb blog-card-thumb--placeholder"></div>`;
  const tags = post.tags.map((t) => `<span class="blog-card-tag">${t}</span>`).join('');
  return `
    <article class="blog-card">
      <a href="/blog/${post.slug}" class="blog-card-thumb-link" tabindex="-1" aria-hidden="true">${thumb}</a>
      <div class="blog-card-body">
        <div class="blog-card-meta">
          <time datetime="${post.date}">${post.dateReadable}</time>
          ${tags}
        </div>
        <h2 class="blog-card-title"><a href="/blog/${post.slug}">${post.title}</a></h2>
        ${post.description ? `<p class="blog-card-perex">${post.description}</p>` : ''}
        <a href="/blog/${post.slug}" class="blog-card-cta">
          Číst článek
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </article>`;
}

async function buildBlog() {
  const { remark } = await import('remark');
  const { default: html } = await import('remark-html');
  const posts = getAllPosts();
  const indexTemplate = fs.readFileSync(path.join(SRC_PAGES, 'blog/index.html'), 'utf8');
  const postTemplate = fs.readFileSync(path.join(SRC_PAGES, 'blog/post.html'), 'utf8');

  const cards = posts.length
    ? `<div class="blog-grid">${posts.map(renderBlogCard).join('\n')}</div>`
    : `<p class="blog-empty">Zatím žádné články. Brzy se tu něco objeví.</p>`;

  const indexHtml = applyIncludes(indexTemplate.replace('<!--BLOG_POSTS-->', cards));
  writeFile(path.join(DIST, 'blog/index.html'), indexHtml);

  for (const post of posts) {
    const processed = await remark().use(html).process(post.content);
    const contentHtml = processed.toString();
    const tags = post.tags.map((t) => `<span class="blog-post-tag">${t}</span>`).join('');
    const hero = post.image
      ? `<div class="blog-post-hero"><img src="${post.image}" alt="${post.title}" loading="eager" /></div>`
      : '';

    let pageHtml = postTemplate
      .replace(/{{TITLE}}/g, post.title)
      .replace(/{{DESCRIPTION}}/g, post.description)
      .replace(/{{SLUG}}/g, post.slug)
      .replace(/{{DATE}}/g, post.date)
      .replace(/{{DATE_READABLE}}/g, post.dateReadable)
      .replace('<!--BLOG_TAGS-->', tags)
      .replace('<!--BLOG_HERO-->', hero)
      .replace('<!--BLOG_LEAD-->', post.description ? `<p class="blog-post-lead">${post.description}</p>` : '')
      .replace('<!--BLOG_CONTENT-->', contentHtml);

    pageHtml = applyIncludes(pageHtml);
    writeFile(path.join(DIST, `blog/${post.slug}/index.html`), pageHtml);
  }
}

async function build() {
  rmrf(DIST);
  buildStaticPages();
  await buildBlog();
  copyDir(SRC_CSS, path.join(DIST, 'css'));
  copyDir(SRC_JS, path.join(DIST, 'js'));
  copyDir(PUBLIC_DIR, DIST);
  console.log('Build complete -> dist/');
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
