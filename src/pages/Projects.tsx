import Meta from '../components/Meta';
import ProjectCard from '../components/ProjectCard';
import SectionWrapper from '../components/SectionWrapper';
import { projects } from '../data/projects';

function Projects() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Meta
        title="Projects | Sanket Barhate"
        description="Explore Sanket's portfolio of product and engineering projects, including Nyaya AI, SYRA AI, BookIt, Heavenly, FocusFlow, and research." />
      <SectionWrapper>
        <div className="mb-12 grid gap-8 grid-cols-1 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-cyan/80">Project Portfolio</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Strategic products, AI systems, and research-backed delivery.</h1>
            <p className="mt-4 max-w-3xl text-slate-300">
              A curated selection of work that blends product strategy, full-stack execution, AI innovation, and publication-ready research.
            </p>
          </div>
          <div className="glass-card rounded-[2rem] border border-white/10 bg-night/80 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan/80">Spotlight</p>
            <p className="mt-4 text-lg font-semibold text-white">High-impact work for recruiters and product teams.</p>
            <p className="mt-4 text-slate-300">Each case study includes strategy, MVP decisions, outcome metrics, and the full technical stack behind the idea.</p>
          </div>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}

export default Projects;
