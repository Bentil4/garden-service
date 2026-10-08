import { TestBed } from '@angular/core/testing';
import { TestimonialsSection } from './testimonials-section';

describe('TestimonialsSection', () => {
  it('renders four testimonials with a quote and an author each', () => {
    const fixture = TestBed.createComponent(TestimonialsSection);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelectorAll('figure').length).toBe(4);
    expect(root.querySelectorAll('blockquote').length).toBe(4);
    expect(root.querySelectorAll('figcaption').length).toBe(4);
  });
});
