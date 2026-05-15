import { useEffect, useRef, useState } from 'react';
import { useLanguage, SUPPORTED_LANGUAGES } from '../i18n/LanguageContext.jsx';

/**
 * LanguageSwitcher
 * -----------------
 * Compact gold-bordered dropdown. Pure click/keyboard, no external deps.
 *
 * Variants:
 *   - `variant="navbar"` (default) — used in the top navigation
 *   - `variant="inline"` — block-level, used inside the mobile drawer
 */
export default function LanguageSwitcher({ variant = 'navbar' }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Close on outside click / Escape
  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const current = SUPPORTED_LANGUAGES.find((l) => l.code === lang) || SUPPORTED_LANGUAGES[0];

  if (variant === 'inline') {
    return (
      <div className="flex flex-wrap gap-2">
        {SUPPORTED_LANGUAGES.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`border px-3 py-1.5 font-display text-[0.65rem] uppercase tracking-cinematic transition-colors ${
              l.code === lang
                ? 'border-gold bg-gold text-matte-black'
                : 'border-gold/30 text-stone-300 hover:border-gold/70'
            }`}
            aria-pressed={l.code === lang}
          >
            {l.short} · {l.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={wrapperRef} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 border border-gold/40 px-3 py-2 font-display text-[0.65rem] uppercase tracking-cinematic text-gold transition-colors hover:border-gold hover:bg-gold/10"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="hidden sm:inline">{current.label}</span>
        <span className="sm:hidden">{current.short}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      {open && (
        <ul
          className="absolute right-0 z-50 mt-2 min-w-[160px] border border-gold/40 bg-matte-900/95 py-1 shadow-cinematic backdrop-blur"
          role="listbox"
        >
          {SUPPORTED_LANGUAGES.map((l) => (
            <li key={l.code} role="option" aria-selected={l.code === lang}>
              <button
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-4 py-2 text-left font-display text-[0.7rem] uppercase tracking-royal transition-colors ${
                  l.code === lang
                    ? 'bg-gold/10 text-gold'
                    : 'text-stone-300 hover:bg-gold/5 hover:text-gold'
                }`}
              >
                <span>{l.label}</span>
                <span className="text-stone-500">{l.short}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
