import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { PRODUCTS } from '../data/products.js';

/**
 * Footer
 * -------
 * Four-column layout: brand + newsletter, navigation, collection, houses.
 * Legal strip at the bottom.
 */
export default function Footer() {
  const { t, lang } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // Mock: in a real build, POST to an ESP. Here we just confirm.
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  const offices = t('locations.items');

  return (
    <footer className="relative mt-24 border-t border-gold/15 bg-matte-black">
      {/* Gold ribbon */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container-luxe grid gap-12 py-16 md:grid-cols-12 md:py-20">
        {/* Brand + newsletter (col-span 4) */}
        <div className="md:col-span-4">
          <Link to="/" className="inline-flex flex-col items-start" aria-label="PT3 Global Royal">
            <img
              src="/brand/logo-crest.png"
              alt="PT3 Global Royal"
              className="h-28 w-auto object-contain"
              loading="lazy"
            />
          </Link>

          <p className="mt-6 max-w-sm font-serif text-base italic text-stone-300">
            {t('footer.tagline')}
          </p>

          {/* Newsletter */}
          <form onSubmit={onSubmit} className="mt-8 max-w-sm">
            <label className="block font-display text-[0.6rem] uppercase tracking-cinematic text-gold">
              {t('common.newsletter')}
            </label>
            <div className="mt-3 flex border border-gold/40 focus-within:border-gold">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('common.newsletterPlaceholder')}
                className="flex-1 bg-transparent px-4 py-3 text-sm text-stone-200 placeholder:text-stone-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="border-l border-gold/40 bg-gold/10 px-5 font-display text-[0.65rem] uppercase tracking-cinematic text-gold transition-colors hover:bg-gold hover:text-matte-black"
              >
                {t('common.subscribe')}
              </button>
            </div>
            {subscribed && (
              <p className="mt-3 font-serif text-sm italic text-gold">
                ✦ {t('contact.sentSuccess')}
              </p>
            )}
          </form>

          {/* Social */}
          <div className="mt-8 flex gap-3">
            <SocialDot label="Instagram" href="https://instagram.com/pt3globalroyal" icon="ig" />
            <SocialDot label="WhatsApp" href="https://wa.me/17784446006" icon="wa" />
            <SocialDot label="Telegram" href="https://t.me/pt3globalroyal" icon="tg" />
            <SocialDot label="Facebook" href="https://facebook.com" icon="fb" />
            <SocialDot label="LinkedIn" href="https://linkedin.com" icon="in" />
            <SocialDot label="YouTube" href="https://youtube.com" icon="yt" />
          </div>
        </div>

        {/* Navigation (col-span 2) */}
        <div className="md:col-span-2">
          <FooterHeading>{t('footer.navigation')}</FooterHeading>
          <ul className="mt-5 space-y-3">
            <FooterLink to="/">{t('nav.home')}</FooterLink>
            <FooterLink to="/about">{t('nav.about')}</FooterLink>
            <FooterLink to="/products">{t('nav.products')}</FooterLink>
            <FooterLink to="/production">{t('nav.production')}</FooterLink>
            <FooterLink to="/gallery">{t('nav.gallery')}</FooterLink>
            <FooterLink to="/contact">{t('nav.contact')}</FooterLink>
          </ul>
        </div>

        {/* Collection (col-span 3) */}
        <div className="md:col-span-3">
          <FooterHeading>{t('footer.collection')}</FooterHeading>
          <ul className="mt-5 space-y-3">
            {PRODUCTS.map((p) => (
              <FooterLink key={p.slug} to={`/products/${p.slug}`}>
                {p.name?.[lang] || p.name?.en}
              </FooterLink>
            ))}
          </ul>
        </div>

        {/* Houses (col-span 3) */}
        <div className="md:col-span-3">
          <FooterHeading>{t('footer.offices')}</FooterHeading>
          <ul className="mt-5 space-y-3">
            {offices.map((o, idx) => (
              <li key={idx} className="flex items-baseline gap-3">
                <span className="font-display text-[0.55rem] uppercase tracking-cinematic text-gold/60">
                  0{idx + 1}
                </span>
                <span>
                  <span className="block font-serif text-base text-stone-200">{o.city}</span>
                  <span className="block font-display text-[0.6rem] uppercase tracking-cinematic text-stone-500">
                    {o.country}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Legal strip */}
      <div className="border-t border-gold/10">
        <div className="container-luxe flex flex-col gap-3 py-6 text-[0.65rem] uppercase tracking-cinematic text-stone-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} PT3 Global Royal. {t('footer.rights')}</p>
          <p className="italic normal-case tracking-normal text-stone-400">
            {t('footer.drinkResponsibly')}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }) {
  return (
    <h4 className="font-display text-[0.65rem] uppercase tracking-cinematic text-gold">
      {children}
    </h4>
  );
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link
        to={to}
        className="font-serif text-sm text-stone-300 transition-colors hover:text-gold"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialDot({ label, href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center border border-gold/30 text-gold/70 transition-all hover:border-gold hover:bg-gold/10 hover:text-gold"
    >
      <SocialIcon name={icon} />
    </a>
  );
}

function SocialIcon({ name }) {
  // Tiny inline glyphs — no external icon lib needed.
  if (name === 'ig')
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
      </svg>
    );
  if (name === 'fb')
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 9V7.5c0-.83.67-1.5 1.5-1.5H17V3h-2.5C12.57 3 11 4.57 11 6.5V9H8v3h3v9h3v-9h2.5l.5-3H14z" />
      </svg>
    );
  if (name === 'in')
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.07c.63-1.2 2.18-2.46 4.49-2.46 4.8 0 5.69 3.16 5.69 7.27V24h-5v-7.1c0-1.7-.03-3.9-2.38-3.9-2.39 0-2.76 1.86-2.76 3.78V24h-5V8z" />
      </svg>
    );
  if (name === 'yt')
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 6.2s-.22-1.55-.9-2.23c-.86-.91-1.83-.92-2.27-.97C16.6 2.75 12 2.75 12 2.75s-4.6 0-7.83.25c-.44.05-1.4.06-2.27.97C1.22 4.65 1 6.2 1 6.2S.78 8.02.78 9.84v1.32C.78 12.98 1 14.8 1 14.8s.22 1.55.9 2.23c.86.91 2 .88 2.5.98 1.8.17 7.6.22 7.6.22s4.6-.01 7.83-.26c.44-.05 1.4-.06 2.27-.97.68-.68.9-2.23.9-2.23s.22-1.82.22-3.64V9.84C23.22 8.02 23 6.2 23 6.2zM9.74 13.5V7.5l6.02 3-6.02 3z" />
      </svg>
    );
  if (name === 'wa')
    return (
      <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16 .9C7.7.9.9 7.7.9 16c0 2.8.8 5.5 2.2 7.9L.6 31.1l7.5-2.4c2.3 1.3 4.9 1.9 7.5 1.9h.4c8.3 0 15.1-6.8 15.1-15.1S24.3.9 16 .9zm0 27.4c-2.4 0-4.7-.7-6.7-1.9l-.5-.3-5 1.6 1.6-4.8-.3-.5C3.9 21 3.2 18.5 3.2 16 3.2 8.9 9 3.1 16 3.1S28.8 8.9 28.8 16 23 28.3 16 28.3zm6.9-9.5c-.4-.2-2.3-1.1-2.6-1.3-.4-.2-.6-.2-.9.2s-1 1.3-1.3 1.5c-.2.3-.5.3-.8.1-.4-.2-1.6-.6-3-1.8-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.7.2-.2.4-.5.5-.7.2-.3.3-.4.4-.7.1-.3 0-.5 0-.7s-.9-2.1-1.2-2.9c-.3-.7-.6-.6-.8-.6s-.5 0-.7 0-.7.1-1.1.5c-.4.4-1.4 1.4-1.4 3.3s1.4 3.8 1.6 4.1c.2.3 2.7 4.2 6.6 5.9.9.4 1.6.6 2.2.8.9.3 1.7.2 2.4.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5z"/>
      </svg>
    );
  if (name === 'tg')
    return (
      <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16 0a16 16 0 1 0 0 32 16 16 0 0 0 0-32zm7.4 10.9-2.5 11.9c-.2.8-.7 1-1.4.6l-3.9-2.9-1.9 1.8c-.2.2-.4.4-.8.4l.3-4 7.3-6.6c.3-.3-.1-.4-.5-.2L9.9 17l-3.9-1.2c-.8-.3-.9-.8.2-1.2L22.6 9.8c.7-.3 1.3.2 1.1 1.1z"/>
      </svg>
    );
  return null;
}
