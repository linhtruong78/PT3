import { useMemo, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { PRODUCTS } from '../data/products.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ProductCard from '../components/ProductCard.jsx';

/**
 * Products listing
 * -----------------
 * Hero, filter chips (all / wines / spirits / beer), responsive grid.
 */
export default function Products() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(() => {
    if (filter === 'all') return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === filter);
  }, [filter]);

  const filters = [
    { value: 'all', label: t('products.filterAll') },
    { value: 'wine', label: t('products.filterWine') },
    { value: 'spirit', label: t('products.filterSpirit') },
    { value: 'beer', label: t('products.filterBeer') },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[60svh] items-center pt-32 md:pt-40">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 50% 20%, rgba(200,160,74,0.16) 0%, transparent 55%), #0a0a0a',
            }}
          />
        </div>
        <div className="container-luxe">
          <SectionHeading
            eyebrow={t('products.eyebrow')}
            heading={t('products.title')}
            subtitle={t('products.subtitle')}
          />
        </div>
      </section>

      {/* FILTER */}
      <section className="pt-8">
        <div className="container-luxe">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`border px-5 py-2 font-display text-[0.65rem] uppercase tracking-cinematic transition-all ${
                    filter === f.value
                      ? 'border-gold bg-gold text-matte-black'
                      : 'border-gold/30 text-stone-300 hover:border-gold hover:text-gold'
                  }`}
                  aria-pressed={filter === f.value}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* GRID */}
      <section className="py-16 md:py-24">
        <div className="container-luxe">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product, idx) => (
              <Reveal key={product.slug} delay={idx * 70}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center font-serif italic text-stone-400">
              — no products in this category yet —
            </p>
          )}
        </div>
      </section>
    </>
  );
}
