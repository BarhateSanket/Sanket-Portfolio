import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  level: number;
}

function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <div className="glass-card rounded-3xl p-5">
      <div className="flex items-center justify-between gap-3">
        <span className="font-medium text-white">{name}</span>
        <span className="text-sm text-slate-300">{level}%</span>
      </div>
       <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-cyan to-electric"
        />
      </div>
    </div>
  );
}

export default SkillBadge;
