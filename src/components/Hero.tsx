import { ArrowDown, MapPin, GraduationCap, Sparkles } from 'lucide-react';

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-ink-50 pt-28 sm:pt-32"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-70" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-[-10%] h-[28rem] w-[28rem] rounded-full bg-gold-100/60 blur-3xl" />

      <div className="container-page relative">
        <div className="grid items-center gap-12 pb-20 pt-10 lg:grid-cols-[1.15fr_1fr] lg:pb-28 lg:pt-16">
          {/* Left — copy */}
          <div className="animate-fade-up">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Aspiring Business Analyst
            </span>

            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] text-ink-950 sm:text-6xl lg:text-[4.25rem]">
              Hi, I'm Leena Khot.
              <span className="block text-brand-700">Welcome to my corner.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
              A motivated learner exploring how{' '}
              <span className="font-semibold text-ink-900">Artificial Intelligence</span>{' '}
              and data-driven thinking can transform industries — especially
              healthcare and pharmaceuticals. Curious by nature, analytical by
              practice, and always growing.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={() => scrollTo('about')} className="btn-primary">
                Learn about me
              </button>
              <button onClick={() => scrollTo('projects')} className="btn-ghost">
                See my work
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-500">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-600" />
                Open to opportunities
              </span>
              <span className="inline-flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-brand-600" />
                Business &amp; Analytics
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand-600" />
                AI &amp; emerging tech
              </span>
            </div>
          </div>

          {/* Right — visual card */}
          <div className="relative animate-fade-in [animation-delay:200ms]">
            <div className="relative mx-auto max-w-md">
              {/* Decorative orbiting dot */}
              <div className="absolute -right-3 -top-3 h-6 w-6 animate-float rounded-full bg-gold-300 shadow-soft" />
              <div className="absolute -bottom-4 -left-4 h-10 w-10 rounded-2xl bg-brand-200 shadow-soft" />

              {/* Avatar / monogram card */}
              <div className="card relative overflow-hidden p-8">
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-br from-brand-500 to-brand-700" />
                <div className="relative flex flex-col items-center pt-10">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-brand-100 to-gold-100 font-serif text-4xl font-semibold text-brand-800 shadow-lift">
                    LK
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-ink-900">
                    Leena Khot
                  </h3>
                  <p className="mt-1 text-sm text-ink-500">
                    Future Business Analyst
                  </p>

                  <div className="mt-6 grid w-full grid-cols-3 gap-3 text-center">
                    <Stat label="Focus" value="AI" />
                    <Stat label="Tools" value="BI + SQL" />
                    <Stat label="Mindset" value="Curious" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="container-page relative pb-10">
        <button
          onClick={() => scrollTo('about')}
          className="mx-auto flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-ink-400 transition-colors hover:text-ink-700"
        >
          Scroll
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-ink-50/80 p-3">
      <div className="font-serif text-sm font-semibold text-ink-900">{value}</div>
      <div className="mt-0.5 text-[10px] uppercase tracking-wider text-ink-400">
        {label}
      </div>
    </div>
  );
}
