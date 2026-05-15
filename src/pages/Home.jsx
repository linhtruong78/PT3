import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { PRODUCTS } from '../data/products.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ProductSlider from '../components/ProductSlider.jsx';
import InstagramGrid from '../components/InstagramGrid.jsx';
import LocationsBlock from '../components/LocationsBlock.jsx';
import { withBase } from '../utils/asset.js';

export default function Home() {
  const { t } = useLanguage();
  const pillars = t('pillars.items');

  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 md:pt-32">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 50% 20%, rgba(200,160,74,0.18) 0%, transparent 55%), radial-gradient(ellipse at 80% 90%, rgba(90,26,43,0.35) 0%, transparent 55%), #0a0a0a',
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
            style={{
              backgroundImage:
                'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), radial-gradient(rgba(0,0,0,0.5) 1px, transparent 1px)',
              backgroundSize: '3px 3px, 5px 5px',
              backgroundPosition: '0 0, 1px 2px',
            }}
          />
        </div>

        <div className="container-luxe relative">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="eyebrow">{t('hero.eyebrow')}</p>
            </Reveal>
            <Reveal delay={120}>
              <h1
                className="mt-6 font-display text-4xl font-medium uppercase leading-tight tracking-royal text-stone-50 sm:text-5xl md:text-7xl"
                style={{ whiteSpace: 'pre-line' }}
              >
                {t('hero.title')}
              </h1>
            </Reveal>
            <Reveal delay={300}>
              <span className="mx-auto mt-8 block h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </Reveal>
            <Reveal delay={400}>
              <p className="mx-auto mt-8 max-w-2xl font-serif text-lg italic text-stone-300 md:text-xl">
                {t('hero.subtitle')}
              </p>
            </Reveal>
            <Reveal delay={550}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/products" className="btn-gold">{t('hero.ctaPrimary')}</Link>
                <Link to="/about" className="btn-outline-gold">{t('hero.ctaSecondary')}</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOUSE CODE */}
      <section className="marble-bg py-24 md:py-32">
        <div className="container-luxe">
          <SectionHeading eyebrow={t('pillars.kicker')} heading={t('pillars.heading')} />
          <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 80}>
                <div className="card-luxe h-full p-8 md:p-10">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-3xl font-bold tracking-cinematic text-gold/30">0{idx + 1}</span>
                    <span className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
                  </div>
                  <h3 className="mt-6 font-display text-xl uppercase tracking-royal text-stone-100">{p.title}</h3>
                  <p className="mt-4 font-serif text-base leading-relaxed text-stone-400">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTION — slideshow with all products */}
      <section className="relative py-24 md:py-32">
        <div className="container-luxe">
          <SectionHeading eyebrow={t('featured.eyebrow')} heading={t('featured.heading')} subtitle={t('featured.subtitle')} />
          <div className="mt-16">
            <Reveal>
              <ProductSlider products={PRODUCTS} />
            </Reveal>
          </div>
          <Reveal delay={300}>
            <div className="mt-12 flex justify-center">
              <Link to="/products" className="btn-outline-gold">{t('common.viewAll')}</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COLLECTION BANNER */}
      <section className="py-16 md:py-24">
        <div className="container-luxe flex justify-center">
          <Reveal>
            <div className="inline-block overflow-hidden border border-gold/30 shadow-cinematic">
              <img
                src={withBase("/brand/collection-hero.jpeg")}
                alt="The PT3 Global Royal collection"
                loading="lazy"
                className="block max-h-[75vh] w-auto max-w-full md:max-h-[95vh] lg:max-h-[110vh] xl:max-h-[130vh]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="bg-matte-900/40 py-24 md:py-32">
        <div className="container-luxe">
          <SectionHeading eyebrow={t('locations.eyebrow')} heading={t('locations.heading')} subtitle={t('locations.subtitle')} />
          <div className="mt-16"><LocationsBlock /></div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-24 md:py-32">
        <div className="container-luxe">
          <SectionHeading eyebrow={t('instagram.eyebrow')} heading={t('instagram.heading')} subtitle={t('instagram.subtitle')} />
          <div className="mt-16"><InstagramGrid /></div>
        </div>
      </section>
    </>
  );
}
