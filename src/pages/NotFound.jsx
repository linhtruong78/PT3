import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import Reveal from '../components/Reveal.jsx';

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <section className="relative isolate flex min-h-[80svh] items-center pt-32">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 20%, rgba(200,160,74,0.14) 0%, transparent 55%), #0a0a0a',
          }}
        />
      </div>
      <div className="container-luxe text-center">
        <Reveal>
          <p className="eyebrow">404 · Page Not Found</p>
        </Reveal>
        <Reveal delay={120}>
          <h1
            className="mt-8 font-display text-7xl font-bold tracking-cinematic md:text-9xl"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #8c6f2e 0%, #c8a04a 30%, #e8d4a0 50%, #c8a04a 70%, #8c6f2e 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            404
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <h2 className="mt-6 font-display text-2xl uppercase tracking-royal text-stone-100 md:text-3xl">
            {t('notFound.title')}
          </h2>
        </Reveal>
        <Reveal delay={300}>
          <p className="mx-auto mt-4 max-w-md font-serif italic text-stone-300">
            {t('notFound.subtitle')}
          </p>
        </Reveal>
        <Reveal delay={400}>
          <Link to="/" className="btn-gold mt-10">
            {t('notFound.cta')}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
