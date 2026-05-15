import Reveal from './Reveal.jsx';

/**
 * SectionHeading
 * ---------------
 * Eyebrow · Heading · gold divider · optional subtitle.
 * Used as the canonical opener for nearly every section.
 */
export default function SectionHeading({
  eyebrow,
  heading,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignment =
    align === 'left' ? 'text-left items-start' : align === 'right' ? 'text-right items-end' : 'text-center items-center';

  return (
    <div className={`mx-auto flex max-w-3xl flex-col ${alignment}`}>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={100}>
        <h2
          className={`mt-4 font-display text-3xl uppercase tracking-royal md:text-5xl ${
            light ? 'text-stone-100' : 'text-stone-50'
          }`}
        >
          {heading}
        </h2>
      </Reveal>
      <Reveal delay={200}>
        <span
          className={`mt-6 block h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        />
      </Reveal>
      {subtitle && (
        <Reveal delay={250}>
          <p className="mt-6 max-w-2xl font-serif text-base italic text-stone-300 md:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
