import Meta from '../components/Meta';
import SectionWrapper from '../components/SectionWrapper';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

function Blog() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Meta title="Blog | Sanket Barhate" description="Short product and business analysis notes from Sanket's learning journey." />
      <SectionWrapper>
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan/80">Notes</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">Learnings from PM, BA, and product discovery.</h1>
          <p className="max-w-3xl text-slate-300">Insights, frameworks, and short reads from the transition to product-minded delivery.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.id} className="glass-card rounded-3xl border border-white/10 p-6 transition hover:-translate-y-1">
               <Link to={'/blog/' + post.id} className="group block">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm uppercase tracking-[0.2em] text-violet/70">{post.date}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-white group-hover:text-cyan">{post.title}</h2>
                <p className="mt-4 text-slate-300">{post.preview}</p>
              </Link>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}

export default Blog;
