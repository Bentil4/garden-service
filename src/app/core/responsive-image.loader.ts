import { ImageLoaderConfig } from '@angular/common';
import { LARGEST_IMAGE_WIDTHS } from '../shared/data/responsive-images.data';

export function responsiveImageLoader({ src, width }: ImageLoaderConfig): string {
  const largestWidth = LARGEST_IMAGE_WIDTHS[src];
  if (!width || !largestWidth || width === largestWidth) {
    return src;
  }
  return src.replace(/\.webp$/, `-${width}.webp`);
}
