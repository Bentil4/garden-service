import { IconCardItem } from '../models/icon-card-item.model';

export const SERVICES: readonly IconCardItem[] = [
  {
    id: 'lawn-care',
    iconSrc: 'icons/services/lawn-mower.svg',
    title: 'Lawn Care',
    description:
      'Mowing, edging, feeding and aeration that keep your lawn thick, green and healthy all year round.',
    featured: true,
  },
  {
    id: 'tree-and-shrub-care',
    iconSrc: 'icons/services/plantation.svg',
    title: 'Tree and Shrub Care',
    highlight: 'Shrub Care',
    description:
      'Pruning, shaping and health checks that help your trees and shrubs grow strong and look their best.',
  },
  {
    id: 'free-consultations',
    iconSrc: 'icons/services/consultant.svg',
    title: 'Free Consultations',
    highlight: 'Consultations',
    description:
      'Talk through your ideas with our experts on site and receive honest advice and a clear estimate at no cost.',
  },
  {
    id: 'garden-design',
    iconSrc: 'icons/services/trowel.svg',
    title: 'Garden Design',
    highlight: 'Design',
    description:
      'Custom layouts with the right plants, paths and features for your space, style and budget.',
  },
  {
    id: 'water-features',
    iconSrc: 'icons/services/spray-sprinkler.svg',
    title: 'Water Features',
    highlight: 'Features',
    description:
      'Ponds, fountains and streams designed to bring movement, sound and wildlife into your garden.',
  },
  {
    id: 'irrigation-systems',
    iconSrc: 'icons/services/flower-growing.svg',
    title: 'Irrigation Systems',
    highlight: 'Systems',
    description:
      'Efficient watering systems that deliver the right amount of water, saving time, money and resources.',
  },
];
