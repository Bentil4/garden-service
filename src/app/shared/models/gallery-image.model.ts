export type GalleryArea = 'tall-left' | 'top-left' | 'top-right' | 'tall-right' | 'wide-bottom';

export interface GalleryImage {
  readonly id: string;
  readonly src: string;
  readonly alt: string;
  readonly area: GalleryArea;
}
