import { ArrowRight, Briefcase, MapPin } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { jobOpportunities } from '../data/portfolio';

export function Opportunities() {
  return (
    <section id="opportunities" className="scroll-mt-24 bg-brand-50/50 py-24 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Opportunities"
            title="Roles I'm excited to explore."
            description="I'm open to internships and entry-level opportunities where I can apply analytical thinking, keep learning, and support meaningful decisions."
          />
          <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-white px-4 py-2 text-sm text-ink-600 shadow-soft sm:self-auto">
            <MapPin className="h-4 w-4 text-brand-600" />
            Open to opportunities
          </span>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {jobOpportunities.map((opportunity) => (
            <article key={opportunity.title} className="flex flex-col rounded-3xl border border-brand-100 bg-white p-7 shadow-soft">
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Briefcase className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-gold-50 px-3 py-1 text-xs font-semibold text-gold-700">
                  {opportunity.type}
                </span>
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">{opportunity.focus}</p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-ink-900">{opportunity.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{opportunity.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {opportunity.skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-ink-50 px-3 py-1 text-xs font-medium text-ink-600">{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          className="btn-primary mt-10"
        >
          Discuss an opportunity
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
