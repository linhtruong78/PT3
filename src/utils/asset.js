/**
 * withBase(path)
 * ---------------
 * Prefix a public-folder asset path with the configured Vite `base`.
 *
 *   - Local dev          : base = "/"            -> "/brand/logo-crest.png"
 *   - GitHub Pages       : base = "/PT3/"         -> "/PT3/brand/logo-crest.png"
 *   - Vercel/Netlify     : base = "/"            -> "/brand/logo-crest.png"
 *
 * Vite rewrites the paths inside CSS/JS imports automatically, but raw
 * <img src="/..."> strings pass through verbatim — so we need this helper
 * everywhere we hard-code a /public path.
 */
export function withBase(path) {
  if (!path) return path;
  // Already absolute external URL? leave it alone.
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) return path;
  const base = import.meta.env.BASE_URL || '/';
  // strip any leading slash from the path so concatenation doesn't double up
  const clean = path.replace(/^\/+/, '');
  return base.endsWith('/') ? base + clean : base + '/' + clean;
}
