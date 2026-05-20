import { motion } from 'framer-motion';
import type { TimelineEntry } from '../types';

interface TimelineProps {
  entries: TimelineEntry[];
}

function Timeline({ entries }: TimelineProps) {
  return (
    <div className="relative mx-auto grid max-w-4xl gap-8 px-4 sm:px-6">
      <div className="absolute left-5 top-0 h-full w-0.5 bg-slate-600/40 sm:left-1/2" />
      {entries.map((entry, index) => (
        <motion.div
          key={entry.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
          className="relative flex flex-col gap-4 sm:mx-auto sm:w-3/4"
        >
          <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-cyan bg-night sm:left-1/2 sm:-translate-x-1/2" />
          <div className="glass-card rounded-3xl border border-white/10 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan/80">{entry.date}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{entry.title}</h3>
            <p className="mt-1 text-sm text-slate-400">{entry.subtitle}</p>
            <p className="mt-4 leading-7 text-slate-300">{entry.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Timeline;
