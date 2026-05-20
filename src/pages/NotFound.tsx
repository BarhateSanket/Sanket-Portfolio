import { Link } from 'react-router-dom';
import Meta from '../components/Meta';

function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <Meta title="404 | Sanket Barhate" description="Page not found for Sanket Barhate's portfolio site." />
      <div className="glass-card max-w-2xl rounded-[2rem] border border-white/10 bg-slate-950/70 p-10 shadow-glow">
        <h1 className="text-5xl font-bold text-white">404</h1>
        <p className="mt-4 text-lg text-slate-300">Page not found. Continue exploring resume, case studies, or product work from the main navigation.</p>
        <div className="mt-8 grid gap-3 grid-cols-1 sm:grid-cols-3">
          <Link
            to="/"
            className="inline-flex w-full items-center justify-center rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-night transition hover:brightness-110"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan"
          >
            Case Studies
          </Link>
          <Link
            to="/contact"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan"
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
