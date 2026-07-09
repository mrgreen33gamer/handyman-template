// RightFix Handyman — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import AboutHero       from "#/PageComponents/AboutHero/AboutHero";
import AboutStory      from "#/PageComponents/AboutStory/AboutStory";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faClipboardCheck,
  faShieldHalved,
  faHammer,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2015",
      description: "RightFix was founded in Waco by Sam Ortiz. We're not a franchise — every decision is made locally, every call is answered by someone who lives here.",
    },
    {
      icon: faUsers,
      title: "A Crew You Can Trust in Your Home",
      description: "Every pro on our team is background-checked, bonded, and insured. Shoe covers, clean workspace, no mess left behind.",
    },
    {
      icon: faLeaf,
      title: "Honest From the First Call",
      description: "We won't upsell a full remodel when a simple repair will do. Our reputation is built on straight talk — and 11 years of repeat customers prove it works.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 9000, label: "Jobs completed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rate",           suffix: "%", duration: 2 },
    { icon: faClock,     value: 11,   label: "Years serving Central Texas families", suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — share your list and preferred timing.", icon: faClipboardCheck },
    { number: 2, title: "Scope Honestly", description: "A RightFix pro confirms the work and explains options in plain English.", icon: faShieldHalved },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any work starts. You decide — zero pressure.", icon: faHammer },
    { number: 4, title: "Fix & Warranty", description: "Clean job site and a 1-Year Workmanship Warranty on labor.", icon: faCircleCheck },
  ];

  return (
    <main className={styles.pageWrapper}>

      <AboutHero cityName="Waco" />
      <AboutStory cityName="Waco" />

      <SectionIntro
        title="About RightFix Handyman"
        subtitle="Waco-owned, Waco-operated, and Waco-proud since 2015. Reliable home repairs at fair prices for the families and businesses we've called neighbors for 11 years."
      />

      <TrustBar headline="9,000+ Central Texas jobs — and we've earned every one" />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="Who We Are"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <CTABanner
        headline="Ready to Work With a Local Crew You Can Trust?"
        subline="Call (254) 800-9900 or request a free estimate online."
        primaryText="Call (254) 800-9900"
        primaryLink="tel:+12548009900"
        secondaryText="Get a Free Estimate"
        secondaryLink="/contact"
      />
    </main>
  );
}
