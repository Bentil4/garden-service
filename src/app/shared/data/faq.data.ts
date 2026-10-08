import { FaqItem } from '../models/faq-item.model';

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 'residential-commercial',
    question: 'Do you specialize in both residential and commercial landscaping?',
    answer:
      "Yes, we have extensive experience in both residential and commercial landscaping. Whether you need to enhance your home's curb appeal or create an inviting outdoor space for your business, we can help.",
  },
  {
    id: 'eco-friendly',
    question: 'Do you provide sustainable and eco-friendly landscaping options?',
    answer:
      'Yes. We favor native and drought-tolerant plants, water-saving irrigation, organic soil improvement and recycled or locally sourced materials wherever possible, so your garden looks great while staying gentle on the environment.',
  },
  {
    id: 'consultation',
    question: 'How do I request a consultation or estimate for my landscaping project?',
    answer:
      'Use the contact form on this page or call us to book a free consultation. We will visit your space, talk through your ideas and send you a clear, itemized estimate.',
  },
  {
    id: 'cost-factors',
    question: 'What factors influence the cost of a landscaping project?',
    answer:
      'The size of your space, the plants and materials you choose, how much groundwork is needed, access to the site and any permits all affect the price. We explain each part in your estimate so there are no surprises.',
  },
  {
    id: 'maintenance-frequency',
    question: 'How often should I schedule landscape maintenance services?',
    answer:
      'Most gardens benefit from a visit every two to four weeks during the growing season and a lighter schedule in winter. We will recommend a plan based on your plants and how you use the space.',
  },
];
