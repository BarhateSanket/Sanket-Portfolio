import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

function SectionWrapper({ children, className = '' }: SectionWrapperProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}

export default SectionWrapper;
