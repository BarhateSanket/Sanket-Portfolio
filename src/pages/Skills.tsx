import Meta from '../components/Meta';
import SectionWrapper from '../components/SectionWrapper';
import SkillBadge from '../components/SkillBadge';
import { skillGroups } from '../data/skills';

function Skills() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Meta title="Skills | Sanket Barhate" description="Discover Sanket's technical, product, and soft skill proficiencies in a visual layout." />
      <SectionWrapper>
        <div className="mb-12 grid gap-8 grid-cols-1 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-cyan/80">Competencies</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Skills &amp; tools</h1>
            <p className="mt-4 max-w-3xl text-slate-300">A layered mix of product, full-stack, AI &amp; analytics, and operational skills built from four years of shipping portfolio-grade work.</p>
          </div>
          <div className="glass-card rounded-[2rem] border border-white/10 bg-night/80 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan/80">Total Skills</p>
            <p className="mt-4 text-5xl font-semibold text-white">{skillGroups.reduce(( acc, g) => acc + g.skills.length, 0)}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-cyan/70">{skillGroups.length} skill areas</p>
          </div>
        </div>
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category} className="glass-card rounded-[2rem] border border-white/10 p-6">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold text-white">{group.category}</h2>
                {group.year && (
                  <span className="rounded-full bg-cyan/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan">{group.year}</span>
                )}
              </div>
              <div className="mt-6 space-y-4">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}

export default Skills;
