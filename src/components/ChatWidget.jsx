import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { BRAND, OFFICES } from '../data/offices.js';

/**
 * ChatWidget
 * -----------
 * Floating bottom-right pill that expands on click into a list of contact
 * channels: WhatsApp, Telegram, Email. All channels open in a new tab.
 * The WhatsApp / Telegram targets pull from BRAND fallbacks below; replace
 * with real numbers/handles once the brand confirms them.
 */
export default function ChatWidget() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Phone number for WhatsApp (Vancouver head office, digits only)
  const waNumber = (OFFICES[0]?.phones?.[0] || '+17784446006').replace(/[^\d+]/g, '').replace('+', '');
  const waUrl = `https://wa.me/${waNumber}`;
  const tgUrl = `https://t.me/${(BRAND.instagram || '@pt3globalroyal').replace('@', '')}`;
  const mailUrl = `mailto:${BRAND.email}`;

  // Close on outside click / Esc
  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      {/* Channel buttons (slide up on open) */}
      <div
        className={`flex flex-col items-end gap-2 transition-all duration-300 ${
          open ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <ChannelButton href={waUrl} label={t('chat.whatsapp')} color="#25d366">
          <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
            <path d="M16 .9C7.7.9.9 7.7.9 16c0 2.8.8 5.5 2.2 7.9L.6 31.1l7.5-2.4c2.3 1.3 4.9 1.9 7.5 1.9h.4c8.3 0 15.1-6.8 15.1-15.1S24.3.9 16 .9zm0 27.4c-2.4 0-4.7-.7-6.7-1.9l-.5-.3-5 1.6 1.6-4.8-.3-.5C3.9 21 3.2 18.5 3.2 16 3.2 8.9 9 3.1 16 3.1S28.8 8.9 28.8 16 23 28.3 16 28.3zm6.9-9.5c-.4-.2-2.3-1.1-2.6-1.3-.4-.2-.6-.2-.9.2s-1 1.3-1.3 1.5c-.2.3-.5.3-.8.1-.4-.2-1.6-.6-3-1.8-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.7.2-.2.4-.5.5-.7.2-.3.3-.4.4-.7.1-.3 0-.5 0-.7s-.9-2.1-1.2-2.9c-.3-.7-.6-.6-.8-.6s-.5 0-.7 0-.7.1-1.1.5c-.4.4-1.4 1.4-1.4 3.3s1.4 3.8 1.6 4.1c.2.3 2.7 4.2 6.6 5.9.9.4 1.6.6 2.2.8.9.3 1.7.2 2.4.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5z"/>
          </svg>
        </ChannelButton>
        <ChannelButton href={tgUrl} label={t('chat.telegram')} color="#229ed9">
          <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
            <path d="M16 0a16 16 0 1 0 0 32 16 16 0 0 0 0-32zm7.4 10.9-2.5 11.9c-.2.8-.7 1-1.4.6l-3.9-2.9-1.9 1.8c-.2.2-.4.4-.8.4l.3-4 7.3-6.6c.3-.3-.1-.4-.5-.2L9.9 17l-3.9-1.2c-.8-.3-.9-.8.2-1.2L22.6 9.8c.7-.3 1.3.2 1.1 1.1z"/>
          </svg>
        </ChannelButton>
        <ChannelButton href={mailUrl} label={t('chat.email')} color="#c8a04a">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="1.5" />
            <path d="M3 7l9 6 9-6" />
          </svg>
        </ChannelButton>
      </div>

      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t('chat.toggle')}
        aria-expanded={open}
        className="flex h-14 w-14 items-center justify-center border border-gold/60 bg-matte-black/90 text-gold shadow-gold-glow backdrop-blur transition-all hover:bg-gold hover:text-matte-black"
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.8" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M21 11.5a8.5 8.5 0 0 1-13 7.3L3 21l1.2-5A8.5 8.5 0 1 1 21 11.5z" />
          </svg>
        )}
      </button>
    </div>
  );
}

function ChannelButton({ href, label, color, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="group flex items-center gap-3 border border-gold/40 bg-matte-black/90 px-4 py-3 backdrop-blur transition-all hover:border-gold hover:bg-gold/10"
    >
      <span className="font-display text-[0.6rem] uppercase tracking-cinematic text-stone-200 group-hover:text-gold">
        {label}
      </span>
      <span
        className="flex h-8 w-8 items-center justify-center rounded-full"
        style={{ background: color, color: '#0a0a0a' }}
      >
        {children}
      </span>
    </a>
  );
}
