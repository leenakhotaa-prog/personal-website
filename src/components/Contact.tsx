import { useState } from 'react';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { contact } from '../data/portfolio';
import { supabase, type ContactMessageInput } from '../lib/supabase';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const channels = [
  { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/[^+\d]/g, '')}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/leena-khot', href: contact.linkedin },
  { icon: Github, label: 'GitHub', value: 'github.com/leena-khot', href: contact.github },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [form, setForm] = useState<ContactMessageInput>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string>('');

  const update = (field: keyof ContactMessageInput, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (status === 'error') {
      setStatus('idle');
      setError('');
    }
  };

  const validate = (): string | null => {
    if (!form.name.trim()) return 'Please enter your name.';
    if (!EMAIL_RE.test(form.email)) return 'Please enter a valid email address.';
    if (!form.subject.trim()) return 'Please add a subject.';
    if (form.message.trim().length < 10)
      return 'Your message should be at least 10 characters.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setStatus('error');
      setError(validationError);
      return;
    }

    setStatus('submitting');
    setError('');

    try {
      const { error: insertError } = await supabase
        .from('contact_messages')
        .insert({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        });

      if (insertError) throw insertError;

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setError(
        err instanceof Error
          ? 'Something went wrong sending your message. Please try again.'
          : 'Something went wrong sending your message. Please try again.'
      );
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-dotted opacity-50" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect."
          description="Whether it's an opportunity, a question, or just a hello — I'd love to hear from you. Send a message and I'll get back to you soon."
          align="center"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact channels */}
          <div className="flex flex-col gap-4">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-transform group-hover:scale-110">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-ink-400">
                    {c.label}
                  </span>
                  <span className="mt-0.5 block truncate text-sm font-medium text-ink-800">
                    {c.value}
                  </span>
                </span>
              </a>
            ))}

            <div className="mt-2 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-6 text-white shadow-lift">
              <p className="font-serif text-lg font-semibold">
                Open to opportunities
              </p>
              <p className="mt-2 text-sm leading-relaxed text-brand-50/90">
                Internships, entry-level roles, and collaborative projects in
                business analysis and analytics.
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="card flex flex-col gap-5 p-7 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" htmlFor="name">
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Jane Doe"
                  className="form-input"
                  autoComplete="name"
                />
              </Field>
              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="jane@example.com"
                  className="form-input"
                  autoComplete="email"
                />
              </Field>
            </div>

            <Field label="Subject" htmlFor="subject">
              <input
                id="subject"
                type="text"
                value={form.subject}
                onChange={(e) => update('subject', e.target.value)}
                placeholder="What's this about?"
                className="form-input"
              />
            </Field>

            <Field label="Message" htmlFor="message">
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                placeholder="Write your message…"
                className="form-input resize-none"
              />
            </Field>

            {status === 'error' && (
              <div
                role="alert"
                className="flex items-start gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700 ring-1 ring-inset ring-red-200"
              >
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {status === 'success' && (
              <div
                role="status"
                className="flex items-start gap-3 rounded-xl bg-brand-50 p-4 text-sm text-brand-800 ring-1 ring-inset ring-brand-200"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Thank you! Your message has been sent — I'll be in touch soon.
                </span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send message
                </>
              )}
            </button>

            <p className="text-center text-xs text-ink-400">
              Your details are only used to reply to your message.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-ink-500">
        {label}
      </span>
      {children}
    </label>
  );
}
