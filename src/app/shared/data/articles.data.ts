import { Article } from '../models/article.model';

export const ARTICLES: readonly Article[] = [
  {
    id: 'climate-zone-plants',
    category: 'Tips',
    title: 'Choosing the Right Plants for Your Climate Zone',
    excerpt:
      'Learn how to match plants to your local climate zone so they establish quickly, need less water and keep your garden looking healthy through every season.',
    comments: 10,
    views: '10K',
    publishedLabel: '5 min ago',
    imageSrc: 'images/blog/blog-1.webp',
    imageAlt: 'Green leaves and tendrils of a climbing plant',
  },
  {
    id: 'low-maintenance-landscape',
    category: 'Insight',
    title: 'How to Create a Low Maintenance Landscape',
    excerpt:
      'Smart plant choices, mulching and efficient irrigation can cut upkeep dramatically. Here is how to enjoy a beautiful garden without spending every weekend working in it.',
    comments: 50,
    views: '15K',
    publishedLabel: '7 min ago',
    imageSrc: 'images/blog/blog-2.webp',
    imageAlt: 'A tree growing inside a modern spiral atrium',
  },
  {
    id: 'modern-homeowner-trends',
    category: 'Insight',
    title: 'Landscaping Trends for the Modern Homeowner',
    excerpt:
      'From native planting and pollinator borders to outdoor living areas, discover the landscaping trends shaping modern homes and what they could mean for your yard.',
    comments: 100,
    views: '20K',
    publishedLabel: '10 min ago',
    imageSrc: 'images/blog/blog-3.webp',
    imageAlt: 'A brick house behind a lawn lined with trimmed round hedges',
  },
];
