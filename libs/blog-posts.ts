// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'handyman-vs-contractor-when-to-call',
    title:    'Handyman vs Contractor: When to Call Which in Central Texas',
    excerpt:  'Not every project needs a general contractor. Learn when a skilled handyman is the smarter, faster, and more affordable call — and when you should hire a specialty trade.',
    category: 'Guides',
    date:     'July 3, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/energy-savings.jpg',
    imageAlt: 'Handyman vs contractor decision guide for Texas homeowners',
    featured: true,
  },
  {
    slug:     'seasonal-home-maintenance-checklist-texas',
    title:    'Seasonal Home Maintenance Checklist for Texas Homes',
    excerpt:  'Texas heat, storms, and humidity punish homes year-round. Use this practical seasonal checklist to catch small issues before they become expensive repairs.',
    category: 'Maintenance',
    date:     'June 24, 2026',
    readTime: 6,
    imageSrc: '/pages/blogs/maintenance-plan.jpg',
    imageAlt: 'Seasonal home maintenance checklist for Central Texas',
  },
  {
    slug:     'drywall-repair-before-paint-tips',
    title:    'Drywall Repair Tips Before You Paint',
    excerpt:  'Patches that show through paint are almost always a prep problem. Here is how to patch, texture-match, and sand so your next paint job looks seamless.',
    category: 'Repairs',
    date:     'June 15, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/ac-replacement.jpg',
    imageAlt: 'Drywall patch and prep tips before painting in Waco TX',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
