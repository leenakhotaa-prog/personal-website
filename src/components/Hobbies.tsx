import { useEffect, useState } from 'react';
import { BookOpen, Camera, Cpu, Film, Music, Plane, Sparkles } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { hobbies, type Hobby } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';

type MongoHobby = {
  _id: string;
  name: string;
  blurb: string;
  icon?: string;
  sortOrder?: number;
};

const iconByName = Object.fromEntries(hobbies.map((hobby) => [hobby.name, hobby.icon]));
const iconByKey = { BookOpen, Plane, Music, Film, Camera, Sparkles, Cpu };
const iconChoices = Object.keys(iconByKey);

const toHobby = (record: MongoHobby): Hobby => ({
  name: record.name,
  blurb: record.blurb,
  icon: iconByKey[record.icon as keyof typeof iconByKey] ?? iconByName[record.name] ?? Sparkles,
});

export function Hobbies() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [items, setItems] = useState<Hobby[]>(hobbies);
  const [managerOpen, setManagerOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    blurb: '',
    icon: 'Sparkles',
  });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    fetch('/api/hobbies', { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((records: MongoHobby[]) => {
        if (records.length === 0) return;
        setItems(
          records.map(toHobby)
        );
      })
      .catch(() => {
        // Keep the local starter entries visible until MongoDB is configured.
      });

    return () => controller.abort();
  }, []);

  const updateForm = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const addHobby = async (event: React.FormEvent) => {
    event.preventDefault();
    setFormStatus('Saving…');

    try {
      const response = await fetch('/api/hobbies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          blurb: form.blurb,
          icon: form.icon,
        }),
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.message || 'Could not save this hobby.');

      setItems((current) => [...current, toHobby(result)]);
      setForm((current) => ({
        ...current,
        name: '',
        blurb: '',
        icon: 'Sparkles',
      }));
      setFormStatus('Saved to MongoDB.');
    } catch (error) {
      setFormStatus(error instanceof Error ? error.message : 'Could not save this hobby.');
    }
  };

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
          {items.map((hobby) => (
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

        <div className="mt-10 rounded-2xl border border-brand-100 bg-brand-50/50 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-serif text-xl font-semibold text-ink-900">Manage hobbies</h3>
              <p className="mt-1 text-sm text-ink-600">Add a hobby directly from this site. Entries are saved to your local MongoDB API.</p>
            </div>
            <button type="button" className="btn-primary shrink-0" onClick={() => setManagerOpen((open) => !open)}>
              {managerOpen ? 'Close form' : 'Add a hobby'}
            </button>
          </div>

          {managerOpen && (
            <form onSubmit={addHobby} className="mt-6 grid gap-5 border-t border-brand-100 pt-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-500">Hobby name</span>
                <input className="form-input" value={form.name} onChange={(event) => updateForm('name', event.target.value)} placeholder="Cooking" required maxLength={80} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-500">Icon</span>
                <select className="form-input" value={form.icon} onChange={(event) => updateForm('icon', event.target.value)}>
                  {iconChoices.map((icon) => <option key={icon} value={icon}>{icon}</option>)}
                </select>
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-500">Description</span>
                <textarea className="form-input resize-none" rows={3} value={form.blurb} onChange={(event) => updateForm('blurb', event.target.value)} placeholder="What do you enjoy about it?" required maxLength={280} />
              </label>
              <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                <button type="submit" className="btn-primary">Save hobby</button>
                {formStatus && <p role="status" className="text-sm text-ink-600">{formStatus}</p>}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
