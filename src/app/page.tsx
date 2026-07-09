// RightFix Handyman — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faHammer, faBorderAll, faDoorOpen, faTv, faBrush, faClipboardList,
  faTrophy, faChartLine, faClock,
  faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faStar, faClipboardCheck, faShieldHalved, faWrench,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    {
      icon: faHammer,
      title: "General Home Repairs",
      body: "Faucets, outlets, trim, hardware, and the everyday fixes that keep a house working — done right the first time.",
      link: "/services/general-repairs",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faBorderAll,
      title: "Drywall Patching",
      body: "Holes, cracks, water damage, and texture match so walls look whole again before paint day.",
      link: "/services/drywall-patching",
      image: "/pages/home/services/service-2.jpg",
    },
    {
      icon: faDoorOpen,
      title: "Door & Window Fixes",
      body: "Sticky doors, loose hinges, weatherstripping, latches, and hardware — smoother operation and fewer drafts.",
      link: "/services/door-window-fixes",
      image: "/pages/home/services/service-3.jpg",
    },
    {
      icon: faTv,
      title: "TV Mounting & Assembly",
      body: "Secure TV mounts, furniture assembly, shelves, and wall anchors — level, stud-safe, and cable-clean.",
      link: "/services/mounting-assembly",
      image: "/pages/home/services/service-4.jpg",
    },
    {
      icon: faBrush,
      title: "Caulking & Weatherproofing",
      body: "Tub surrounds, windows, exterior gaps, and door thresholds sealed against moisture and Texas heat.",
      link: "/services/caulking-weatherproofing",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faClipboardList,
      title: "Honey-Do Lists",
      body: "Batch your small projects into one visit — we knock out the list efficiently with flat-rate pricing.",
      link: "/services/honey-do-lists",
      image: "/pages/home/services/service-2.jpg",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 9000, label: "Jobs completed across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 11,   label: "Years of local handyman experience",  suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",        suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Flat-Rate Written Quotes",
      description: "You get a firm price before we start. No hourly billing surprises, no mid-job add-ons.",
    },
    {
      icon: faShieldHalved,
      title: "Background-Checked Pros",
      description: "Every pro who enters your home is background-checked, bonded, and insured.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2015",
      description: "We're not a franchise. RightFix was founded in Waco by Sam Ortiz. Every decision is made locally.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — share your list and preferred timing.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "Scope & Quote",
      description: "We confirm the work, materials, and a flat-rate price before anything starts.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Approve",
      description: "Zero pressure. Approve the written quote and we lock in the appointment.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Fix & Warranty",
      description: "Clean job site, workmanship you can trust, and a 1-Year Workmanship Warranty.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    {
      icon: faSearch,
      title: "Honest Scope Guidance",
      description: "We'll tell you what needs a specialist vs. what a skilled handyman can handle — no overselling.",
    },
    {
      icon: faWrench,
      title: "Clean, Respectful Work",
      description: "Drop cloths down, tools organized, debris hauled away. Your home is left cleaner than we found it.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Flat-Rate Price",
      description: "Written quote before work begins. The number doesn't change when the job runs long.",
    },
    {
      icon: faStar,
      title: "1-Year Workmanship Warranty",
      description: "If our work fails within a year, we make it right. Simple as that.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling and most available pros in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential coverage. On our regular route.",                    badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway homes and honey-do lists.",          badge: "" },
    { town: "Temple",       benefit: "Regular service area — quick turnaround guaranteed.",                 badge: "" },
    { town: "China Spring", benefit: "Rural coverage, no trip charge for most China Spring addresses.",     badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area customers.",          badge: "" },
  ];

  const faq = [
    {
      question: "How much does a handyman cost in Waco?",
      answer: "Most small repairs and honey-do items are quoted flat-rate after a quick scope. Many single-task jobs land in the $75–$250 range; multi-item visits are packaged for better value. Call (254) 800-9900 for a free estimate.",
    },
    {
      question: "Do you offer same-day service?",
      answer: "Yes when schedule allows — especially for urgent repairs. Call (254) 800-9900 and we'll give you an honest ETA.",
    },
    {
      question: "What handyman services do you offer?",
      answer: "General home repairs, drywall patching, door & window fixes, TV mounting & assembly, caulking & weatherproofing, and honey-do lists.",
    },
    {
      question: "Are your pros background-checked and insured?",
      answer: "Yes — RightFix Handyman uses background-checked pros who are bonded and insured. Documentation available on request.",
    },
    {
      question: "Do you offer a warranty?",
      answer: "Yes — a 1-Year Workmanship Warranty covering our labor on every job we complete.",
    },
    {
      question: "Is there a job too small?",
      answer: "No job too small. We specialize in honey-do lists and batched small fixes so you don't need three different trades for everyday repairs.",
    },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar
        headline="Waco's trusted handyman — background-checked, insured, and warrantied on every job"
      />
      <div className={styles.section}>
        <ServiceCardComponent
          heading="Home Repairs Done Right"
          subheading="From single fixes to full honey-do lists — RightFix handles it all."
          cards={services}
        />
      </div>
      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
      <CTABanner
        headline="The Honey-Do List, Handled."
        subline="Mounts, repairs, small installs, and punch lists — skilled handymen with clear hourly or flat options."
        primaryText="Call (254) 800-9900"
        primaryLink="tel:+12548009900"
        secondaryText="Book a Handyman"
        secondaryLink="/contact"
      
        imageSrc="/pages/home/welcome/hero-main.jpg"
       />
      <div className={styles.section}>
        <GuaranteeSection />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} />
      </div>
      <div className={styles.section}>
        <WhatToExpect expectations={expectations} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Handyman Service FAQs" />
      </div>
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
      <div className={styles.section}>
        <Variant4 title="Request a Free Estimate" cityName="Waco" slug="home" spot="home-form" formVariant={4} />
      </div>
    </main>
  );
}
