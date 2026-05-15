import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { OFFICES, BRAND } from '../data/offices.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

export default function Contact() {
  const { t } = useLanguage();
  const cityLabels = t('locations.items');
  const subjectOptions = t('contact.subjectOptions');

  const [form, setForm] = useState({
    name: '', email: '', company: '', location: '', subject: 'general', message: '',
  });
  const [sent, setSent] = useState(false);

  const setField = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setForm({ name: '', email: '', company: '', location: '', subject: 'general', message: '' });
  };

  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[55svh] items-center pt-32 md:pt-40">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 50% 20%, rgba(200,160,74,0.18) 0%, transparent 55%), radial-gradient(ellipse at 80% 90%, rgba(90,26,43,0.25) 0%, transparent 55%), #0a0a0a',
            }}
          />
        </div>
        <div className="container-luxe">
          <SectionHeading eyebrow={t('contact.eyebrow')} heading={t('contact.title')} subtitle={t('contact.subtitle')} />
        </div>
      </section>

      {/* FORM + OFFICES */}
      <section className="py-16 md:py-24">
        <div className="container-luxe grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Form */}
          <div className="md:col-span-7">
            <Reveal>
              <div className="border border-gold/25 bg-matte-900/60 p-8 md:p-10">
                <p className="eyebrow">{t('contact.formIntro')}</p>
                <h2 className="mt-3 font-display text-2xl uppercase tracking-royal text-stone-100 md:text-3xl">
                  {t('common.sendMessage')}
                </h2>
                <p className="mt-3 font-serif italic text-stone-400">{t('contact.formNote')}</p>

                {sent ? (
                  <div className="mt-10 border border-gold/40 bg-matte-black/80 p-8 text-center">
                    <p className="font-display text-[0.65rem] uppercase tracking-cinematic text-gold">Received</p>
                    <p className="mt-3 font-serif text-lg italic text-stone-200">{t('contact.sentSuccess')}</p>
                    <button onClick={() => setSent(false)} className="btn-outline-gold mt-6">{t('common.sendMessage')}</button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label={t('common.yourName')} required>
                        <input type="text" value={form.name} onChange={setField('name')} required className={inputClass} />
                      </Field>
                      <Field label={t('common.yourEmail')} required>
                        <input type="email" value={form.email} onChange={setField('email')} required className={inputClass} />
                      </Field>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label={t('common.yourCompany')}>
                        <input type="text" value={form.company} onChange={setField('company')} className={inputClass} />
                      </Field>
                      <Field label={t('common.yourLocation')}>
                        <input type="text" value={form.location} onChange={setField('location')} className={inputClass} />
                      </Field>
                    </div>
                    <Field label={t('common.subject')} required>
                      <select value={form.subject} onChange={setField('subject')} className={`${inputClass} appearance-none pr-10`}>
                        <option value="general">{subjectOptions.general}</option>
                        <option value="partnership">{subjectOptions.partnership}</option>
                        <option value="press">{subjectOptions.press}</option>
                        <option value="trade">{subjectOptions.trade}</option>
                        <option value="private">{subjectOptions.private}</option>
                      </select>
                    </Field>
                    <Field label={t('common.message')} required>
                      <textarea rows={6} value={form.message} onChange={setField('message')} required className={`${inputClass} resize-none`} />
                    </Field>
                    <div className="pt-2">
                      <button type="submit" className="btn-gold">{t('common.sendMessage')}</button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* Offices */}
          <div className="md:col-span-5">
            <Reveal delay={120}>
              <p className="eyebrow">{t('contact.offices')}</p>
              <h2 className="mt-3 font-display text-2xl uppercase tracking-royal text-stone-100 md:text-3xl">
                {t('locations.heading')}
              </h2>
              <span className="mt-6 block h-px w-20 bg-gold" />

              <ul className="mt-8 space-y-6">
                {OFFICES.map((o, idx) => {
                  const label = cityLabels[idx] || { city: '', country: '' };
                  return (
                    <li key={o.key} className="flex items-start gap-5 border-b border-gold/10 pb-6">
                      <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center border border-gold/30 font-display text-[0.65rem] uppercase tracking-cinematic text-gold">
                        0{idx + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="font-display text-lg uppercase tracking-royal text-stone-100">{label.city}</p>
                        <p className="font-display text-[0.55rem] uppercase tracking-cinematic text-gold/70">
                          {o.role} · {label.country}
                        </p>
                        <p className="mt-3 font-serif text-sm text-stone-300">{o.address}</p>
                        <ul className="mt-2 space-y-0.5 font-serif text-sm text-stone-400">
                          {o.phones.map((p) => (
                            <li key={p}>
                              <a href={`tel:${p.replace(/[^\d+]/g, '')}`} className="hover:text-gold">{p}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-10 space-y-3 border border-gold/25 bg-marble-black p-6">
                <p className="eyebrow">{t('common.followUs')}</p>
                <p className="font-serif italic text-stone-300">
                  <a href={BRAND.instagramUrl} className="hover:text-gold" target="_blank" rel="noreferrer noopener">{BRAND.instagram}</a>
                  {' · '}
                  <a href={`mailto:${BRAND.email}`} className="hover:text-gold">{BRAND.email}</a>
                </p>
                <p className="font-display text-[0.6rem] uppercase tracking-cinematic text-gold/70">{BRAND.website}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

const inputClass =
  'w-full border border-gold/20 bg-matte-black/60 px-4 py-3 font-serif text-base text-stone-100 placeholder:text-stone-500 focus:border-gold focus:outline-none transition-colors';

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="block font-display text-[0.6rem] uppercase tracking-cinematic text-gold/80">
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}
