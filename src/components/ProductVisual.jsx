import { useLanguage } from '../i18n/LanguageContext.jsx';

/**
 * ProductVisual
 * --------------
 * Renders product imagery. When `product.image` is provided, shows the real
 * photo on a themed luxury backdrop with a gold frame; otherwise falls back
 * to a luxe placeholder card with the product monogram + format chip.
 *
 * Sizes:
 *   - `size="card"`     — used in the product grid (portrait)
 *   - `size="hero"`     — used on the ProductDetail hero (taller, dramatic)
 *   - `size="thumb"`    — used in "related products" rails (square)
 */
export default function ProductVisual({ product, size = 'card' }) {
  const { t, lang } = useLanguage();
  const accent = product.theme?.accent || '#c8a04a';
  const monogram = (product.name?.[lang] || product.name?.en || 'P').trim().charAt(0);

  const backgroundGradient = themeBackground(product.theme?.name);

  const heights = {
    card: 'aspect-[4/5]',
    hero: 'aspect-[3/4] md:aspect-[4/5]',
    thumb: 'aspect-square',
  };

  const monogramSize = {
    card: 'text-[10rem] md:text-[12rem]',
    hero: 'text-[14rem] md:text-[20rem]',
    thumb: 'text-7xl',
  };

  const hasImage = Boolean(product.image);
  const showMeta = size !== 'thumb';

  return (
    <div
      className={`relative w-full ${heights[size]} overflow-hidden border border-gold/25 group`}
      style={{
        background: backgroundGradient,
        boxShadow: 'inset 0 0 120px rgba(0,0,0,0.55)',
      }}
      aria-label={t('common.productImage')}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-1000 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse at 50% 35%, ${hexToRgba(accent, 0.28)} 0%, transparent 60%)`,
        }}
      />

      {hasImage ? (
        <img
          src={product.image}
          alt={`${product.name?.[lang] || product.name?.en} — ${product.type?.[lang] || product.type?.en}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      ) : (
        <>
          <div
            className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.06), transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.04), transparent 60%)',
            }}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            {showMeta && (
              <p className="font-display text-[0.65rem] uppercase tracking-cinematic text-gold/80">
                PT3 · Royal
              </p>
            )}

            <span
              className={`font-display font-bold leading-none ${monogramSize[size]} select-none`}
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #8c6f2e 0%, #c8a04a 30%, #e8d4a0 50%, #c8a04a 70%, #8c6f2e 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
                textShadow: `0 6px 60px ${hexToRgba(accent, 0.35)}`,
              }}
            >
              {monogram}
            </span>

            {showMeta && (
              <div className="mt-4 space-y-1.5">
                <p className="font-serif italic text-stone-200 text-base md:text-lg">
                  {product.name?.[lang] || product.name?.en}
                </p>
                <p className="font-display text-[0.6rem] uppercase tracking-cinematic text-stone-400">
                  {product.type?.[lang] || product.type?.en}
                </p>
                <span className="mt-2 inline-block border border-gold/40 px-3 py-1 font-display text-[0.6rem] uppercase tracking-cinematic text-gold">
                  {product.format?.value} · {product.abv}
                </span>
              </div>
            )}
          </div>

          {size !== 'thumb' && (
            <p className="absolute bottom-3 left-4 font-display text-[0.55rem] uppercase tracking-cinematic text-stone-500/80">
              {t('common.placeholder')}
            </p>
          )}
        </>
      )}

      <div className="pointer-events-none absolute inset-4 border border-gold/40" />
      <div className="pointer-events-none absolute inset-6 border border-gold/15" />
    </div>
  );
}

function themeBackground(name) {
  switch (name) {
    case 'burgundy':
      return 'radial-gradient(ellipse at top, #5a1a2b 0%, #3a0e1c 55%, #0a0a0a 100%)';
    case 'champagne':
      return 'radial-gradient(ellipse at top, #2b2418 0%, #1a1611 55%, #0a0a0a 100%)';
    case 'rose-gold':
      return 'radial-gradient(ellipse at top, #4a2b27 0%, #2a1714 55%, #0a0a0a 100%)';
    case 'emerald':
    case 'emerald-can':
      return 'radial-gradient(ellipse at top, #0f5132 0%, #062b1a 55%, #0a0a0a 100%)';
    case 'matte-gold':
    default:
      return 'radial-gradient(ellipse at top, #1a1a1a 0%, #111111 55%, #000000 100%)';
  }
}

function hexToRgba(hex, alpha = 1) {
  const clean = hex.replace('#', '');
  const bigint = parseInt(
    clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean,
    16,
  );
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
