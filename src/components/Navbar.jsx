import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';

/**
 * Navbar
 * -------
 * - Crest on the LEFT (links the user back home)
 * - Six nav links on the right, plus language switcher
 * - Mobile: hamburger opens a fullscreen drawer
 */
export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/products', label: t('nav.products') },
    { to: '/production', label: t('nav.production') },
    { to: '/gallery', label: t('nav.gallery') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled || open
          ? 'border-b border-gold/15 bg-matte-black/90 backdrop-blur-xl'
          : 'border-b border-transparent bg-gradient-to-b from-matte-black/80 to-transparent'
      }`}
    >
      <nav className="container-luxe flex items-center justify-between py-4 md:py-5">
        {/* Brand crest (left) */}
        <Link to="/" className="flex shrink-0 items-center" aria-label="PT3 Global Royal">
          <img
            src="/brand/logo-crest.png"
            alt="PT3 Global Royal"
            className="h-16 w-auto object-contain sm:h-20 md:h-24 lg:h-28"
            loading="eager"
          />
        </Link>

        {/* Desktop nav (right) */}
        <ul className="hidden items-center gap-7 lg:flex xl:gap-10">
          {links.map((l) => (<NavBarLink key={l.to} {...l} />))}
        </ul>

        {/* Language switch + mobile hamburger (right) */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            className="flex items-center gap-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t('common.close') : t('common.menu')}
            aria-expanded={open}
          >
            <span className="relative block h-5 w-6">
              <span className={`absolute left-0 right-0 top-1 h-px bg-gold transition-all ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gold transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 right-0 bottom-1 h-px bg-gold transition-all ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ease-out ${open ? 'max-h-[90vh]' : 'max-h-0'}`}
        aria-hidden={!open}
      >
        <div className="container-luxe pb-8 pt-2">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `block border-b border-gold/10 py-4 font-display text-lg uppercase tracking-royal transition-colors ${
                      isActive ? 'text-gold' : 'text-stone-200 hover:text-gold'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <p className="mb-3 font-display text-[0.6rem] uppercase tracking-cinematic text-stone-500">
              Language
            </p>
            <LanguageSwitcher variant="inline" />
          </div>
        </div>
      </div>
    </header>
  );
}

function NavBarLink({ to, label }) {
  return (
    <li>
      <NavLink
        to={to}
        end={to === '/'}
        className={({ isActive }) =>
          `relative font-display text-[0.7rem] uppercase tracking-cinematic transition-colors duration-300 hover:text-gold ${
            isActive ? 'text-gold' : 'text-stone-200'
          }`
        }
      >
        {({ isActive }) => (
          <>
            {label}
            <span
              className={`absolute -bottom-2 left-1/2 h-px -translate-x-1/2 bg-gold transition-all duration-500 ${
                isActive ? 'w-full' : 'w-0'
              }`}
            />
          </>
        )}
      </NavLink>
    </li>
  );
}
