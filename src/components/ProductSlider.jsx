import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ProductCard from './ProductCard.jsx';

/**
 * ProductSlider
 * --------------
 * Horizontal scroll-snap carousel. Active slide is derived from the track's
 * scroll position (the slide whose offsetLeft is closest to scrollLeft),
 * which is reliable even when multiple cards are visible at once.
 *
 * Responsive:
 *   - base 1, sm 2, lg 3, xl 4 visible cards
 *
 * Autoplay loops; pauses on hover/focus.
 */
export default function ProductSlider({ products = [], autoplay = true, intervalMs = 6500 }) {
  const trackRef = useRef(null);
  const slidesRef = useRef([]);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  /* ---------------- scroll-position based active detection ---------------- */
  const recomputeActive = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const x = track.scrollLeft;
    let bestIdx = 0;
    let bestDist = Infinity;
    for (let i = 0; i < slidesRef.current.length; i++) {
      const el = slidesRef.current[i];
      if (!el) continue;
      const d = Math.abs(el.offsetLeft - x);
      if (d < bestDist) { bestDist = d; bestIdx = i; }
    }
    setActive((prev) => (prev === bestIdx ? prev : bestIdx));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // Initial measure (after slides mount)
    recomputeActive();
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { raf = null; recomputeActive(); });
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', recomputeActive);
    return () => {
      track.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', recomputeActive);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [recomputeActive, products.length]);

  /* ---------------- programmatic scroll helpers ---------------- */
  const scrollToIndex = useCallback((i) => {
    const track = trackRef.current;
    const el = slidesRef.current[i];
    if (!track || !el) return;
    track.scrollTo({ left: el.offsetLeft, behavior: 'smooth' });
  }, []);

  const prev = useCallback(() => {
    setActive((cur) => {
      const next = Math.max(0, cur - 1);
      scrollToIndex(next);
      return next;
    });
  }, [scrollToIndex]);

  const next = useCallback(() => {
    setActive((cur) => {
      const nextIdx = Math.min(products.length - 1, cur + 1);
      scrollToIndex(nextIdx);
      return nextIdx;
    });
  }, [scrollToIndex, products.length]);

  /* ---------------- autoplay ---------------- */
  useEffect(() => {
    if (!autoplay || paused || products.length <= 1) return;
    const id = setInterval(() => {
      setActive((cur) => {
        const n = (cur + 1) % products.length;
        scrollToIndex(n);
        return n;
      });
    }, intervalMs);
    return () => clearInterval(id);
  }, [autoplay, paused, products.length, intervalMs, scrollToIndex]);

  const dots = useMemo(() => products.map((_, i) => i), [products.length]);
  const atStart = active === 0;
  const atEnd = active === products.length - 1;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Left arrow */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden items-center md:flex">
        <button
          type="button"
          onClick={prev}
          disabled={atStart}
          aria-label="Previous product"
          className="pointer-events-auto -ml-4 flex h-12 w-12 items-center justify-center border border-gold/40 bg-matte-black/80 text-gold backdrop-blur transition-all hover:border-gold hover:bg-gold hover:text-matte-black disabled:cursor-not-allowed disabled:opacity-25"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 2L4 8l6 6" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {/* Right arrow */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden items-center md:flex">
        <button
          type="button"
          onClick={next}
          disabled={atEnd}
          aria-label="Next product"
          className="pointer-events-auto -mr-4 flex h-12 w-12 items-center justify-center border border-gold/40 bg-matte-black/80 text-gold backdrop-blur transition-all hover:border-gold hover:bg-gold hover:text-matte-black disabled:cursor-not-allowed disabled:opacity-25"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 py-2"
        style={{ scrollbarWidth: 'none' }}
      >
        {products.map((p, i) => (
          <div
            key={p.slug}
            ref={(el) => (slidesRef.current[i] = el)}
            className="snap-start shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      {/* Mobile prev/next under the track (since the side arrows are hidden on small screens) */}
      <div className="mt-6 flex items-center justify-center gap-4 md:hidden">
        <button
          type="button"
          onClick={prev}
          disabled={atStart}
          aria-label="Previous product"
          className="flex h-10 w-10 items-center justify-center border border-gold/40 text-gold transition-all disabled:opacity-25"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 2L4 8l6 6" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          disabled={atEnd}
          aria-label="Next product"
          className="flex h-10 w-10 items-center justify-center border border-gold/40 text-gold transition-all disabled:opacity-25"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="mt-6 flex items-center justify-center gap-2 md:mt-8">
        {dots.map((i) => (
          <button
            key={i}
            type="button"
            onClick={() => { setActive(i); scrollToIndex(i); }}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === active}
            className={`h-1.5 transition-all ${
              i === active ? 'w-10 bg-gold' : 'w-4 bg-gold/30 hover:bg-gold/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
