import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { navLinks } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-ink-100/80 bg-ink-50/80 backdrop-blur-md shadow-soft'
          : 'border-b border-transparent bg-transparent',
      ].join(' ')}
    >
      <nav className="container-page flex h-16 items-center justify-between sm:h-20">
        <button
          onClick={() => handleNav('home')}
          className="group flex items-center gap-2.5"
          aria-label="Go to top"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-soft transition-transform group-hover:scale-105">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="font-serif text-lg font-semibold text-ink-900">
            Leena Khot
          </span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <button
                  onClick={() => handleNav(link.id)}
                  className={[
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'text-brand-700'
                      : 'text-ink-600 hover:text-ink-900',
                  ].join(' ')}
                >
                  {link.label}
                  <span
                    className={[
                      'absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-500 transition-all duration-300',
                      isActive ? 'opacity-100' : 'opacity-0',
                    ].join(' ')}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <button onClick={() => handleNav('contact')} className="btn-primary">
            Get in touch
          </button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl text-ink-800 hover:bg-ink-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={[
          'md:hidden overflow-hidden border-t border-ink-100 bg-ink-50/95 backdrop-blur-md transition-[max-height,opacity] duration-300',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className="w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-ink-700 hover:bg-ink-100"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="mt-2">
            <button
              onClick={() => handleNav('contact')}
              className="btn-primary w-full"
            >
              Get in touch
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
