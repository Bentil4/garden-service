import { TestBed } from '@angular/core/testing';
import { PricingSection } from './pricing-section';

describe('PricingSection', () => {
  function render(): HTMLElement {
    const fixture = TestBed.createComponent(PricingSection);
    fixture.detectChanges();
    return fixture.nativeElement as HTMLElement;
  }

  it('renders three plans with formatted monthly prices', () => {
    const root = render();
    const prices = Array.from(root.querySelectorAll('article')).map((card) =>
      card.querySelector('div > p')?.textContent?.trim(),
    );
    expect(prices).toEqual(['$40.00', '$80.00', '$120.00']);
  });

  it('gives each plan a feature list that grows with the tier', () => {
    const root = render();
    const counts = Array.from(root.querySelectorAll('article')).map(
      (card) => card.querySelectorAll('ul > li').length,
    );
    expect(counts).toEqual([4, 5, 6]);
  });
});
