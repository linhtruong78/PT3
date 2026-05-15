import Reveal from './Reveal.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

/**
 * LocationsBlock
 * ---------------
 * 5 cities laid out as a grid with gold ordinal numbers, served beside an
 * abstract "constellation" map (pure SVG, no image asset required).
 */
export default function LocationsBlock() {
  const { t } = useLanguage();
  const cities = t('locations.items');

  return (
    <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
      {/* Cities */}
      <ol className="space-y-6">
        {cities.map((city, idx) => (
          <Reveal key={`${city.city}-${idx}`} delay={idx * 60}>
            <li className="group flex items-baseline gap-6 border-b border-gold/15 pb-5">
              <span
                className="font-display text-2xl font-bold tracking-cinematic text-gold/40 transition-colors group-hover:text-gold"
                style={{ minWidth: '3rem' }}
              >
                0{idx + 1}
              </span>
              <span>
                <span className="block font-display text-2xl uppercase tracking-royal text-stone-100 transition-colors group-hover:text-gold md:text-3xl">
                  {city.city}
                </span>
                <span className="mt-1 block font-display text-[0.65rem] uppercase tracking-cinematic text-stone-500">
                  {city.country}
                </span>
              </span>
            </li>
          </Reveal>
        ))}
      </ol>

      {/* Constellation map */}
      <Reveal delay={150}>
        <div className="relative aspect-square w-full border border-gold/20 bg-marble-black p-6">
          <ConstellationMap cities={cities} />
          <div className="pointer-events-none absolute inset-4 border border-gold/10" />
        </div>
      </Reveal>
    </div>
  );
}

function ConstellationMap({ cities }) {
  // Approximate, abstract positions (NOT geographically accurate — visual only).
  // Indexes match the order in translations.locations.items.
  const COORDS = [
    { x: 18, y: 30 }, // Vancouver
    { x: 30, y: 28 }, // Toronto
    { x: 16, y: 33 }, // Abbotsford
    { x: 60, y: 48 }, // Dubai
    { x: 78, y: 60 }, // Ho Chi Minh
  ];
  const points = COORDS.map((c, i) => ({
    ...c,
    label: cities[i]?.city || '',
  }));
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="city-dot" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e8d4a0" stopOpacity="1" />
          <stop offset="60%" stopColor="#c8a04a" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#c8a04a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* connecting lines */}
      {points.map((p, i) =>
        points
          .slice(i + 1)
          .map((q, j) => (
            <line
              key={`l-${i}-${j}`}
              x1={p.x}
              y1={p.y}
              x2={q.x}
              y2={q.y}
              stroke="#c8a04a"
              strokeOpacity="0.18"
              strokeWidth="0.25"
            />
          )),
      )}

      {/* points */}
      {points.map((p, i) => (
        <g key={`p-${i}`}>
          <circle cx={p.x} cy={p.y} r="3.5" fill="url(#city-dot)" />
          <circle cx={p.x} cy={p.y} r="0.9" fill="#e8d4a0" />
          <text
            x={p.x + 5}
            y={p.y + 1.5}
            fill="#c8a04a"
            fontFamily="Cinzel, serif"
            fontSize="2.4"
            letterSpacing="0.3"
          >
            {p.label.toUpperCase()}
          </text>
        </g>
      ))}

      {/* compass crosshair */}
      <g stroke="#c8a04a" strokeOpacity="0.25" strokeWidth="0.2">
        <line x1="50" y1="6" x2="50" y2="94" />
        <line x1="6" y1="50" x2="94" y2="50" />
        <circle cx="50" cy="50" r="32" fill="none" />
        <circle cx="50" cy="50" r="44" fill="none" strokeOpacity="0.12" />
      </g>
    </svg>
  );
}
