import { TestBed } from '@angular/core/testing';
import { ServicesSection } from './services-section';

describe('ServicesSection', () => {
  it('renders the heading and six service cards', () => {
    const fixture = TestBed.createComponent(ServicesSection);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelector('h2')?.textContent).toContain('Our landscaping work and services');
    expect(root.querySelectorAll('article').length).toBe(6);
    expect(root.querySelectorAll('h3').length).toBe(6);
  });
});
