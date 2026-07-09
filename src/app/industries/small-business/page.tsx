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
    { icon: faClock, problem: "After-hours constraints", consequence: "Retail and offices need work done without killing open hours." },
    { icon: faTriangleExclamation, problem: "First impressions", consequence: "Loose hardware, scuffed walls, and sticky doors make a cheap impression." },
    { icon: faUsers, problem: "No facilities team", consequence: "Small businesses need a reliable pro without hiring staff." },
    { icon: faDollarSign, problem: "One-off vendor chaos", consequence: "Different people for every small job creates uneven quality." },
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
        { label: "Small Businesses" },
      ]} />
      <SectionIntro title="Small Businesses" subtitle={"Storefront and office handyman support — hanging fixtures, door fixes, patching, and punch lists that keep your business looking professional."} />
      <TrustBar headline="Background-checked handyman partner for Central Texas organizations" />
      <div className={styles.section}>
        <IndustryPainPoints industry="Small Businesses" painPoints={pains} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Small Businesses Choose RightFix" />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Small Businesses FAQs" />
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
        <Variant4 title="Request a Small Businesses Quote" cityName="Waco" slug="industries/small-business" spot="industry-small-business-form" formVariant={2} />
      </div>
    </main>
  );
}
