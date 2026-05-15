import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import LocationsBlock from '../components/LocationsBlock.jsx';

export default function About() {
  const { t } = useLanguage();
  const sections = t('about.sections');
  const values = t('about.values.items');

  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden pt-32 md:pt-40">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 30% 20%, rgba(200,160,74,0.16) 0%, transparent 55%), radial-gradient(ellipse at 70% 90%, rgba(15,81,50,0.25) 0%, transparent 55%), #0a0a0a',
            }}
          />
        </div>
        <div className="container-luxe">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal><p className="eyebrow">{t('about.eyebrow')}</p></Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 font-display text-4xl uppercase leading-tight tracking-royal text-stone-50 sm:text-5xl md:text-6xl">
                {t('about.title')}
              </h1>
            </Reveal>
            <Reveal delay={250}>
              <span className="mx-auto mt-8 block h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </Reveal>
            <Reveal delay={350}>
              <p className="mx-auto mt-8 font-serif text-lg italic text-stone-300 md:text-xl">
                {t('about.lead')}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STORY SECTIONS */}
      <section className="py-24 md:py-32">
        <div className="container-luxe space-y-24 md:space-y-32">
          {sections.map((sec, idx) => (
            <div
              key={sec.title}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                idx % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Reveal>
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-gold/20 bg-marble-black">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        idx === 0
                          ? 'radial-gradient(ellipse at 50% 30%, rgba(200,160,74,0.25), transparent 55%)'
                          : idx === 1
                          ? 'radial-gradient(ellipse at 50% 50%, rgba(232,212,160,0.20), transparent 60%)'
                          : 'radial-gradient(ellipse at 50% 60%, rgba(15,81,50,0.30), transparent 55%)',
                    }}
                  />
                  <div className="absolute inset-6 border border-gold/30" />
                  <div className="absolute inset-10 border border-gold/10" />
                  <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
                    <span
                      className="font-display text-[7rem] font-bold leading-none md:text-[10rem]"
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
                    <span className="mt-4 font-display text-[0.65rem] uppercase tracking-cinematic text-gold">
                      {sec.eyebrow}
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div>
                  <p className="eyebrow">{sec.eyebrow}</p>
                  <h2 className="mt-4 font-display text-3xl uppercase tracking-royal text-stone-100 md:text-4xl">
                    {sec.title}
                  </h2>
                  <span className="mt-6 block h-px w-20 bg-gold" />
                  <p className="mt-6 font-serif text-base leading-relaxed text-stone-300 md:text-lg">
                    {sec.body}
                  </p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-gold/15 bg-matte-900/40 py-24 md:py-32">
        <div className="container-luxe">
          <SectionHeading eyebrow={t('about.eyebrow')} heading={t('about.values.heading')} />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, idx) => (
              <Reveal key={v.title} delay={idx * 80}>
                <div className="card-luxe h-full p-8 text-center">
                  <p className="font-display text-[0.65rem] uppercase tracking-cinematic text-gold/70">0{idx + 1}</p>
                  <h3 className="mt-3 font-display text-2xl uppercase tracking-royal text-stone-100">{v.title}</h3>
                  <span className="mx-auto mt-4 block h-px w-12 bg-gold" />
                  <p className="mt-4 font-serif italic text-stone-400">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AMBASSADOR BANNER */}
      <section className="py-16 md:py-24">
        <div className="container-luxe flex justify-center">
          <Reveal>
            <div className="inline-block overflow-hidden border border-gold/30 shadow-cinematic">
              <img
                src="/brand/ambassador.jpeg"
                alt="PT3 Global Royal — A legacy in every sip"
                loading="lazy"
                className="block max-h-[75vh] w-auto max-w-full md:max-h-[95vh] lg:max-h-[110vh] xl:max-h-[130vh]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-24 md:py-32">
        <div className="container-luxe">
          <SectionHeading eyebrow={t('locations.eyebrow')} heading={t('locations.heading')} subtitle={t('locations.subtitle')} />
          <div className="mt-16"><LocationsBlock /></div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-luxe">
          <Reveal>
            <div className="relative overflow-hidden border border-gold/30 bg-marble-black px-8 py-16 text-center md:py-20">
              <div className="absolute inset-0 opacity-50" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(200,160,74,0.18), transparent 65%)' }} />
              <div className="relative">
                <h3 className="font-display text-3xl uppercase tracking-royal text-stone-50 md:text-4xl">{t('contact.title')}</h3>
                <p className="mx-auto mt-4 max-w-xl font-serif italic text-stone-300">{t('contact.subtitle')}</p>
                <Link to="/contact" className="btn-gold mt-8">{t('common.sendMessage')}</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
