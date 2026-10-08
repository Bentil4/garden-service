import { TestBed } from '@angular/core/testing';
import { GallerySection } from './gallery-section';

describe('GallerySection', () => {
  it('renders five images that all have descriptive alt text', () => {
    const fixture = TestBed.createComponent(GallerySection);
    fixture.detectChanges();
    const images = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll('img'));
    expect(images.length).toBe(5);
    expect(images.every((img) => (img.getAttribute('alt') ?? '').length > 0)).toBe(true);
  });
});
