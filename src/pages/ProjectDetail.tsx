import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import Meta from '../components/Meta';
import { projects } from '../data/projects';
import SectionWrapper from '../components/SectionWrapper';

function ProjectDetail() {
  const { id } = useParams();
  const project = useMemo(() => projects.find((item) => item.id === id), [id]);
  const hasLiveUrl = project?.liveUrl && project.liveUrl !== '#';
  const hasGithubUrl = project?.githubUrl && project.githubUrl !== '#';

  if (!project) {
    return (
      <main className="mx-auto min-h-screen px-4 py-24 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="glass-card rounded-[2rem] border border-cyan/10 p-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan/70">Project not found</p>
            <h1 className="mt-4 text-3xl font-semibold text-white">No case study here yet</h1>
            <p className="mt-3 text-slate-300">Choose another project from the portfolio overview.</p>
            <Link
              to="/projects"
              className="mt-8 inline-flex rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-night transition hover:brightness-110"
            >
              Back to Projects
            </Link>
          </div>
        </SectionWrapper>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
      <Meta
        title={`${project.title} | Sanket Barhate`}
        description={`${project.title} case study: ${project.description}`} />
      <SectionWrapper>
        <div className="glass-card rounded-[2rem] border border-cyan/10 bg-night/80 p-10 shadow-glow">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan/70">{project.type}</p>
              <h1 className="mt-4 text-4xl font-semibold text-white">{project.title}</h1>
              <p className="mt-3 text-sm uppercase tracking-[0.28em] text-slate-400">
                {project.role ? `${project.role} · ` : ''}{project.domain} · {project.period}
              </p>
              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan/70">Overview</p>
                <p className="mt-4 leading-8 text-slate-300">{project.description}</p>
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-cyan to-electric px-6 py-5 text-white shadow-glow">
              <p className="text-xs uppercase tracking-[0.3em] text-white/80">Primary focus</p>
              <p className="mt-3 text-2xl font-semibold">{project.type}</p>
              <p className="mt-4 text-sm text-white/90">{project.domain} delivery with measurable product outcomes.</p>
            </div>
          </div>

          <div className="mt-12 space-y-8">
            <div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan/70">Highlights</p>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">{project.highlights.length} items</span>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-slate-300">
                    • {highlight}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan/70">Product tags</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-night/70 px-4 py-2 text-sm text-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan/70">Technology</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-night/70 px-4 py-2 text-sm text-slate-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {hasGithubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-3xl border border-cyan/10 bg-cyan/10 px-6 py-4 text-sm font-semibold text-cyan transition hover:bg-cyan/15 sm:w-auto"
                >
                  View on GitHub
                </a>
              ) : (
                <div className="w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-center text-sm font-semibold text-slate-300 sm:w-auto">
                  GitHub unavailable
                </div>
              )}
              {hasLiveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-3xl border border-electric/10 bg-electric/10 px-6 py-4 text-sm font-semibold text-electric transition hover:bg-electric/15 sm:w-auto"
                >
                  Visit Live Site
                </a>
              ) : (
                <div className="w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-center text-sm font-semibold text-slate-300 sm:w-auto">
                  Live link not available
                </div>
              )}
            </div>

            {project.caseStudyPdf && (
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan/70">Case study</p>
                <p className="mt-3 text-slate-300">Download or review the complete case study for product decisions, discovery, and outcomes.</p>
                <a
                  href={project.caseStudyPdf}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-night transition hover:brightness-110"
                >
                  View {project.caseStudyName || project.title} Case Study
                </a>
              </div>
            )}
          </div>

          <div className="mt-10">
            <Link
              to="/projects"
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

export default ProjectDetail;
