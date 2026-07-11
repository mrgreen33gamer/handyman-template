// _archetype-library/header-6-info-subbar/Component.tsx
//
// Variant 6: no marquee. Main logo/nav/CTA row plus a secondary info bar
// showing hours, service area, and rating — always visible on desktop,
// collapses into the drawer context on small screens.
'use client';
import Link from 'next/link';
import { PhoneIcon, StarIcon, PinIcon } from './_shared/icons';
import { useScrollChrome } from './_shared/useScrollChrome';
import { useMobileDrawer } from './_shared/useMobileDrawer';
import styles from './styles.module.scss';

function ClockIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

export default function Header() {
const logoName = 'RightFix';
const logoTagline = 'Repairs · No Job Too Small';
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/blogs', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];
const phoneDisplay = '(254) 800-9900';
const phoneHref = 'tel:+12548009900';
const ctaLabel = 'Free Estimate';
const ctaHref = '/contact';
const marqueeItems = [
  'Same-Day Service Available',
  '1-Year Workmanship Warranty',
  'Flat-Rate Pricing — No Surprises',
  '4.9★ Google Rating · 1,800+ Reviews',
  'Background-Checked Pros',
  'No Contracts — Ever',
  'Serving Central Texas Since 2015',
  'Bonded & Insured · Waco, TX',
];
const footerLine = 'Bonded & Insured · Waco, TX';
const secondaryCtaLabel = 'Book Now';
const secondaryCtaHref = '/contact';
const hoursText = 'Mon–Sat · 7am–7pm';
const serviceAreaText = 'Serving Central Texas';
const ratingText = '4.9★ Local Rating';
  const { scrolled, progressRef } = useScrollChrome();
  const { menuOpen, setMenuOpen, drawerRef, triggerRef, pathname } = useMobileDrawer();

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div ref={progressRef} className={styles.progressBar}
          style={{ transform: 'scaleX(0)', transformOrigin: 'left center', willChange: 'transform' }}
          aria-hidden="true" />

        <div className={styles.navInner}>
          <Link href="/" className={styles.logo} aria-label={`${logoName} home`}>
            <span className={styles.logoText}>
              <span className={styles.logoName}>{logoName}</span>
              <span className={styles.logoTagline}>{logoTagline}</span>
            </span>
          </Link>

          <nav className={styles.desktopNav} aria-label="Main navigation">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link key={href} href={href} className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`} aria-current={isActive ? 'page' : undefined}>
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className={styles.ctaGroup}>
            <a href={phoneHref} className={styles.callBtn}><PhoneIcon size={13} /> Call Now</a>
            <Link href={ctaHref} className={styles.estimateBtn}>{ctaLabel}</Link>
          </div>

          <button ref={triggerRef} className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen} aria-controls="mobile-drawer-6">
            <span className={styles.hBar} /><span className={styles.hBar} /><span className={styles.hBar} />
          </button>
        </div>

        <div className={styles.infoBar} aria-label="Business info">
          <div className={styles.infoInner}>
            <span className={styles.infoItem}>
              <ClockIcon size={12} /> {hoursText}
            </span>
            <span className={styles.infoDot} aria-hidden="true" />
            <span className={styles.infoItem}>
              <PinIcon size={12} /> {serviceAreaText}
            </span>
            <span className={styles.infoDot} aria-hidden="true" />
            <span className={styles.infoItem}>
              <StarIcon size={12} /> {ratingText}
            </span>
          </div>
        </div>
      </header>

      <div className={`${styles.backdrop} ${menuOpen ? styles.backdropVisible : ''}`} onClick={() => setMenuOpen(false)} aria-hidden="true" />

      <nav id="mobile-drawer-6" ref={drawerRef} className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
        aria-label="Mobile navigation" aria-hidden={!menuOpen}>
        <div className={styles.drawerHead}>
          <span className={styles.drawerBrand}>{logoName}</span>
          <button className={styles.drawerClose} onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div className={styles.drawerInfo}>
          <span><ClockIcon size={11} /> {hoursText}</span>
          <span><PinIcon size={11} /> {serviceAreaText}</span>
          <span><StarIcon size={11} /> {ratingText}</span>
        </div>
        <ul className={styles.drawerLinks} role="list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={`${styles.drawerLink} ${pathname === href ? styles.drawerLinkActive : ''}`} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.drawerActions}>
          <a href={phoneHref} className={styles.drawerCallBtn} onClick={() => setMenuOpen(false)}>
            <PhoneIcon size={14} /> Call {phoneDisplay}
          </a>
          <Link href={ctaHref} className={styles.drawerEstimateBtn} onClick={() => setMenuOpen(false)}>
            {ctaLabel}
          </Link>
        </div>
        <div className={styles.drawerFoot}>{footerLine}</div>
      </nav>
    </>
  );
}
