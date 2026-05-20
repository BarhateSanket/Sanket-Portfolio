import Meta from '../components/Meta';
import SectionWrapper from '../components/SectionWrapper';

function Education() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Meta
        title="Education | Sanket Barhate"
        description="Explore Sanket's academic background, engineering education, and research credentials." />
      <SectionWrapper>
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan/80">Education</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">Academic background & credentials</h1>
          <p className="max-w-3xl text-slate-300">A focused education path in engineering, product strategy, and research that supports my portfolio of digital products.</p>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="glass-card rounded-[2rem] border border-white/10 p-6">
            <p className="text-sm uppercase tracking-[0.26em] text-slate-400">College</p>
            <p className="mt-4 text-3xl font-semibold text-white">B.E. Mechanical Engineering</p>
            <p className="mt-3 text-sm text-slate-300">Sinhgad College of Engineering, Pune</p>
            <p className="mt-4 text-slate-300">2022 – 2026 · CGPA 7.50</p>
            <p className="mt-4 text-slate-300">Built a strong systems foundation while exploring product thinking, IoT research, and full-stack project delivery.</p>
          </div>
          <div className="glass-card rounded-[2rem] border border-white/10 p-6">
            <p className="text-sm uppercase tracking-[0.26em] text-slate-400">Higher Secondary</p>
            <p className="mt-4 text-3xl font-semibold text-white">Babasaheb Utangale Junior College of Science, Akola</p>
            <p className="mt-3 text-sm text-slate-300">84.83% in Science Stream</p>
            <p className="mt-4 text-slate-300">Built a strong foundation in Physics, Chemistry, Mathematics, and Biology while preparing for engineering and technical problem solving.</p>
          </div>
          <div className="glass-card rounded-[2rem] border border-white/10 p-6">
            <p className="text-sm uppercase tracking-[0.26em] text-slate-400">Secondary School</p>
            <p className="mt-4 text-3xl font-semibold text-white">Nutan Vidyalaya, Malkapur</p>
            <p className="mt-3 text-sm text-slate-300">94% SSC</p>
            <p className="mt-4 text-slate-300">Developed academic discipline and analytical skills through a high-scoring school curriculum across STEM subjects.</p>
          </div>
          <div className="glass-card rounded-[2rem] border border-white/10 p-6">
            <p className="text-sm uppercase tracking-[0.26em] text-slate-400">Research</p>
            <p className="mt-4 text-3xl font-semibold text-white">Predictive Maintenance</p>
            <p className="mt-3 text-sm text-slate-300">IRJMETS Publication</p>
            <p className="mt-4 text-slate-300">Design and implementation of a real-time pump failure analysis system using ESP32 and IoT sensors.</p>
            <p className="mt-4 text-slate-300">Blended hardware, data analytics, and product research to deliver measurable reliability insights.</p>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="glass-card rounded-[2rem] border border-white/10 p-6">
            <p className="text-sm uppercase tracking-[0.26em] text-slate-400">Key coursework</p>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>Product Lifecycle Management and Roadmapping</li>
              <li>Business Analysis, User Stories, and Requirement Gathering</li>
              <li>Full Stack Development with Web Architecture and APIs</li>
            </ul>
          </div>
          <div className="glass-card rounded-[2rem] border border-white/10 p-6">
            <p className="text-sm uppercase tracking-[0.26em] text-slate-400">Academic strengths</p>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>Analytical problem solving</li>
              <li>Research-led product discovery</li>
              <li>Engineering design & execution</li>
            </ul>
          </div>
          <div className="glass-card rounded-[2rem] border border-white/10 p-6">
            <p className="text-sm uppercase tracking-[0.26em] text-slate-400">Academic goals</p>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>Build portfolio-grade products from college research</li>
              <li>Bridge engineering with AI-driven product delivery</li>
              <li>Leverage education for real-world outcomes</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

export default Education;
