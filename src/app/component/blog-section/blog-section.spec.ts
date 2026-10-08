import { TestBed } from '@angular/core/testing';
import { BlogSection } from './blog-section';

describe('BlogSection', () => {
  it('renders three articles with accessible read-more buttons', () => {
    const fixture = TestBed.createComponent(BlogSection);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelectorAll('article').length).toBe(3);
    const labels = Array.from(root.querySelectorAll('button')).map((b) =>
      b.getAttribute('aria-label'),
    );
    expect(labels[0]).toBe('Read more: Choosing the Right Plants for Your Climate Zone');
  });
});
