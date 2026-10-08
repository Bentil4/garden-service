import { TestBed } from '@angular/core/testing';
import { FaqSection } from './faq-section';

describe('FaqSection', () => {
  it('renders five questions with the first one expanded', async () => {
    const fixture = TestBed.createComponent(FaqSection);
    await fixture.whenStable();
    const triggers = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('button[aria-expanded]'),
    );
    expect(triggers.length).toBe(5);
    expect(triggers.map((t) => t.getAttribute('aria-expanded'))).toEqual([
      'true',
      'false',
      'false',
      'false',
      'false',
    ]);
  });
});
