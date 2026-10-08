import { responsiveImageLoader } from './responsive-image.loader';

describe('responsiveImageLoader', () => {
  it('maps a smaller width to its published variant', () => {
    expect(responsiveImageLoader({ src: 'images/hero.webp', width: 640 })).toBe(
      'images/hero-640.webp',
    );
  });

  it('keeps the original file for the largest width', () => {
    expect(responsiveImageLoader({ src: 'images/hero.webp', width: 1476 })).toBe(
      'images/hero.webp',
    );
  });

  it('leaves images without variants untouched', () => {
    expect(responsiveImageLoader({ src: 'images/gallery/gallery-1.webp', width: 640 })).toBe(
      'images/gallery/gallery-1.webp',
    );
  });

  it('returns the source when no width is requested', () => {
    expect(responsiveImageLoader({ src: 'images/about.webp' })).toBe('images/about.webp');
  });
});
