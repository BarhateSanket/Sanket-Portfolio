import { useEffect, useState } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const stored = window.localStorage.getItem('portfolio-theme');
    const mode = stored === 'light' ? 'light' : 'dark';
    setTheme(mode);
    document.documentElement.classList.toggle('light', mode === 'light');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    window.localStorage.setItem('portfolio-theme', nextTheme);
    document.documentElement.classList.toggle('light', nextTheme === 'light');
  };

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}

export default ThemeToggle;
