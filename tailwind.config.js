/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#050d1a',
        deep: '#08111d',
        electric: '#3b82f6',
        cyan: '#06b6d4',
        glass: 'rgba(255,255,255,0.08)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(59, 130, 246, 0.18)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      dropShadow: {
        glow: ['0 0 8px rgba(6, 182, 212, 0.5)', '0 0 20px rgba(6, 182, 212, 0.3)'],
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },

    },
  },
  plugins: [],
};
