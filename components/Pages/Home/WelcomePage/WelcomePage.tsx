// _archetype-library/hero-e-testimonial/Component.tsx
//
// Hero E: Testimonial — left copy, right large review quote card.
// Dominant quote + star rating + author photo or initials avatar.
'use client';
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon, StarIcon } from './_shared/icons';
import styles from './styles.module.scss';

function initialsFromName(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function TestimonialCard({
  quote,
  authorName,
  authorMeta,
  authorImageSrc,
  rating = 5,
}: {
  quote: string;
  authorName: string;
  authorMeta: string;
  authorImageSrc?: string;
  rating?: number;
}) {
  const stars = useMemo(() => {
    const n = Math.min(5, Math.max(1, Math.round(rating)));
    return Array.from({ length: 5 }, (_, i) => i < n);
  }, [rating]);

  const initials = useMemo(() => initialsFromName(authorName), [authorName]);

  return (
    <figure className={styles.card}>
      <div className={styles.cardGlow} aria-hidden="true" />
      <span className={styles.quoteMark} aria-hidden="true">
        &ldquo;
      </span>

      <div className={styles.stars} role="img" aria-label={`${Math.min(5, Math.max(1, Math.round(rating)))} out of 5 stars`}>
        {stars.map((filled, i) => (
          <span key={i} className={filled ? styles.starOn : styles.starOff}>
            <StarIcon size={18} filled={filled} />
          </span>
        ))}
      </div>

      <blockquote className={styles.quote}>
        <p>{quote}</p>
      </blockquote>

      <figcaption className={styles.author}>
        {authorImageSrc ? (
          <img
            src={authorImageSrc}
            alt=""
            className={styles.avatarImg}
            width={48}
            height={48}
          />
        ) : (
          <span className={styles.avatarFallback} aria-hidden="true">
            {initials}
          </span>
        )}
        <div className={styles.authorText}>
          <cite className={styles.authorName}>{authorName}</cite>
          <span className={styles.authorMeta}>{authorMeta}</span>
        </div>
      </figcaption>
    </figure>
  );
}

export default function WelcomePage() {
const badgeText = 'Waco\'s Most Trusted Handyman — Since 2015';
const headlineLines = [
  'Reliable Repairs.',
  'No Job Too Small.',
];
const headlineAccent = 'RightFix.';
const subheadline = 'Flat-rate pricing. Background-checked pros. 1-Year Workmanship Warranty. Serving Waco and Central Texas — from honey-do lists to drywall and mounting.';
const primaryCta = { label: 'Call (254) 800-9900', href: 'tel:+12548009900' };
const secondaryCta = { label: 'Free Estimate', href: '/contact' };
const chips = [
  'Same-Day Available',
  'No Contracts',
  'Background-Checked',
  'Since 2015',
  '1-Year Warranty',
];
const stats = [
  {
    "value": "9,000+",
    "label": "Jobs Completed"
  },
  {
    "value": "4.9 ★",
    "label": "Google Rating"
  },
  {
    "value": "1-Year",
    "label": "Workmanship Warranty"
  },
  {
    "value": "Same-Day",
    "label": "Service Available"
  }
];
const meterTarget = 72;
const meterTopLabel = "Peak";
const meterMidLabel = "Local";
const meterBotLabel = "Base";
const particleColor = '#f97316';
const beforeImageSrc = '/pages/home/welcome/before.jpg';
const afterImageSrc = '/pages/home/welcome/after.jpg';
const beforeLabel = "Backlog";
const afterLabel = "Checked off";
const mapCenterLabel = 'Service HQ';
const mapPins = [
  { label: 'Waco', x: 42, y: 48 },
  { label: 'Temple', x: 68, y: 62 },
  { label: 'Killeen', x: 58, y: 72 },
];
const coverageLabel = 'Central Texas coverage';
const materials = [
  { name: "Mounts", swatch: "#f59e0b", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Doors", swatch: "#fbbf24", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Caulk/Paint", swatch: "#d97706", imageSrc: "/pages/home/welcome/mat-3.jpg" },
  { name: "Fixtures", swatch: "#fcd34d", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Deck Fix", swatch: "#b45309", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Odd Jobs", swatch: "#92400e", imageSrc: "/pages/home/welcome/mat-3.jpg" }
];
const quote = "Three visits cleared a year of little problems. Showed up with the right tools every time.";
const authorImageSrc = undefined as string | undefined;
const authorName = "Greg & Ann";
const authorMeta = "Punch list · Waco";
const rating = 5;
const schematicLabel = "RightFix schematic";
const gauges = [
  { label: "Jobs", value: "7,100+" },
  { label: "Rating", value: "4.9 ★" },
  { label: "Min hours", value: "Clear" },
  { label: "Insured", value: "Yes" }
];
const toggles = [
  { label: "Licensed crew", on: true },
  { label: "Same-week", on: true },
  { label: "Warrantied", on: true }
];
const textureSrc = '/pages/home/welcome/hero-main.jpg';
const textureAlt = 'Texture';
const accentWord = "RightFix";

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.shard} aria-hidden="true" />

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>{line}<br /></React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 30, y: 12 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
        >
          <TestimonialCard
            quote={quote}
            authorName={authorName}
            authorMeta={authorMeta}
            authorImageSrc={authorImageSrc}
            rating={rating}
          />
        </motion.div>
      </div>
    </section>
  );
}
