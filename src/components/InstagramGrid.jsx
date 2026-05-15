import Reveal from './Reveal.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

/**
 * InstagramGrid
 * --------------
 * A 6-tile editorial Instagram-style grid. No real image assets — each tile is
 * built from gradients + typography to read as a cinematic moment ("Black
 * Marble Suite", "After Hours", etc.). When the brand provides real photography,
 * this component's `tiles` array can be swapped for an image source.
 */

const TILES = [
  {
    key: 'marble',
    title: 'Black Marble Suite',
    location: 'Dubai',
    bg: 'radial-gradient(ellipse at 30% 20%, #2a2418, #0a0a0a 70%)',
    accent: '#c8a04a',
    aspect: 'aspect-square',
  },
  {
    key: 'after',
    title: 'After Hours',
    location: 'Toronto',
    bg: 'radial-gradient(ellipse at 70% 80%, #3a0e1c, #0a0a0a 70%)',
    accent: '#c89b8c',
    aspect: 'aspect-[4/5]',
  },
  {
    key: 'golden',
    title: 'Golden Hour Pour',
    location: 'Ho Chi Minh City',
    bg: 'radial-gradient(ellipse at 50% 30%, #4a3a1c, #0a0a0a 70%)',
    accent: '#e8d4a0',
    aspect: 'aspect-square',
  },
  {
    key: 'royal',
    title: 'The Royal Table',
    location: 'Vancouver',
    bg: 'radial-gradient(ellipse at 50% 50%, #5a1a2b, #0a0a0a 75%)',
    accent: '#c8a04a',
    aspect: 'aspect-[4/5]',
  },
  {
    key: 'rooftop',
    title: 'Rooftop Emerald',
    location: 'Abbotsford',
    bg: 'radial-gradient(ellipse at 40% 60%, #0f5132, #062b1a 75%)',
    accent: '#e8d4a0',
    aspect: 'aspect-square',
  },
  {
    key: 'launch',
    title: 'Launch Night',
    location: 'Dubai',
    bg: 'radial-gradient(ellipse at 60% 30%, #2a1714, #0a0a0a 75%)',
    accent: '#c89b8c',
    aspect: 'aspect-[4/5]',
  },
];

export default function InstagramGrid() {
  const { t } = useLanguage();
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
        {TILES.map((tile, idx) => (
          <Reveal key={tile.key} delay={idx * 80}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              className={`relative block ${tile.aspect} overflow-hidden border border-gold/15 group`}
              style={{ background: tile.bg }}
              aria-label={`${tile.title} — @pt3globalroyal`}
            >
              {/* accent glow */}
              <div
                className="absolute inset-0 opacity-60 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at 50% 40%, ${hex(tile.accent, 0.22)}, transparent 65%)`,
                }}
              />
              {/* frame */}
              <div className="pointer-events-none absolute inset-3 border border-gold/25" />

              {/* content */}
              <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
                <span
                  className="font-display text-5xl font-bold tracking-cinematic md:text-7xl"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, #8c6f2e 0%, #c8a04a 30%, #e8d4a0 50%, #c8a04a 70%, #8c6f2e 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  PT3
                </span>
                <p className="mt-3 font-serif italic text-stone-200 text-sm md:text-base">
                  {tile.title}
                </p>
                <p className="mt-1 font-display text-[0.55rem] uppercase tracking-cinematic text-stone-400">
                  {tile.location}
                </p>
              </div>

              {/* hover label */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-matte-black/90 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="font-display text-[0.6rem] uppercase tracking-cinematic text-gold">
                  @pt3globalroyal
                </span>
                <span className="font-display text-[0.6rem] uppercase tracking-cinematic text-gold">
                  ↗
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer noopener"
          className="btn-outline-gold"
        >
          {t('instagram.cta')}
        </a>
      </div>
    </div>
  );
}

function hex(h, a) {
  const c = h.replace('#', '');
  const n = parseInt(
    c.length === 3 ? c.split('').map((x) => x + x).join('') : c,
    16,
  );
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}
