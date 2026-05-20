import { useState } from 'react';
import Meta from '../components/Meta';
import SectionWrapper from '../components/SectionWrapper';
import ContactForm from '../components/ContactForm';

function Contact() {
  const [succeeded, setSucceeded] = useState(false);

  return (
    <main className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Meta title="Contact | Sanket Barhate" description="Reach out to Sanket for product engineering, business analysis, and full-stack collaboration." />
      <SectionWrapper>
<div className="grid gap-10 grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] lg:[&>*]:h-full">
           <div className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 sm:p-10 shadow-glow">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan/80">Get in touch</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Let&apos;s start a product conversation.</h1>
            <p className="mt-5 max-w-xl text-slate-300">Whether it is product strategy, engineering delivery, or research-backed growth, I help teams ship effective systems and measurable outcomes.</p>
            <div className="mt-10 grid gap-4 text-slate-300">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Email</p>
                <p className="mt-2 text-lg font-semibold text-white">sanketbarhate3@gmail.com</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Location</p>
                <p className="mt-2 text-lg font-semibold text-white">Pune, Maharashtra, India</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Connect</p>
                <div className="mt-2 flex flex-col gap-2">
                  <a href="https://github.com/BarhateSanket" target="_blank" rel="noreferrer" className="text-cyan hover:text-white">
                    github.com/BarhateSanket
                  </a>
                  <a href="https://www.linkedin.com/in/barhatesanket" target="_blank" rel="noreferrer" className="text-cyan hover:text-white">
                    linkedin.com/in/barhatesanket
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-[2rem] border border-cyan/15 bg-cyan/5 p-6 text-slate-200">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan/80">What I can help with</p>
              <p className="mt-3 text-white">Product launches, AI systems, stakeholder alignment, and data-informed business analysis.</p>
            </div>
            <a
              href={import.meta.env.VITE_CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
className="mt-6 inline-flex items-center justify-center rounded-3xl bg-cyan px-8 py-4 text-sm sm:text-base font-semibold text-night shadow-glow transition hover:brightness-110"
             >
               Schedule a chat
            </a>
          </div>
          <ContactForm onSuccess={() => setSucceeded(true)} />
        </div>
        {succeeded && <p className="mt-8 rounded-3xl border border-cyan/20 bg-cyan/10 p-5 text-center text-cyan">Thanks! Your message is on its way.</p>}
      </SectionWrapper>
    </main>
  );
}

export default Contact;
