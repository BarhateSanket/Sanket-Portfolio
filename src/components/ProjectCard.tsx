import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
}

function ProjectCard({ project }: ProjectCardProps) {
  const hasLiveUrl = project.liveUrl && project.liveUrl !== '#';
  const hasGithubUrl = project.githubUrl && project.githubUrl !== '#';

  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="glass-card overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-glow transition duration-300 will-change-transform"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan/80">{project.domain}</p>
          <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
          {project.type && (
            <span className="mt-3 inline-flex rounded-full bg-cyan/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan">
              {project.type}
            </span>
          )}
        </div>
        <div
          className="h-12 w-12 rounded-2xl"
          style={{ background: project.color || '#0ea5e9' }}
          aria-hidden="true"
        />
      </div>
      <p className="text-slate-300">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {hasGithubUrl ? (
          <a
            className="interactive inline-flex w-full items-center justify-center rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-sm text-cyan transition hover:border-cyan hover:bg-cyan/15 sm:w-auto"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        ) : (
          <span className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-center text-sm text-slate-400 sm:w-auto">
            GitHub unavailable
          </span>
        )}
        {hasLiveUrl ? (
          <a
            className="interactive inline-flex w-full items-center justify-center rounded-full border border-violet/30 bg-violet/10 px-4 py-2 text-sm text-violet transition hover:border-violet hover:bg-violet/15 sm:w-auto"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        ) : (
          <span className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-center text-sm text-slate-400 sm:w-auto">
            Live demo unavailable
          </span>
        )}
      </div>
      <Link
        to={`/projects/${project.id}`}
        className="mt-6 inline-block text-sm font-medium text-cyan hover:text-white"
      >
        View details →
      </Link>
    </motion.article>
  );
}

export default ProjectCard;
