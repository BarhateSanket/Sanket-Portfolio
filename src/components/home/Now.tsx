import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const nowItems = [
  {
    label: 'Learning',
    body: 'Advanced ML systems and LLM fine-tuning patterns.',
    icon: '✦',
  },
  {
    label: 'Exploring',
    body: 'IoT edge analytics and real-time alerting architectures.',
    icon: '◈',
  },
  {
    label: 'Writing',
    body: 'Notes on product discovery, RICE, and behavioral design.',
    icon: '✎',
  },
];

function Now() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mt-7 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5"
    >
      {/* Header row */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan" />
          </span>
          <p className="text-xs uppercase tracking-[0.25em] text-cyan/70">Now</p>
        </div>
        <p className="text-[0.65rem] text-slate-600">Last updated May 2026</p>
      </div>

      {/* Items */}
      <div className="mt-4 space-y-3">
        {nowItems.map((item) => (
          <div
            key={item.label}
            className="flex items-start gap-3 rounded-xl bg-white/[0.03] px-3.5 py-2.5 transition hover:bg-white/[0.06]"
          >
            <span className="text-cyan/50 text-sm">{item.icon}</span>
            <div className="flex-1">
              <p className="text-[0.75rem] font-semibold uppercase tracking-wider text-white">
                {item.label}
              </p>
              <p className="mt-0.5 text-[0.75rem] leading-relaxed text-slate-400">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer link */}
      <div className="mt-3.5 flex items-center gap-1 text-[0.7rem] text-cyan/60 hover:text-cyan transition-colors">
        <span>Follow the journey</span>
        <Link to="/blog" className="hover:underline">
          in the blog →
        </Link>
      </div>
    </motion.div>
  );
}

export default Now;
