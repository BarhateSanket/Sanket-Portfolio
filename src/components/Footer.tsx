function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night/95 px-4 py-12 text-slate-400 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-[2rem] border border-cyan/15 bg-cyan/5 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan/80">Ready to collaborate?</p>
          <p className="mt-2 text-xl font-semibold text-white">Let's build something impactful together.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={import.meta.env.VITE_CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-3xl bg-cyan px-6 py-3 text-sm font-semibold text-night shadow-glow transition hover:brightness-110"
            >
              Schedule a chat
            </a>
            <a
              href="mailto:sanket.barhate@gmail.com"
              className="inline-flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan"
            >
              Send an email
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Sanket Barhate. Crafted with intent, systems thinking, and premium product delivery.</p>
          <div className="flex flex-wrap items-center gap-3 text-slate-300">
            <a href="https://github.com/BarhateSanket" target="_blank" rel="noreferrer" className="hover:text-white">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/barhatesanket" target="_blank" rel="noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <a href="mailto:sanket.barhate@gmail.com" className="hover:text-white">
              Email
            </a>
            <span>Built with React, Tailwind, and intentional UX.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
