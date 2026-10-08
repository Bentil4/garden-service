import { GalleryArea } from '../models/gallery-image.model';

export const GALLERY_AREA_CLASSES: Readonly<Record<GalleryArea, string>> = {
  'tall-left': 'col-span-2 aspect-4/3 lg:col-span-1 lg:row-span-2 lg:aspect-auto',
  'top-left': 'aspect-169/238 lg:aspect-auto',
  'top-right': 'aspect-169/238 lg:aspect-auto',
  'tall-right': 'col-span-2 aspect-4/3 lg:col-span-1 lg:row-span-2 lg:aspect-auto',
  'wide-bottom': 'col-span-2 aspect-378/228 lg:aspect-auto',
};
