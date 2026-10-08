import { TestBed } from '@angular/core/testing';
import { HeroSection } from './hero-section';

describe('HeroSection', () => {
  function renderHero(): HTMLElement {
    const fixture = TestBed.createComponent(HeroSection);
    fixture.detectChanges();
    return fixture.nativeElement as HTMLElement;
  }

  it('renders a single h1 with the headline', () => {
    const root = renderHero();
    const headings = root.querySelectorAll('h1');
    expect(headings.length).toBe(1);
    expect(headings[0].textContent).toContain('Gardens of Distinction');
  });

  it('renders both calls to action', () => {
    const root = renderHero();
    const labels = Array.from(root.querySelectorAll('button')).map((b) => b.textContent?.trim());
    expect(labels).toEqual(['Get Started', 'Learn More']);
  });

  it('renders the four stats as term and description pairs', () => {
    const root = renderHero();
    expect(root.querySelectorAll('dl > div').length).toBe(4);
    expect(root.querySelector('dt')?.textContent).toContain('Years Experience');
    expect(root.querySelector('dd')?.textContent).toContain('15+');
  });
});
