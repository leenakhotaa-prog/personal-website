import { ArrowUpRight, FolderOpen } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { projects, type ProjectPlaceholder } from '../data/portfolio';

const statusStyles: Record<ProjectPlaceholder['status'], string> = {
  Planned: 'bg-ink-100 text-ink-600',
  'In Progress': 'bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-200',
  'Coming Soon': 'bg-gold-50 text-gold-700 ring-1 ring-inset ring-gold-200',
};

export function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 bg-gradient-to-b from-ink-50 to-white py-24 sm:py-28"
    >
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Work in progress — and what's coming."
            description="A few directions I'm actively exploring. These placeholders will grow into real case studies, dashboards, and analyses as my work takes shape."
          />
          <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-white px-4 py-2 text-sm text-ink-500 shadow-soft sm:self-auto">
            <FolderOpen className="h-4 w-4 text-brand-600" />
            More to come
          </span>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-400 to-gold-300 transition-transform duration-500 group-hover:scale-x-100" />

              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                  {project.tag}
                </span>
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${statusStyles[project.status]}`}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="mt-5 font-serif text-2xl font-semibold text-ink-900">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">
                {project.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-ink-400 transition-colors group-hover:text-brand-700">
                <span className="link-underline">Coming soon</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-xl text-sm text-ink-500">
          Each project will be updated with context, process, and outcomes as it's
          completed — so recruiters and collaborators can see how I think, not
          just what I produce.
        </p>
      </div>
    </section>
  );
}
