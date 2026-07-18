import { Target, Heart, Compass } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { useReveal } from '../hooks/useReveal';

const pillars = [
  {
    icon: Target,
    title: 'My Goals',
    body: 'Become a Business Analyst who bridges people, data, and technology — translating ambiguity into clear, actionable decisions that create real value.',
  },
  {
    icon: Compass,
    title: 'My Interests',
    body: 'Artificial Intelligence, data visualization, and emerging technologies — especially how they reshape industries like healthcare and pharmaceuticals.',
  },
  {
    icon: Heart,
    title: 'My Passion',
    body: 'Continuous learning. I love turning curiosity into capability — whether it is a new tool, a new dataset, or a new way of thinking about a problem.',
  },
];

export function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="About Me"
          title="A motivated learner, a future business professional."
          description="I'm an aspiring Business Analyst with a growing interest in Artificial Intelligence, technology, and data-driven decision making. I care about solving real-world problems and exploring how AI can transform industries."
        />

        <div ref={ref} className={`reveal mt-14 grid gap-6 md:grid-cols-3 ${visible ? 'is-visible' : ''}`}>
          {pillars.map((p) => (
            <article key={p.title} className="card p-7 hover:-translate-y-1 hover:shadow-lift">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-ink-900">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                {p.body}
              </p>
            </article>
          ))}
        </div>

        {/* Narrative */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="absolute -left-3 top-2 h-full w-1 rounded-full bg-gradient-to-b from-brand-400 to-gold-300" />
            <p className="text-lg leading-relaxed text-ink-700">
              I'm passionate about continuous learning and always eager to develop
              new technical and analytical skills. From business analysis and data
              visualization to the latest in emerging technologies, I enjoy
              projects that turn raw information into insight.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">
              I see AI as a powerful tool to augment human judgment — not replace
              it — and I'm committed to understanding it deeply enough to put it
              to responsible, meaningful use.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <HighlightCard label="Focus areas" items={['Business Analysis', 'Data Visualization', 'AI & Analytics']} />
            <HighlightCard label="Industries of interest" items={['Healthcare', 'Pharmaceuticals', 'Emerging Tech']} />
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightCard({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="card flex flex-col gap-3 p-6">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
        {label}
      </span>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-ink-700">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
