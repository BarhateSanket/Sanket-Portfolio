import { useState } from 'react';
import emailjs from 'emailjs-com';

interface ContactFormProps {
  onSuccess: () => void;
}

function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'sanket.barhate@gmail.com',
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      onSuccess();
    } catch (error) {
      setStatus('error');
      console.error('EmailJS send failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow">
      {/* Form fields */}
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-slate-200">
            Name
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-3xl border border-white/10 bg-white/5 p-4 text-slate-100 outline-none transition focus:border-cyan"
              placeholder="Your name"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-200">
            Email
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-3xl border border-white/10 bg-white/5 p-4 text-slate-100 outline-none transition focus:border-cyan"
              placeholder="you@example.com"
            />
          </label>
        </div>
        <label className="flex flex-col gap-2 text-sm text-slate-200">
          Subject
          <input
            required
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="rounded-3xl border border-white/10 bg-white/5 p-4 text-slate-100 outline-none transition focus:border-cyan"
            placeholder="Project inquiry, feedback, or collaboration"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate-200">
          Message
          <textarea
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-4 text-slate-100 outline-none transition focus:border-cyan"
            placeholder="Tell me about your goals, timeline, or questions."
          />
        </label>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="interactive w-full items-center justify-center rounded-3xl bg-cyan px-6 py-4 text-sm font-semibold text-night transition hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'sent' && <p className="rounded-3xl border border-cyan/20 bg-cyan/10 p-4 text-sm text-cyan">Message sent successfully. I&apos;ll respond quickly.</p>}
        {status === 'error' && <p className="rounded-3xl border border-rose-400/20 bg-rose-500/10 p-4 text-sm text-rose-400">Could not send the message. Try again later.</p>}
      </div>

      {/* Spacer — pushes footer to bottom */}
      <div className="flex-1" />

{/* Footer — fills bottom area */}
       <div className="mt-2 space-y-3 sm:space-y-5">
         <div className="rounded-[2rem] border border-cyan/15 bg-cyan/5 p-5">
           <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan/80">What to include in your message</p>
           <ul className="space-y-2.5 text-[0.8rem] text-slate-300">
             <li className="flex items-start gap-2">
               <span className="mt-0.5 inline-flex h-1.5 w-1.5 rounded-full bg-cyan flex-shrink-0" />
               <span>Project type — AI system, SaaS, proptech, research, or collaboration</span>
             </li>
             <li className="flex items-start gap-2">
               <span className="mt-0.5 inline-flex h-1.5 w-1.5 rounded-full bg-cyan flex-shrink-0" />
               <span>Timeline and any hard deadlines you are working towards</span>
             </li>
             <li className="flex items-start gap-2">
               <span className="mt-0.5 inline-flex h-1.5 w-1.5 rounded-full bg-cyan flex-shrink-0" />
               <span>Budget range or engagement model (freelance, full-time, contract)</span>
             </li>
             <li className="flex items-start gap-2">
               <span className="mt-0.5 inline-flex h-1.5 w-1.5 rounded-full bg-cyan flex-shrink-0" />
               <span>Links to relevant briefs, docs, or competitors you have researched</span>
             </li>
             <li className="flex items-start gap-2">
               <span className="mt-0.5 inline-flex h-1.5 w-1.5 rounded-full bg-cyan flex-shrink-0" />
               <span>Past responses or signals — launch history, past hiring rounds, or market signals</span>
             </li>
             <li className="flex items-start gap-2">
               <span className="mt-0.5 inline-flex h-1.5 w-1.5 rounded-full bg-cyan flex-shrink-0" />
               <span>Stakeholder context — who else is in the loop and decision-makers involved</span>
             </li>
           </ul>
         </div>
         <div className="flex items-center gap-3">
           <span className="mt-0.5 inline-flex h-2 w-2 rounded-full bg-cyan flex-shrink-0" />
           <p className="text-[0.8rem] font-medium tracking-wide text-slate-300">Typical response within 24 hours</p>
         </div>
         <div className="grid gap-3 sm:gap-2 sm:grid-cols-2">
          <a
            href="https://github.com/BarhateSanket"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300 transition hover:border-cyan/30 hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/barhatesanket"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300 transition hover:border-cyan/30 hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </div>
        <p className="text-[0.7rem] leading-relaxed text-slate-500">
          Have a specific timeline or project brief? Mention it in your message and I will prioritize accordingly.
        </p>
      </div>
    </form>
  );
}

export default ContactForm;
