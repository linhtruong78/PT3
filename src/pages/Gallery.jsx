import { useState } from 'react';
import { withBase } from '../utils/asset.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { PRODUCTS } from '../data/products.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

/**
 * Gallery — masonry-style grid of brand visuals.
 * Click any tile to open a fullscreen lightbox.
 */
export default function Gallery() {
  const { t, lang } = useLanguage();
  const [active, setActive] = useState(null); // index of currently open image

  // Build the gallery from real brand assets + product posters
  const items = [
    { src: '/brand/collection-hero.jpeg', caption: 'The Collection', tall: true },
    { src: '/brand/ambassador.jpeg', caption: 'Brand Ambassador', tall: true },
    ...PRODUCTS.filter((p) => p.image).map((p) => ({
      src: p.image,
      caption: p.name?.[lang] || p.name?.en,
      tall: false,
    })),
    { src: '/brand/marble-novara.jpeg', caption: 'PT3 Novara', tall: false },
    { src: '/brand/logo-crest.png', caption: 'The PT3 Crest', tall: false },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[45svh] items-center pt-32 md:pt-40">
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
          <SectionHeading
            eyebrow={t('gallery.eyebrow')}
            heading={t('gallery.title')}
            subtitle={t('gallery.subtitle')}
          />
        </div>
      </section>

      {/* GRID */}
      <section className="py-16 md:py-24">
        <div className="container-luxe">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {items.map((it, i) => (
              <Reveal key={`${it.src}-${i}`} delay={(i % 6) * 70}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="group relative block w-full overflow-hidden border border-gold/20 transition-all hover:border-gold/60 hover:shadow-gold-soft"
                >
                  <img
                    src={withBase(it.src)}
                    alt={it.caption}
                    loading="lazy"
                    className="block h-auto w-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-matte-black/80 via-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="m-4 font-display text-[0.65rem] uppercase tracking-cinematic text-gold">
                      {it.caption}
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[active].caption}
          className="fixed inset-0 z-50 flex items-center justify-center bg-matte-black/95 p-6 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setActive(null); }}
            aria-label="Close"
            className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-matte-black"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          {/* prev/next */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setActive((i) => (i - 1 + items.length) % items.length); }}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-matte-black md:left-8"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 2L4 8l6 6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setActive((i) => (i + 1) % items.length); }}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-matte-black md:right-8"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>

          <figure onClick={(e) => e.stopPropagation()} className="relative max-h-[90vh] max-w-[90vw]">
            <img
              src={withBase(items[active].src)}
              alt={items[active].caption}
              className="block max-h-[88vh] max-w-[90vw] border border-gold/30 object-contain shadow-cinematic"
            />
            <figcaption className="mt-3 text-center font-display text-[0.65rem] uppercase tracking-cinematic text-gold">
              {items[active].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
