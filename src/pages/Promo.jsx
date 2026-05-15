import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';

/**
 * Promo — vertical 9:16 cinematic brand reel (real MP4).
 *
 * Plays /promo/reel.mp4 (1080×1920, 30s, H.264) — ready for screen-record or
 * direct upload to Instagram Reels, TikTok, YouTube Shorts.
 */
export default function Promo() {
  const { t } = useLanguage();
  const videoRef = useRef(null);
  const [helpOpen, setHelpOpen] = useState(false);
  const [muted, setMuted] = useState(true);

  // Hide navbar + footer + chat widget while this route is active.
  useEffect(() => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
    return () => {
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
    };
  }, []);

  // Try to autoplay (muted) on mount
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4">
      {/* 9:16 frame */}
      <div className="relative aspect-[9/16] w-full max-h-[100svh] max-w-[480px] overflow-hidden border border-gold/30 bg-matte-black shadow-cinematic">
        <video
          ref={videoRef}
          src="/promo/reel.mp4"
          poster="/promo/reel-poster.jpg"
          autoPlay
          muted={muted}
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Mute/unmute pill */}
        <button
          type="button"
          onClick={() => {
            const v = videoRef.current;
            if (!v) return;
            const next = !muted;
            v.muted = next;
            setMuted(next);
            if (!next) v.play().catch(() => {});
          }}
          aria-label={muted ? 'Unmute' : 'Mute'}
          className="absolute bottom-4 left-4 z-20 flex h-10 w-10 items-center justify-center border border-gold/40 bg-matte-black/70 text-gold backdrop-blur transition-all hover:bg-gold hover:text-matte-black"
        >
          {muted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 10v4h4l5 4V6L7 10H3z" />
              <path d="M16 8l5 8M21 8l-5 8" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 10v4h4l5 4V6L7 10H3z" />
              <path d="M16 9c1.2 1 1.2 5 0 6M19 6c2.5 2 2.5 10 0 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Side panel — only on wider screens */}
      <aside className="ml-8 hidden w-72 flex-col gap-4 lg:flex">
        <p className="eyebrow">PT3 · Promo Reel</p>
        <h1 className="font-display text-3xl uppercase tracking-royal text-stone-100">
          Royal Persian Spirits
        </h1>
        <p className="font-serif text-sm italic text-stone-400">
          30-second vertical reel. 1080 × 1920. H.264 MP4. Ready for IG Reels, TikTok and YouTube Shorts.
        </p>

        <a
          href="/promo/reel.mp4"
          download="PT3_promo_reel_9x16.mp4"
          className="btn-gold mt-4 inline-flex items-center justify-center gap-2"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M8 2v9M4 7l4 4 4-4M2 14h12" />
          </svg>
          Download MP4
        </a>

        <button
          type="button"
          onClick={() => setHelpOpen(true)}
          className="btn-outline-gold mt-2"
        >
          How to upload
        </button>
      </aside>

      {/* Mobile-only download button */}
      <a
        href="/promo/reel.mp4"
        download="PT3_promo_reel_9x16.mp4"
        className="fixed bottom-6 right-6 z-30 flex h-12 w-12 items-center justify-center border border-gold/40 bg-matte-black/90 text-gold backdrop-blur transition-all hover:bg-gold hover:text-matte-black lg:hidden"
        aria-label="Download reel"
      >
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M8 2v9M4 7l4 4 4-4M2 14h12" />
        </svg>
      </a>

      {/* Help dialog */}
      {helpOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setHelpOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-matte-black/90 p-6 backdrop-blur"
        >
          <div
            className="max-w-md border border-gold/30 bg-matte-900 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="eyebrow">Upload to social</p>
            <h3 className="mt-3 font-display text-xl uppercase tracking-royal text-stone-100">
              Where to share
            </h3>
            <ul className="mt-5 space-y-3 font-serif text-stone-300">
              <li>
                <span className="text-gold">Instagram Reels</span> — open IG, tap +, choose Reel, upload MP4.
              </li>
              <li>
                <span className="text-gold">TikTok</span> — tap +, Upload, choose the MP4. Add caption.
              </li>
              <li>
                <span className="text-gold">YouTube Shorts</span> — Create → Upload short → drag in.
              </li>
              <li>
                <span className="text-gold">Facebook / Threads</span> — share as Reel from IG or upload directly.
              </li>
            </ul>
            <p className="mt-6 font-serif italic text-stone-400">
              The reel exports without audio so you can add platform-native music in-app.
              For YouTube Shorts a custom audio bed is recommended — try a Persian-luxury track at 75–90 BPM.
            </p>
            <button
              type="button"
              onClick={() => setHelpOpen(false)}
              className="btn-outline-gold mt-6"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
