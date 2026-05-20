import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Education', to: '/education' },
  { label: 'Skills', to: '/skills' },
  { label: 'Resume', to: '/resume' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-night/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full ring-2 ring-white/10 transition hover:ring-cyan/50">
            <img src="/about.jpg" alt="Sanket Barhate" className="h-full w-full object-cover object-center" />
          </span>
          <span className="text-xl font-semibold tracking-tight text-white">Sanket Barhate</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? 'text-cyan' : 'text-slate-300 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <motion.button
            whileTap={{ scale: 0.95 }}
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
            aria-label={open ? 'Close mobile menu' : 'Open mobile menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="text-xl">{open ? '\u00d7' : '\u2630'}</span>
          </motion.button>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-night/95 px-4 py-4 md:hidden"
          >
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-2 text-sm font-medium transition ${
                      isActive ? 'bg-violet/10 text-cyan' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
