import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import ProductVisual from './ProductVisual.jsx';

/**
 * ProductCard
 * ------------
 * Square-ish card with themed visual on top, brand metadata under it.
 * Used on the home featured grid + the products listing grid.
 */
export default function ProductCard({ product }) {
  const { t, lang } = useLanguage();

  return (
    <Link
      to={`/products/${product.slug}`}
      className="card-luxe group flex flex-col"
    >
      <div className="relative overflow-hidden">
        <ProductVisual product={product} size="card" />
        {/* Hover overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-matte-black/85 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          <span className="mb-6 inline-flex items-center gap-3 border border-gold/60 bg-matte-black/60 px-5 py-2 font-display text-[0.65rem] uppercase tracking-cinematic text-gold backdrop-blur-sm">
            {t('common.viewProduct')}
            <span className="block h-px w-6 bg-gold" />
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="font-display text-[0.6rem] uppercase tracking-cinematic text-gold/80">
          {categoryLabel(product.category, t)}
        </p>
        <h3 className="font-display text-lg uppercase tracking-royal text-stone-100">
          {product.name?.[lang] || product.name?.en}
        </h3>
        <p className="font-serif italic text-stone-400">
          {product.tagline?.[lang] || product.tagline?.en}
        </p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-display text-[0.6rem] uppercase tracking-cinematic text-stone-500">
            {product.format.value} · {product.abv}
          </span>
          <span className="font-display text-[0.6rem] uppercase tracking-cinematic text-gold transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

function categoryLabel(category, t) {
  switch (category) {
    case 'wine':
      return t('products.filterWine');
    case 'spirit':
      return t('products.filterSpirit');
    case 'beer':
      return t('products.filterBeer');
    default:
      return '';
  }
}
