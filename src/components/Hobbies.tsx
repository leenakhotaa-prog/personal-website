import { SectionHeading } from './SectionHeading';
import { hobbies } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';

export function Hobbies() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="hobbies" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Hobbies & Interests"
          title="Outside the spreadsheet, a curious mind."
          description="The things that recharge me often feed back into how I think — pattern-finding in photography, storytelling in films, or fresh perspective from a new city."
        />

        <div
          ref={ref}
          className={`reveal mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${visible ? 'is-visible' : ''}`}
        >
          {hobbies.map((hobby) => (
            <article
              key={hobby.name}
              className="group flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-gold-50 text-brand-700 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <hobby.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-base font-semibold text-ink-900">
                  {hobby.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-500">
                  {hobby.blurb}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
