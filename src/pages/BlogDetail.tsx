import { Link, useParams } from 'react-router-dom';
import Meta from '../components/Meta';
import SectionWrapper from '../components/SectionWrapper';
import { blogPosts } from '../data/blogPosts';

function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <Meta title="Post not found | Sanket Barhate" description="This blog post could not be found." />
        <SectionWrapper>
          <div className="glass-card rounded-[2rem] border border-cyan/10 p-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan/70">Post not found</p>
            <h1 className="mt-4 text-3xl font-semibold text-white">This article does not exist yet</h1>
            <p className="mt-3 text-slate-300">Try another post from the blog listing.</p>
            <Link
              to="/blog"
              className="mt-8 inline-flex rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-night transition hover:brightness-110"
            >
              Back to Blog
            </Link>
          </div>
        </SectionWrapper>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <Meta
        title={`${post.title} | Sanket Barhate`}
        description={post.preview}
      />
      <SectionWrapper>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-cyan hover:text-white transition"
        >
          ← All posts
        </Link>
        <article className="mt-8">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <p className="text-sm uppercase tracking-[0.2em] text-violet/70">{post.date}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h1 className="mt-6 text-4xl font-semibold text-white leading-tight">{post.title}</h1>
          <p className="mt-4 text-lg text-slate-300">{post.preview}</p>
          <div className="mt-10 border-t border-white/10" />
          {post.link ? (
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan/80">Case study PDF</p>
              <p className="mt-3 text-slate-300">Download or open the full case study linked to this post.</p>
              <a
                href={post.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-night transition hover:brightness-110"
              >
                Open PDF
              </a>
            </div>
          ) : post.content ? (
            <div
              className="mt-8 text-slate-300 leading-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : null}
        </article>
        <div className="mt-16">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-cyan hover:text-white transition"
          >
            ← All posts
          </Link>
        </div>
      </SectionWrapper>
    </main>
  );
}

export default BlogDetail;
