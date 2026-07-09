
'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faWrench, faShieldHalved, faDollarSign, faClipboardCheck, faHouseChimney, faCheck } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Texas heat, storms, and humidity punish homes year-round. Use this practical seasonal checklist to catch small issues before they become expensive repairs. RightFix Handyman helps homeowners across Waco, Temple, and Killeen make the right call before money is wasted on the wrong trade.",
  },
  {
    type: 'cards',
    heading: 'Practical Takeaways',
    cards: [
      { icon: faDollarSign, title: 'Cost control', body: 'Batch small repairs with a handyman instead of paying multiple trade minimums.' },
      { icon: faWrench, title: 'Skill fit', body: 'General repairs, drywall patches, mounting, and caulk are handyman sweet spots.' },
      { icon: faShieldHalved, title: 'When to escalate', body: 'Major structural, full remodels, and specialty licensed work need the right contractor.' },
      { icon: faClipboardCheck, title: 'Scope first', body: 'A written flat-rate scope prevents surprise invoices either way.' },
      { icon: faHouseChimney, title: 'Texas realities', body: 'Heat, humidity, and storm seasons create recurring small fixes that add up fast.' },
      { icon: faCheck, title: 'Warranty matters', body: 'Ask for workmanship warranty — RightFix includes 1-Year Workmanship Warranty.' },
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: 'Pro Tip: Photograph issues and make a single honey-do list. One visit is almost always cheaper and cleaner than five separate call-outs.',
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'List every small fix you have been putting off',
      'Mark anything that looks structural, electrical main-panel, or major plumbing',
      'Request a flat-rate package quote for the rest',
      'Ask about background checks, insurance, and workmanship warranty',
      'Book one visit and knock the list out',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title={"Seasonal Home Maintenance Checklist for Texas Homes"}
        description={"Texas heat, storms, and humidity punish homes year-round. Use this practical seasonal checklist to catch small issues before they become expensive repairs."}
        imageSrc="/pages/blogs/maintenance-plan.jpg"
        imageAlt={"Seasonal home maintenance checklist for Central Texas"}
        category="Maintenance"
        date="June 24, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Need Help With a Honey-Do List?"
        body="Get a free estimate from RightFix Handyman — background-checked pros serving Waco and Central Texas."
        buttonText="Request a Free Estimate"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="seasonal-maintenance-blog" />
    </>
  );
}
