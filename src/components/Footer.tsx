import { Mail, Linkedin, Github, Phone, ArrowUp, Sparkles } from 'lucide-react';
import { contact, navLinks } from '../data/portfolio';

export function Footer() {
  const handleNav = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const year = new Date().getFullYear();

  const social = [
    { icon: Mail, href: `mailto:${contact.email}`, label: 'Email' },
    { icon: Phone, href: `tel:${contact.phone.replace(/[^+\d]/g, '')}`, label: 'Phone' },
    { icon: Linkedin, href: contact.linkedin, label: 'LinkedIn' },
    { icon: Github, href: contact.github, label: 'GitHub' },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-300">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[40rem] -translate-x-1/2 rounded-full bg-brand-600/15 blur-3xl" />

      <div className="container-page relative py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="font-serif text-lg font-semibold text-white">
                Leena Khot
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
              Aspiring Business Analyst passionate about Artificial Intelligence,
              data-driven decision making, and continuous learning.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
              Explore
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="text-sm text-ink-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
              Connect
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-sm text-ink-400 transition-colors hover:text-white"
                  >
                    <s.icon className="h-4 w-4" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-ink-500">
            © {year} Leena Khot. Built with curiosity and care.
          </p>
          <button
            onClick={() => handleNav('home')}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-ink-300 transition-colors hover:border-white/30 hover:text-white"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
