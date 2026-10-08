import { Testimonial } from '../models/testimonial.model';

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: 'eko',
    quote:
      'EcoSculpt turned our bare yard into a garden we now spend every weekend in. The team was on time, tidy and genuinely cared about getting the details right.',
    name: 'Eko Susiloanto',
    role: 'Regional Mobility Manager',
    avatarSrc: 'images/testimonials/avatar-1.webp',
    featured: true,
  },
  {
    id: 'tri',
    quote:
      'They listened to what we wanted, suggested plants that suit our climate and finished the job ahead of schedule. Our garden has never looked better.',
    name: 'Tri Cahyono',
    role: 'Human Accounts Supervisor',
    avatarSrc: 'images/testimonials/avatar-3.webp',
    featured: false,
  },
  {
    id: 'tjandra',
    quote:
      'The monthly care plan takes all the stress out of upkeep. Our lawn and borders always look perfect and the crew is friendly and professional.',
    name: 'Tjandra Mangkualam',
    role: 'District Directives Producer',
    avatarSrc: 'images/testimonials/avatar-2.webp',
    featured: false,
  },
  {
    id: 'cak',
    quote:
      'From the first consultation to the final planting, communication was clear and the quality of the work was outstanding. We would happily hire them again.',
    name: 'Cak Mukidi',
    role: 'Forward Paradigm Manager',
    avatarSrc: 'images/testimonials/avatar-4.webp',
    featured: false,
  },
];
