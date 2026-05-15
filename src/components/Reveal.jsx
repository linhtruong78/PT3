import { useEffect, useRef, useState } from 'react';

/**
 * Reveal — gentle fade-up on scroll using IntersectionObserver.
 * No animation library, no layout thrash, accessible (respects prefers-reduced-motion via CSS).
 *
 * Usage:
 *   <Reveal delay={120}><h2>...</h2></Reveal>
 */
export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '', ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !ref.current) return;
    // If the browser doesn't support IO, show immediately (graceful fallback).
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'in-view' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
