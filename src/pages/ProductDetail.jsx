import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { getProductBySlug, getRelatedProducts } from '../data/products.js';
import Reveal from '../components/Reveal.jsx';
import ProductVisual from '../components/ProductVisual.jsx';
import NotFound from './NotFound.jsx';

/**
 * ProductDetail
 * --------------
 * Per-product themed page: large visual on the left, editorial copy on the
 * right. Tasting notes, brand identity bullets, mood, format chip, then a
 * "related products" rail.
 */
export default function ProductDetail() {
  const { slug } = useParams();
  const { t, lang } = useLanguage();
  const product = getProductBySlug(slug);

  if (!product) return <NotFound />;

  const related = getRelatedProducts(product, 3);
  const accent = product.theme?.accent || '#c8a04a';

  return (
    <>
      {/* HERO — themed per-product */}
      <section className="relative isolate overflow-hidden pt-28 md:pt-32">
        {/* Themed wash */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{ background: heroBackground(product.theme?.name) }}
          />
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background: `radial-gradient(ellipse at 50% 0%, ${hex(accent, 0.25)}, transparent 60%)`,
            }}
          />
        </div>

        <div className="container-luxe">
          <Reveal>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 font-display text-[0.65rem] uppercase tracking-cinematic text-gold/80 transition-colors hover:text-gold"
            >
              ← {t('products.detail.backLink')}
            </Link>
          </Reveal>

          <div className="mt-10 grid items-center gap-12 md:mt-14 md:grid-cols-2 md:gap-16">
            {/* Visual */}
            <Reveal>
              <ProductVisual product={product} size="hero" />
            </Reveal>

            {/* Copy */}
            <Reveal delay={120}>
              <div>
                <p className="eyebrow">
                  {product.type?.[lang] || product.type?.en}
                </p>
                <h1 className="mt-4 font-display text-4xl uppercase leading-tight tracking-royal text-stone-50 md:text-6xl">
                  {product.name?.[lang] || product.name?.en}
                </h1>
                <span className="mt-6 block h-px w-24 bg-gold" />
                <p className="mt-6 font-serif text-xl italic text-stone-200 md:text-2xl">
                  {product.tagline?.[lang] || product.tagline?.en}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Chip label={product.format.value} />
                  <Chip label={`ABV · ${product.abv}`} />
                  <Chip label={categoryChip(product.category, t)} />
                  <Chip label={`SKU · ${product.sku}`} subtle />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-20 md:py-24">
        <div className="container-luxe grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Tasting notes */}
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow">{t('products.detail.description')}</p>
              <h2 className="mt-4 font-display text-2xl uppercase tracking-royal text-stone-100 md:text-3xl">
                {product.tagline?.[lang] || product.tagline?.en}
              </h2>
              <span className="mt-6 block h-px w-16 bg-gold" />
              <p className="mt-8 font-serif text-lg leading-relaxed text-stone-300">
                {product.description?.[lang] || product.description?.en}
              </p>
            </Reveal>
          </div>

          {/* Brand identity bullets */}
          <div className="md:col-span-5">
            <Reveal delay={120}>
              <div className="border border-gold/25 bg-matte-900/60 p-8">
                <p className="eyebrow">{t('products.detail.heritage')}</p>
                <h3 className="mt-3 font-display text-xl uppercase tracking-royal text-stone-100">
                  {product.name?.[lang] || product.name?.en}
                </h3>
                <ul className="mt-6 space-y-3">
                  {(product.identity?.[lang] || product.identity?.en || []).map((line, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ background: accent, boxShadow: `0 0 8px ${accent}` }}
                      />
                      <span className="font-serif text-base text-stone-200">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MOOD */}
      <section className="border-y border-gold/15 bg-matte-900/40 py-20">
        <div className="container-luxe">
          <Reveal>
            <p className="eyebrow text-center">{t('products.detail.mood')}</p>
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {(product.mood?.[lang] || product.mood?.en || []).map((m, i, arr) => (
                <li
                  key={i}
                  className="flex items-center gap-8 font-display text-lg uppercase tracking-royal text-stone-200 md:text-2xl"
                >
                  <span>{m}</span>
                  {i < arr.length - 1 && (
                    <span className="text-gold/50">·</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="py-24">
          <div className="container-luxe">
            <Reveal>
              <p className="eyebrow text-center">{t('products.detail.related')}</p>
              <h3 className="mt-4 text-center font-display text-2xl uppercase tracking-royal text-stone-100 md:text-3xl">
                {t('products.title')}
              </h3>
              <span className="mx-auto mt-6 block h-px w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, idx) => (
                <Reveal key={p.slug} delay={idx * 80}>
                  <Link
                    to={`/products/${p.slug}`}
                    className="card-luxe group flex flex-col"
                  >
                    <ProductVisual product={p} size="card" />
                    <div className="p-5">
                      <h4 className="font-display text-base uppercase tracking-royal text-stone-100">
                        {p.name?.[lang] || p.name?.en}
                      </h4>
                      <p className="mt-2 font-serif italic text-stone-400">
                        {p.tagline?.[lang] || p.tagline?.en}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

/* ---------- helpers ---------- */

function Chip({ label, subtle }) {
  return (
    <span
      className={`border px-3 py-1.5 font-display text-[0.6rem] uppercase tracking-cinematic ${
        subtle ? 'border-gold/20 text-stone-400' : 'border-gold/50 text-gold'
      }`}
    >
      {label}
    </span>
  );
}

function categoryChip(category, t) {
  if (category === 'wine') return t('products.filterWine');
  if (category === 'spirit') return t('products.filterSpirit');
  if (category === 'beer') return t('products.filterBeer');
  return '';
}

function heroBackground(themeName) {
  switch (themeName) {
    case 'burgundy':
      return 'linear-gradient(180deg, #3a0e1c 0%, #1a0810 60%, #0a0a0a 100%)';
    case 'champagne':
      return 'linear-gradient(180deg, #1f1a12 0%, #141008 60%, #0a0a0a 100%)';
    case 'rose-gold':
      return 'linear-gradient(180deg, #2c1a17 0%, #160d0b 60%, #0a0a0a 100%)';
    case 'emerald':
    case 'emerald-can':
      return 'linear-gradient(180deg, #062b1a 0%, #03150d 60%, #0a0a0a 100%)';
    case 'matte-gold':
    default:
      return 'linear-gradient(180deg, #1a1a1a 0%, #111111 60%, #0a0a0a 100%)';
  }
}

function hex(h, a) {
  const c = h.replace('#', '');
  const n = parseInt(
    c.length === 3 ? c.split('').map((x) => x + x).join('') : c,
    16,
  );
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}
