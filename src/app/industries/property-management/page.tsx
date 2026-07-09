"use client";
import styles from "../page.module.scss";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";
import {
  faClipboardCheck, faShieldHalved, faUsers, faHeadset, faSearch, faFileContract, faCheckCircle,
  faClock, faTriangleExclamation, faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustryPage() {
  const pains = [
    { icon: faClock, problem: "Slow unit turns", consequence: "Vacant days cost rent. Small repairs stack up and delay new tenant move-ins." },
    { icon: faTriangleExclamation, problem: "Inconsistent vendor quality", consequence: "Different contractors leave different quality — and more callbacks for your team." },
    { icon: faUsers, problem: "Communication gaps", consequence: "Tenants, owners, and vendors need clear updates without endless phone tag." },
    { icon: faDollarSign, problem: "Budget surprises", consequence: "Hourly billing and vague scopes blow CapEx and OpEx plans." },
  ];

  const whyFeatures = [
    { icon: faClipboardCheck, title: "Schedule-Aware Pros", description: "We plan around tenant notices, business hours, and facility windows." },
    { icon: faShieldHalved, title: "Background-Checked · Bonded & Insured", description: "Documentation ready for PMs, admins, and business owners." },
    { icon: faUsers, title: "Single Point of Contact", description: "One RightFix lead coordinates multi-unit or multi-site work end to end." },
  ];

  const processSteps = [
    { number: 1, title: "Scope Call", description: "Share work orders, access rules, and timeline constraints.", icon: faHeadset },
    { number: 2, title: "Site Walk", description: "We confirm tasks, materials, and any specialty trade boundaries.", icon: faSearch },
    { number: 3, title: "Package Quote", description: "Written pricing by unit or punch list — easy to approve.", icon: faFileContract },
    { number: 4, title: "Execute & Report", description: "Clean completion, photos when requested, and warranty on labor.", icon: faCheckCircle },
  ];

  const faq = [
    { question: "Can you handle multi-unit work orders?", answer: "Yes — we package make-ready and punch lists with clear pricing and scheduling." },
    { question: "Are your pros background-checked?", answer: "Yes — background-checked, bonded, and insured on every job." },
    { question: "Do you warranty commercial/facility work?", answer: "Yes — 1-Year Workmanship Warranty on completed labor." },
    { question: "Can you work after hours?", answer: "Often yes — tell us your access windows and we will schedule accordingly." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Property Management" },
      ]} />
      <SectionIntro title="Property Management" subtitle={"Make-ready repairs, unit turns, and portfolio maintenance for Central Texas property managers — one accountable handyman partner."} />
      <TrustBar headline="Background-checked handyman partner for Central Texas organizations" />
      <div className={styles.section}>
        <IndustryPainPoints industry="Property Management" painPoints={pains} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Property Management Choose RightFix" />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Property Management FAQs" />
      </div>
      <CTABanner
        headline="Let's Scope Your Project"
        subline="Call (254) 800-9900 or request a package quote online."
        primaryText="Call (254) 800-9900"
        primaryLink="tel:+12548009900"
        secondaryText="Request Quote"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4 title="Request a Property Management Quote" cityName="Waco" slug="industries/property-management" spot="industry-property-management-form" formVariant={2} />
      </div>
    </main>
  );
}
