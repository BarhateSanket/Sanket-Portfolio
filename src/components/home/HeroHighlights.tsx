import { motion } from 'framer-motion';

const highlights = [
  {
    label: 'Engineering',
    body: 'Mechanical systems thinking + clean code architecture.',
    color: '#06b6d4',
  },
  {
    label: 'Product',
    body: 'Strategy → roadmap → measurable outcomes.',
    color: '#3b82f6',
  },
  {
    label: 'AI & Analytics',
    body: 'Predictive models, LLM tooling, data-informed decisions.',
    color: '#8b5cf6',
  },
  {
    label: 'Full Stack',
    body: 'React → Node → MongoDB, shipped to production.',
    color: '#22d3ee',
  },
];

function HeroHighlights() {
  return (
    <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:flex-wrap">
      <div className="flex-1 min-w-[180px] space-y-2.5">
        {highlights.slice(0, 2).map((item) => (
          <div
            key={item.label}
            className="group flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3.5 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.06]"
          >
            <span
              className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[0.65rem] font-bold"
              style={{ backgroundColor: `${item.color}18`, color: item.color }}
            >
              {item.label.charAt(0)}
            </span>
            <div>
              <p className="text-[0.8rem] font-semibold text-slate-200">{item.label}</p>
              <p className="text-[0.72rem] leading-relaxed text-slate-500">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1 min-w-[180px] space-y-2.5">
        {highlights.slice(2, 4).map((item) => (
          <div
            key={item.label}
            className="group flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3.5 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.06]"
          >
            <span
              className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[0.65rem] font-bold"
              style={{ backgroundColor: `${item.color}18`, color: item.color }}
            >
              {item.label.charAt(0)}
            </span>
            <div>
              <p className="text-[0.8rem] font-semibold text-slate-200">{item.label}</p>
              <p className="text-[0.72rem] leading-relaxed text-slate-500">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroHighlights;
