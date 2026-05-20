import { Document, Page, pdfjs } from 'react-pdf';
import { useEffect, useRef, useState } from 'react';
import Meta from '../components/Meta';
import SectionWrapper from '../components/SectionWrapper';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const resumeFile = '/resume.pdf';
  const researchPaperFile = '/Design%20and%20Implementation%20of%20Real-Time%20Pump%20Failure%20Analysis%20and%20Monitoring%20System%20By%20Using%20ESP-32%20and%20IoT%20Sensors.pdf';
  const containerRef = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [viewerWidth, setViewerWidth] = useState<number>(0);

  const onDocumentLoadSuccess = ({ numPages: pageCount }: { numPages: number }) => {
    setNumPages(pageCount);
  };

  useEffect(() => {
    const updateWidth = () => {
      const width = containerRef.current?.offsetWidth ?? 0;
      setViewerWidth(Math.min(1000, Math.max(width - 40, 320)));
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <Meta title="Resume | Sanket Barhate" description="View or download Sanket's resume for a full summary of skills, experience, and product delivery work." />
      <SectionWrapper>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-[1.4fr_1fr] mb-8 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glow">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-cyan/80">Resume</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Resume built for product, engineering, and research hiring.</h1>
            <p className="mt-4 max-w-2xl text-slate-300">A polished summary of product strategy, business analysis, and full-stack delivery across AI, travel, hospitality, and legal-tech.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-cyan/20 bg-cyan/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-cyan">Open to full-time roles</span>
              <span className="rounded-full border border-slate-600/50 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-slate-300">Research-led delivery</span>
              <span className="rounded-full border border-slate-600/50 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-slate-300">Product and engineering impact</span>
            </div>
            <div className="mt-6 grid gap-4 text-slate-300 grid-cols-1 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Focus</p>
                <p className="mt-3 text-lg font-semibold text-white">Product, business analysis, and full-stack delivery</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Why hire</p>
                <p className="mt-3 text-lg font-semibold text-white">Data-informed decisions and measurable product outcomes</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-glow">
            <div className="rounded-3xl bg-cyan px-6 py-4 text-sm font-semibold text-night shadow-glow">
              Resume ready for hiring managers and product teams.
            </div>
            <a
              href={resumeFile}
              className="interactive inline-flex w-full items-center justify-center rounded-3xl bg-cyan px-6 py-3 text-sm font-semibold text-night transition hover:brightness-110 sm:w-auto"
            >
              Download Resume
            </a>
            <a
              href={researchPaperFile}
              target="_blank"
              rel="noreferrer"
              className="interactive inline-flex w-full items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan sm:w-auto"
            >
              View Research Paper
            </a>
            <div className="rounded-3xl border border-cyan/20 bg-white/5 p-4 text-sm text-slate-300">
              Ready to review in one click. Use the resume for hiring, interviews, or product collaboration discussions.
            </div>
          </div>
        </div>
        <div ref={containerRef} className="glass-card rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 sm:p-6 shadow-glow">
          {viewerWidth ? (
            <Document file={resumeFile} onLoadSuccess={onDocumentLoadSuccess} loading="Loading resume...">
              {Array.from(new Array(numPages), (_, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} width={viewerWidth} />
              ))}
            </Document>
          ) : (
            <p className="text-slate-300">Loading resume preview...</p>
          )}
        </div>
      </SectionWrapper>
    </main>
  );
}

export default Resume;
