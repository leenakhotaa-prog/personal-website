import { skills, type Skill } from '../data/portfolio';

const levelStyles: Record<Skill['level'], string> = {
  Confident: 'bg-brand-50 text-brand-700 ring-brand-200',
  Developing: 'bg-gold-50 text-gold-700 ring-gold-200',
  Foundational: 'bg-ink-100 text-ink-600 ring-ink-200',
};

export function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 bg-ink-900 py-24 text-ink-50 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-dotted opacity-[0.06]" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" />

      <div className="container-page relative">
        <div className="max-w-2xl">
          <span className="eyebrow text-brand-300">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            Skills &amp; Toolkit
          </span>
          <h2 className="section-title mt-4 text-white">
            The skills I'm building, one project at a time.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-300 sm:text-lg">
            A blend of analytical tools, business acumen, and human skills I'm
            actively developing — and eager to apply in real-world settings.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <article
              key={skill.name}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.07] hover:shadow-glow"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 text-brand-300 ring-1 ring-inset ring-brand-400/30 transition-colors group-hover:text-brand-200">
                  <skill.icon className="h-5 w-5" />
                </div>
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ring-1 ring-inset ${levelStyles[skill.level]}`}
                >
                  {skill.level}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold text-white">
                {skill.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">
                {skill.blurb}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-ink-400">
          <span className="text-ink-300">Always learning.</span> Levels above
          reflect self-assessment — I'm actively deepening each area through
          projects and practice.
        </p>
      </div>
    </section>
  );
}
