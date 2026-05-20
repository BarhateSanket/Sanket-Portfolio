import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeroScene from '../components/HeroScene';
import Meta from '../components/Meta';
import FeaturedHome from '../components/home/FeaturedHome';
import HeroHighlights from '../components/home/HeroHighlights';
import Now from '../components/home/Now';

const roles = ['Product Strategist', 'Full Stack Builder', 'Business Analyst', 'Mechanical Engineer'];

const heroStats = [
  { label: 'Case Studies', value: '4' },
  { label: 'Projects', value: '6+' },
  { label: 'Publications', value: '1' },
];

function Home() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length];
    const timeout = window.setTimeout(() => {
      setText((prev) => {
        const next = deleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1);
        return next;
      });

      if (!deleting && text === current) {
        window.setTimeout(() => setDeleting(true), 900);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, deleting ? 80 : 120);

    return () => window.clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <Meta
        title="Home | Sanket Barhate"
        description="Sanket Barhate blends engineering, product strategy, and full-stack delivery to build polished digital experiences." />
      <HeroScene />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-night/60 to-night/95" />
      <section className="relative mx-auto grid min-h-screen max-w-7xl gap-4 sm:gap-6 md:gap-8 px-4 py-12 sm:py-24 sm:px-6 md:grid-cols-[1.5fr_0.9fr] lg:px-8">
        <div className="glass-card relative overflow-hidden rounded-[2.5rem] border border-cyan/20 bg-gradient-to-br from-night/90 via-slate-950/80 to-night/90 p-8 sm:p-10 shadow-2xl shadow-cyan/10 backdrop-blur-2xl">
          <div className="absolute -right-20 top-10 h-64 w-64 rounded-full border border-cyan/20 bg-cyan/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 bottom-10 h-60 w-60 rounded-full border border-purple-500/20 bg-purple-500/10 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none bg-grid-white/[0.02] mask-image" />
          <p className="text-xs uppercase tracking-[0.35em] text-cyan/60">Engineering &rarr; Product &rarr; Full Stack</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-cyan via-white to-cyan bg-clip-text text-transparent drop-shadow-glow">
              Sanket Barhate
            </span>
          </h1>
          <p className="mt-3 text-xs sm:text-sm uppercase tracking-[0.35em] text-cyan/90">{text}<span className="animate-pulse">|</span></p>
          <p className="mt-5 max-w-3xl text-sm sm:text-base leading-7 text-slate-300">
            I launch product-led digital experiences with engineering precision, modern UX, and measurable business outcomes.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/projects"
              className="interactive inline-flex items-center justify-center rounded-full bg-cyan px-6 py-3 text-xs sm:text-sm font-semibold text-night shadow-lg shadow-cyan/30 transition-all duration-300 hover:scale-105 hover:shadow-cyan/50"
            >
              View Projects
            </Link>
            <a
              href="/resume.pdf"
              className="interactive inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-100 transition-all duration-300 hover:border-cyan hover:bg-cyan/10"
            >
              Download Resume
            </a>
            <Link
              to="/education"
              className="interactive inline-flex items-center justify-center rounded-full border border-cyan/20 bg-cyan/10 px-6 py-3 text-xs sm:text-sm font-semibold text-cyan transition-all duration-300 hover:bg-cyan hover:text-night"
            >
              Education &amp; Research
            </Link>
          </div>
          <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {heroStats.map((stat, i) => (
              <div key={stat.label} className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-cyan/30 hover:bg-white/10">
                <p className="text-2xl font-bold text-white group-hover:text-cyan">{stat.value}</p>
                <p className="mt-1 text-[0.65rem] sm:text-xs uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <HeroHighlights />
          <Now />
        </div>
        <div className="glass-card relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/80 shadow-glow">
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-cyan via-purple-400 to-fuchsia-500 opacity-80" />
          <div className="relative grid gap-6 p-6 sm:p-8">
            <div className="relative overflow-hidden rounded-[2.25rem] bg-black/10 shadow-inner shadow-cyan/10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/15 via-transparent to-purple-500/20" />
              <img
                src="/profile.jpg"
                alt="Sanket Barhate portrait"
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="relative space-y-4 text-slate-100">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan/70">Portrait + personal brand</p>
              <h2 className="text-3xl font-semibold text-white">A confident, recruiter-ready hero image.</h2>
              <p className="text-slate-300">
                Engineering student crafting AI-powered experiences with product-first thinking.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Focus</p>
                  <p className="mt-2 font-semibold text-white">Product leadership + engineering</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Availability</p>
                  <p className="mt-2 font-semibold text-white">Open to APM & Analyst Roles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeaturedHome />
      <div className="absolute inset-x-0 bottom-8 flex justify-center">
        <div className="scroll-indicator group inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan/30 bg-white/5 text-cyan transition-all duration-300 hover:scale-110 hover:border-cyan hover:bg-cyan/10">
          <span className="text-xl transition-transform duration-300 group-hover:translate-y-1">⌄</span>
        </div>
      </div>
    </main>
  );
}

export default Home;
