// libs/local-db/reviews.ts
// Static testimonials for RightFix Handyman

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Honey-Do Lists',
    text:     "Had a list of 12 small fixes sitting for months. RightFix knocked them out in one visit — doors, caulk, a shelf, and a leaky faucet. Flat-rate quote, clean work, and my wife is thrilled. Sam's crew is solid.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Drywall Patching',
    text:     'Kids put two big holes in the hallway. RightFix patched, textured to match, and left it paint-ready. You cannot tell anything happened. Fair price and on time.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'TV Mounting & Assembly',
    text:     'Mounted a 75\" TV, assembled a media console, and hid the cables. Perfectly level, stud-safe, and they cleaned up every scrap. This is my go-to handyman now.',
  },
  {
    name:     'Patricia L.',
    location: 'Temple, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Caulking & Weatherproofing',
    text:     'Tub surround and exterior window gaps sealed properly. No more drafts or moisture issues. Honest advice instead of trying to sell a full remodel.',
  },
  {
    name:     'David M.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Door & Window Fixes',
    text:     'Front door would not latch and two windows stuck every summer. RightFix adjusted hinges, replaced weatherstripping, and everything works smoothly. Worth every penny.',
  },
  {
    name:     'Angela W.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'October 2025',
    service:  'General Home Repairs',
    text:     'Ceiling fan swap, closet rod, and a few outlet covers — all done in one afternoon. Background-checked, respectful of the house, and the warranty gives peace of mind.',
  },
  {
    name:     'Robert H.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Property Management',
    text:     'We use RightFix for make-ready repairs across our rental units. Fast turnaround, consistent quality, and one invoice that property managers actually understand.',
  },
  {
    name:     'Cheryl B.',
    location: 'McGregor, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Honey-Do Lists',
    text:     'Finally got through the honey-do list my husband had been ignoring for a year. RightFix was professional, priced fairly, and finished everything in one day. 1-Year Workmanship Warranty sealed the deal.',
  },
];

export default reviews;
