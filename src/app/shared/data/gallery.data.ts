import { GalleryImage } from '../models/gallery-image.model';

export const GALLERY_IMAGES: readonly GalleryImage[] = [
  {
    id: 'raised-bed',
    src: 'images/gallery/gallery-1.webp',
    alt: 'Two people planting in a raised garden bed',
    area: 'tall-left',
  },
  {
    id: 'watering',
    src: 'images/gallery/gallery-2.webp',
    alt: 'A man watering potted plants with a hose',
    area: 'top-left',
  },
  {
    id: 'mowing',
    src: 'images/gallery/gallery-3.webp',
    alt: 'A man mowing a lawn beside a flower border',
    area: 'top-right',
  },
  {
    id: 'spade',
    src: 'images/gallery/gallery-4.webp',
    alt: 'A spade standing in freshly dug soil',
    area: 'tall-right',
  },
  {
    id: 'rose',
    src: 'images/gallery/gallery-5.webp',
    alt: 'A red rose in full bloom',
    area: 'wide-bottom',
  },
];
