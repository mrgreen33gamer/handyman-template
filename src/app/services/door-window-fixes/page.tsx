// RightFix Handyman — Door & Window Fixes Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faWrench, faTrophy, faChartLine, faHammer,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicePage() {
  const expectations = [
    { icon: faSearch, title: "Clear Scope First", description: "We confirm the work and materials before quoting — no vague hourly estimates." },
    { icon: faFileContract, title: "Flat-Rate Written Quote", description: "Labor and materials in the number. You approve before we start." },
    { icon: faCheckCircle, title: "Clean, Professional Finish", description: "We diagnose binding, alignment, and seal issues first — then adjust, replace hardware, or re-seal without unnecessary full replacements." },
    { icon: faShieldHalved, title: "1-Year Workmanship Warranty", description: "Every completed job is backed by our 1-Year Workmanship Warranty." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Efficient Scheduling", description: "Same-day when available. Most non-emergency jobs booked within a few days." },
    { icon: faHammer, title: "Skilled Generalists", description: "Background-checked pros who handle a wide range of residential repairs cleanly." },
    { icon: faShieldHalved, title: "Bonded and Insured", description: "Background-checked, bonded, and insured on every job. Documentation on request." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Share photos or a list — we confirm fit and timing.", icon: faHeadset },
    { number: 2, title: "Quote", description: "You get a flat-rate price before work begins.", icon: faSearch },
    { number: 3, title: "Repair Day", description: "We complete the work, protect floors, and clean up.", icon: faFileContract },
    { number: 4, title: "Walkthrough", description: "We review the result and stand behind it with our warranty.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 9000, label: "Jobs completed in Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction", suffix: "%", duration: 2 },
    { icon: faClock, value: 11, label: "Years serving Waco locals", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling for doors & windows.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full coverage throughout Hewitt.", badge: "" },
    { town: "Woodway", benefit: "Regular availability for Woodway homes.", badge: "" },
    { town: "Temple", benefit: "Bell County coverage with reliable turnaround.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage for larger properties.", badge: "" },
    { town: "Killeen", benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Flat-rate quote before work starts", us: "✅ Always", others: "❌ Often hourly" },
    { feature: "Background-checked pros", us: "✅ All jobs", others: "❌ Varies" },
    { feature: "1-Year Workmanship Warranty", us: "✅ Every job", others: "❌ Rare" },
    { feature: "No service contracts required", us: "✅ Never required", others: "❌ Sometimes" },
    { feature: "Honey-do list packaging", us: "✅ Efficient batches", others: "❌ One task at a time" },
  ];

  const faq = [
    { question: "Can you fix a door that will not latch?", answer: "Usually yes — hinge adjustment, strike plate alignment, or weatherstrip replacement solves most latch issues. We quote before replacing the whole door." },
    { question: "How much does door & window fixes cost in Waco?", answer: "Most jobs are quoted flat-rate after a quick scope. Pricing depends on materials and complexity — call (254) 800-9900 for a free estimate." },
    { question: "Do you offer same-day service?", answer: "When schedule allows, yes. We give honest ETAs — not a four-hour window that wastes your day." },
    { question: "Are you insured?", answer: "Yes — background-checked pros who are bonded and insured." },
    { question: "Do you warranty the work?", answer: "Yes — 1-Year Workmanship Warranty on completed labor." },
    { question: "What areas do you serve?", answer: "Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco." },
  ];

  const crossServices = [
    { icon: faWrench, title: "General Home Repairs", body: "Learn more about our general repairs services.", link: "/services/general-repairs" },
    { icon: faWrench, title: "Drywall Patching", body: "Learn more about our drywall services.", link: "/services/drywall-patching" },
    { icon: faWrench, title: "TV Mounting & Assembly", body: "Learn more about our mounting services.", link: "/services/mounting-assembly" },
    { icon: faWrench, title: "Caulking & Weatherproofing", body: "Learn more about our caulking services.", link: "/services/caulking-weatherproofing" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Door & Window Fixes" },
      ]} />
      <SectionIntro title="Door & Window Fixes in Waco, TX" subtitle={"Sticky doors, loose hinges, weatherstripping, latches, and hardware — smoother operation and fewer drafts across Central Texas homes."} />
      <TrustBar headline="9,000+ Central Texas jobs — background-checked, bonded and insured" />
      <div className={styles.section}><WhatToExpect expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose RightFix" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/door-window-fixes" title="Door & Window Fixes Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Door & Window Fixes FAQs" /></div>
      <CTABanner
        headline="Ready to Get Started?"
        subline="Flat-rate quotes. Background-checked pros. Call (254) 800-9900."
        primaryText="Call Us Now"
        primaryLink="tel:+12548009900"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title="Schedule Door & Window Fixes" cityName="Waco" slug="services/door-window-fixes" spot="door-window-fixes-page-form" formVariant={2} />
      </div>
    </main>
  );
}
