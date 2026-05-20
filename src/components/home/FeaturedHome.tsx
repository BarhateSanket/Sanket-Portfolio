import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

function FeaturedHome() {
  const featured = projects.slice(0, 4);

  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-cyan/[0.04] blur-[100px]" />

      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan/70">Portfolio highlights</p>
        <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
          A taste of what I ship
        </h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Exploring AI, legal-tech, SaaS, and IoT — with product strategy, clean architecture, and scrappy build discipline.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {featured.map((project) => (
          <article
            key={project.id}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/[0.07] bg-white/[0.03] p-6 transition-all duration-300 hover:border-white/[0.16] hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-lg hover:shadow-white/[0.04]"
          >
            {/* Top color glow */}
            <div
              className="absolute inset-x-0 top-0 h-1 opacity-70 group-hover:opacity-100 transition-opacity"
              style={{ background: `linear-gradient(to right, ${project.color}60, ${project.color}20)` }}
            />

            <div>
              {/* Floating badges row */}
              <div className="-ml-1 flex flex-wrap gap-1.5 pb-4">
                <span className="rounded-lg px-2.5 py-1 text-[0.65rem] uppercase tracking-widest"
                  style={{ color: project.color, background: `${project.color}18` }}>
                  {project.domain}
                </span>
                <span className="rounded-lg px-2.5 py-1 text-[0.65rem] uppercase tracking-widest text-slate-400 bg-white/5">
                  {project.type}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white leading-snug">{project.title}</h3>
              <p className="mt-2.5 text-[0.8rem] leading-relaxed text-slate-400 line-clamp-3">
                {project.description}
              </p>

              {/* Tech chips */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.07] bg-white/[0.04] px-2.5 py-0.5 text-[0.7rem] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
                {project.stack.length > 3 && (
                  <span className="rounded-full border border-white/[0.07] bg-white/[0.04] px-2.5 py-0.5 text-[0.7rem] text-slate-500">
                    +{project.stack.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Bottom row */}
            <div className="mt-5 flex items-center justify-between">
              {project.githubUrl !== '#' ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.8rem] text-cyan/80 transition hover:text-white hover:underline"
                >
                  View project &rarr;
                </a>
              ) : (
                <span className="text-[0.8rem] text-slate-500">Research / PDF</span>
              )}

              <div
                className="h-8 w-8 rounded-xl opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                style={{ background: `linear-gradient(135deg, ${project.color}80, ${project.color}30)` }}
                aria-hidden="true"
              />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/projects"
          className="interactive inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan hover:bg-cyan/10 hover:text-cyan"
        >
          View all 4+ projects
          <span className="text-base transition-transform group-hover:translate-x-1">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}

export default FeaturedHome;
