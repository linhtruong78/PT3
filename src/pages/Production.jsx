import { useLanguage } from '../i18n/LanguageContext.jsx';
import { OFFICES } from '../data/offices.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

/**
 * Production / Facilities page.
 * One section per facility, in a 2-column editorial layout.
 */
export default function Production() {
  const { t } = useLanguage();
  const cityLabels = t('locations.items');
  const roles = t('production.roles');
  const activities = t('production.activities.items');

  // Map each office (by key) to its translated role label
  const roleFor = (key) => ({
    vancouver: roles.head,
    abbotsford: roles.production,
    toronto: roles.second,
    dubai: roles.uae,
    hcmc: roles.asia,
  }[key] || '');

  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[55svh] items-center pt-32 md:pt-40">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 50% 20%, rgba(200,160,74,0.18) 0%, transparent 55%), radial-gradient(ellipse at 80% 90%, rgba(15,81,50,0.20) 0%, transparent 55%), #0a0a0a',
            }}
          />
        </div>
        <div className="container-luxe">
          <SectionHeading
            eyebrow={t('production.eyebrow')}
            heading={t('production.title')}
            subtitle={t('production.subtitle')}
          />
        </div>
      </section>

      {/* COMPANY ACTIVITIES */}
      <section className="py-16 md:py-20">
        <div className="container-luxe">
          <Reveal>
            <div className="mx-auto max-w-4xl border border-gold/25 bg-matte-900/50 p-8 md:p-12">
              <p className="eyebrow text-center">{t('production.activities.heading')}</p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {activities.map((a, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold shadow-gold-glow" />
                    <span className="font-serif text-base text-stone-200">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FACILITIES — alternating sides */}
      <section className="py-16 md:py-24">
        <div className="container-luxe space-y-20 md:space-y-28">
          {OFFICES.map((o, idx) => {
            const label = cityLabels[idx] || { city: '', country: '' };
            return (
              <div
                key={o.key}
                className={`grid items-center gap-10 md:grid-cols-12 md:gap-16 ${
                  idx % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Decorative panel */}
                <Reveal>
                  <div className="relative aspect-[4/5] w-full overflow-hidden border border-gold/20 bg-marble-black md:col-span-5">
                    <div
                      className="absolute inset-0"
                      style={{
                        background: facilityBackground(idx),
                      }}
                    />
                    <div className="absolute inset-6 border border-gold/30" />
                    <div className="absolute inset-10 border border-gold/10" />
                    <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
                      <span
                        className="font-display text-[7rem] font-bold leading-none md:text-[9rem]"
                        style={{
                          backgroundImage:
                            'linear-gradient(135deg, #8c6f2e 0%, #c8a04a 30%, #e8d4a0 50%, #c8a04a 70%, #8c6f2e 100%)',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        0{idx + 1}
                      </span>
                      <span className="mt-3 font-display text-[0.6rem] uppercase tracking-cinematic text-gold">
                        {roleFor(o.key)}
                      </span>
                      <span className="mt-1 font-serif italic text-stone-200">{label.city}</span>
                    </div>
                  </div>
                </Reveal>

                {/* Details */}
                <Reveal delay={120} className="md:col-span-7">
                  <p className="eyebrow">{roleFor(o.key)}</p>
                  <h2 className="mt-3 font-display text-3xl uppercase tracking-royal text-stone-100 md:text-4xl">
                    {label.city}
                  </h2>
                  <p className="mt-1 font-display text-[0.65rem] uppercase tracking-cinematic text-gold/70">
                    {label.country}
                  </p>
                  <span className="mt-6 block h-px w-20 bg-gold" />

                  <p className="mt-6 font-serif text-base leading-relaxed text-stone-300 md:text-lg">
                    {o.address}
                  </p>

                  <div className="mt-6 grid gap-2 sm:grid-cols-2">
                    {o.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p.replace(/[^\d+]/g, '')}`}
                        className="font-serif text-base text-stone-300 transition-colors hover:text-gold"
                      >
                        {p}
                      </a>
                    ))}
                  </div>

                  <a
                    href={`mailto:${o.email}`}
                    className="mt-4 inline-block font-display text-[0.65rem] uppercase tracking-cinematic text-gold transition-colors hover:text-gold-light"
                  >
                    {o.email}
                  </a>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

function facilityBackground(idx) {
  switch (idx % 5) {
    case 0: return 'radial-gradient(ellipse at 50% 30%, rgba(200,160,74,0.25), transparent 60%)';
    case 1: return 'radial-gradient(ellipse at 50% 50%, rgba(232,212,160,0.22), transparent 60%)';
    case 2: return 'radial-gradient(ellipse at 50% 60%, rgba(15,81,50,0.30), transparent 60%)';
    case 3: return 'radial-gradient(ellipse at 50% 40%, rgba(90,26,43,0.28), transparent 60%)';
    default: return 'radial-gradient(ellipse at 50% 50%, rgba(200,160,74,0.18), transparent 60%)';
  }
}
