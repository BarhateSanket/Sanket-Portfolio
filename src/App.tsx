import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedCursor from './components/AnimatedCursor';

const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Education = lazy(() => import('./pages/Experience'));
const Skills = lazy(() => import('./pages/Skills'));
const Resume = lazy(() => import('./pages/Resume'));
const Blog = lazy(() => import('./pages/Blog'));

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--selection-bg)] selection:text-[var(--selection-text)]">
      <AnimatedCursor />
      <Navbar />
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center bg-night">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-cyan/40 border-t-cyan"></div>
          </div>
        }
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
