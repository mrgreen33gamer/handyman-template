// RightFix Handyman — Services Overview
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faHammer, faBorderAll, faDoorOpen, faTv, faBrush, faClipboardList,
  faTrophy, faChartLine, faClock,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faLock, faRotateLeft, faTag, faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faHammer, title: "General Home Repairs", body: "Everyday fixes — hardware, fixtures, trim, and the small jobs that keep a house working.", link: "/services/general-repairs" },
    { icon: faBorderAll, title: "Drywall Patching", body: "Holes, cracks, water damage, and texture match for a paint-ready finish.", link: "/services/drywall-patching" },
    { icon: faDoorOpen, title: "Door & Window Fixes", body: "Sticky doors, weatherstripping, hinges, and hardware that actually operate smoothly.", link: "/services/door-window-fixes" },
    { icon: faTv, title: "TV Mounting & Assembly", body: "Secure mounts, furniture assembly, shelves, and clean cable management.", link: "/services/mounting-assembly" },
    { icon: faBrush, title: "Caulking & Weatherproofing", body: "Tub surrounds, windows, exterior gaps, and thresholds sealed properly.", link: "/services/caulking-weatherproofing" },
    { icon: faClipboardList, title: "Honey-Do Lists", body: "Batch small projects into one efficient visit with flat-rate packaging.", link: "/services/honey-do-lists" },
  ];

  const expectations = [
    { icon: faSearch, title: "Clear Guidance First", description: "We explain what a handyman can handle vs. when a specialty trade is the right call." },
    { icon: faCheckCircle, title: "Upfront, Written Pricing", description: "No hourly billing surprises. You approve the price before we start." },
    { icon: faShieldHalved, title: "Background-Checked Pros", description: "Every pro is background-checked. Bonded and insured on every job." },
    { icon: faTag, title: "1-Year Workmanship Warranty", description: "Labor covered for one year. If our work fails, we make it right." },
  ];

  const metrics = [
    { icon: faTrophy, value: 9000, label: "Jobs completed since 2015", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 11, label: "Years serving Central Texas", suffix: "+", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faHeadset, title: "A Real Person Answers", description: "Call or text and reach a real RightFix team member — not a call center." },
    { icon: faShieldHalved, title: "No Contracts, Ever", description: "No subscription required. You hire us because the work is done right." },
    { icon: faLock, title: "Bonded & Insured", description: "Background-checked and fully insured. Proof available on request." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Phone, text, or online form. Share photos or your list.", icon: faHeadset },
    { number: 2, title: "Scope On-Site", description: "We confirm the work and materials before quoting.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any work. You decide — zero pressure.", icon: faFileContract },
    { number: 4, title: "Fix & Warranty", description: "Clean job, debris hauled, 1-Year Workmanship Warranty.", icon: faCheckCircle },
  ];

  const guarantees = [
    { icon: faTag, title: "Upfront Pricing, Always", description: "The written price you approve is the price you pay." },
    { icon: faShieldHalved, title: "1-Year Workmanship Warranty", description: "If our labor fails within a year, we fix it." },
    { icon: faRotateLeft, title: "Satisfaction Guarantee", description: "Not happy? We return to make it right." },
    { icon: faLock, title: "Background-Checked · Bonded & Insured", description: "Documentation available on request." },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling and most available pros.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full residential coverage.", badge: "" },
    { town: "Woodway", benefit: "Regular availability for homes and honey-do lists.", badge: "" },
    { town: "Temple", benefit: "Regular service area — quick turnaround.", badge: "" },
    { town: "Killeen", benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage with no trip charge for most addresses.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Upfront, written pricing", us: "✅ Always", others: "❌ Vague estimates" },
    { feature: "1-Year Workmanship Warranty", us: "✅ Every job", others: "❌ Rare or none" },
    { feature: "Background-checked pros", us: "✅ All crews", others: "❌ Not always" },
    { feature: "No service contracts required", us: "✅ Always", others: "❌ Sometimes required" },
    { feature: "Honey-do list packaging", us: "✅ Yes", others: "❌ One task minimums" },
  ];

  const faq = [
    { question: "How much does a handyman cost in Waco?", answer: "Most small jobs are flat-rate after a quick scope. Multi-item honey-do lists are packaged for better value. Call (254) 800-9900 for a free estimate." },
    { question: "Are your pros background-checked?", answer: "Yes — RightFix Handyman uses background-checked pros who are bonded and insured." },
    { question: "Do you offer free estimates?", answer: "Yes — free estimates across our service area. Call (254) 800-9900." },
    { question: "What areas do you serve?", answer: "Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco." },
    { question: "Do you offer a warranty?", answer: "Yes — 1-Year Workmanship Warranty on completed labor." },
    { question: "How do I get a quote?", answer: "Call, text, or fill out our online form. We'll confirm scope and provide written pricing before any work starts." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      <SectionIntro
        title="Handyman Services in Waco, TX"
        subtitle="General repairs, drywall, door & window fixes, mounting, caulking, and honey-do lists — background-checked pros, flat-rate quotes, 1-Year Workmanship Warranty."
      />
      <TrustBar headline="9,000+ jobs · 4.9★ from 1,800+ reviews · Bonded & insured" />
      <div className={styles.section}><ServiceCardComponent heading="Our Services" subheading="Everything your home needs fixed — no job too small." cards={services} /></div>
      <div className={styles.section}><WhatToExpect expectations={expectations} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><GuaranteeSection guarantees={guarantees} /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} /></div>
      <CTABanner
        headline="Ready for a Free Estimate?"
        subline="Flat-rate quotes. Background-checked pros. Call (254) 800-9900."
        primaryText="Call (254) 800-9900"
        primaryLink="tel:+12548009900"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant2 title="Request a Free Estimate" cityName="Waco" slug="services" spot="services-index-form" formVariant={1} />
      </div>
    </main>
  );
}
