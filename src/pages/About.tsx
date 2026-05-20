import { useState } from 'react';
import Meta from '../components/Meta';
import SectionWrapper from '../components/SectionWrapper';
import { stats } from '../data/aboutMetrics';

const timelineHighlights = [
  'B.E. Mechanical Engineering | Sinhgad COE | 2022–2026',
  'SYRA AI voice assistant product | Jul 2025 – Dec 2025',
  'Published IoT predictive maintenance research | IRJMETS 2026',
];

function About() {
  const [photoLoaded, setPhotoLoaded] = useState(true);

  return (
    <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Meta
        title="About | Sanket Barhate"
        description="Discover Sanket's journey from mechanical engineering to portfolio-grade digital products and full-stack delivery." />
      <SectionWrapper>
<div className="grid gap-12 grid-cols-1 md:grid-cols-[1.1fr_0.9fr]">
           <div className="space-y-8">
             <div className="glass-card rounded-[2rem] border border-cyan/10 bg-night/80 p-6 sm:p-10 shadow-glow">
              <p className="text-sm uppercase tracking-[0.32em] text-cyan/80">About</p>
              <h1 className="mt-4 text-4xl font-semibold text-white">From mechanical engineering to portfolio-grade digital products.</h1>
              <p className="mt-6 max-w-3xl leading-8 text-slate-300">
                I combine systems thinking from engineering with product strategy and full-stack delivery. My portfolio spans AI, SaaS, proptech, and legal-tech projects built for real users and measurable business impact.
              </p>
              <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-cyan/20 bg-white/[0.04] p-5 shadow-glow backdrop-blur-sm">
                    <p className="text-3xl font-semibold text-white tabular-nums drop-shadow-[0_0_10px_rgba(6,182,212,0.45)]">{stat.value}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.3em] text-cyan/70">{stat.label}</p>
                  </div>
                ))}
              </div>
<div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-3">
                 <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm">
                   <p className="text-sm uppercase tracking-[0.32em] text-cyan/80">AI &amp; Automation</p>
                   <p className="mt-3 text-slate-200 leading-relaxed">Research-driven AI and analytics for product decisions.</p>
                 </div>
                 <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm">
                   <p className="text-sm uppercase tracking-[0.32em] text-cyan/80">Full-stack delivery</p>
                   <p className="mt-3 text-slate-200 leading-relaxed">Customer-facing apps backed by clean backend systems.</p>
                 </div>
                 <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm">
                   <p className="text-sm uppercase tracking-[0.32em] text-cyan/80">Product leadership</p>
                   <p className="mt-3 text-slate-200 leading-relaxed">Roadmaps, user research, and measurable go-to-market focus.</p>
                 </div>
               </div>
             </div>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
              <div className="glass-card rounded-3xl border border-cyan/10 p-6">
                <h3 className="text-xl font-semibold text-white">Portfolio work with impact</h3>
                <p className="mt-3 text-slate-300">My projects include customer-facing apps, automation tools, and research-led MVPs that solve user problems and move businesses forward.</p>
              </div>
              <div className="glass-card rounded-3xl border border-cyan/10 p-6">
                <h3 className="text-xl font-semibold text-white">Product engineering craft</h3>
                <p className="mt-3 text-slate-300">I combine frontend/backend delivery with PM frameworks so software ships fast, stays polished, and scales with the team.</p>
              </div>
            </div>

            <div className="glass-card rounded-[2rem] border border-cyan/10 p-8">
              <h3 className="text-2xl font-semibold text-white">What drives me</h3>
              <p className="mt-4 text-slate-300">
                “I don't mind people thinking I'm crazy. I don't mind people thinking I'm temporary. But I do mind if I don't reach my potential.” — MS Dhoni
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-[2rem] border border-cyan/10 bg-night/80 p-8 shadow-glow">
              <p className="text-sm uppercase tracking-[0.32em] text-cyan/80">Profile</p>
              <div className="mt-6 grid gap-6">
                <div className="mx-auto h-64 w-48 overflow-hidden rounded-[2rem] border border-cyan/20 bg-slate-950/70 text-center text-slate-400 sm:mx-0">
                  <img
                    src="/about.jpg"
                    alt="Sanket Barhate"
                    className={`h-full w-full object-cover object-center transition duration-500 ${photoLoaded ? 'block' : 'hidden'}`}
                    onLoad={() => setPhotoLoaded(true)}
                    onError={() => setPhotoLoaded(false)}
                  />
                  {!photoLoaded && (
                    <div className="flex h-full flex-col items-center justify-center gap-2 px-4">
                      <span className="text-xs uppercase tracking-[0.32em] text-cyan/80">Your photo</span>
                      <span className="text-3xl font-semibold">Add photo</span>
                      <span className="text-[11px] leading-tight">Place /about.jpg in public/</span>
                    </div>
                  )}
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan/10 text-3xl font-bold text-cyan">
                      SB
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">Sanket Barhate</p>
                      <p className="mt-1 text-sm text-slate-400">Product Strategy • Full Stack • Business Analysis</p>
                    </div>
                  </div>
                  <p className="mt-6 text-slate-300">I build portfolio-ready products through research-led discovery, stakeholder alignment, and strong technical delivery.</p>
                  <div className="mt-6 grid gap-3">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.32em] text-cyan/80">Deliveries</p>
                      <p className="mt-2 text-white">AI systems, SaaS platforms, proptech, and legal-tech workflows.</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.32em] text-cyan/80">Approach</p>
                      <p className="mt-2 text-white">Product discovery, user research, MVP prioritization, and full-stack execution.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white">Timeline snapshot</h3>
              <ul className="mt-5 space-y-3 text-slate-300">
                {timelineHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

export default About;
