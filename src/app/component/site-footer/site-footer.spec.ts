import { TestBed } from '@angular/core/testing';
import { SiteFooter } from './site-footer';

describe('SiteFooter', () => {
  function render(): HTMLElement {
    const fixture = TestBed.createComponent(SiteFooter);
    fixture.detectChanges();
    return fixture.nativeElement as HTMLElement;
  }

  it('links to the page sections', () => {
    const hrefs = Array.from(render().querySelectorAll('nav a')).map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual(['#about', '#services', '#pricing', '#blog']);
  });

  it('gives every social link an accessible name', () => {
    const labels = Array.from(render().querySelectorAll('ul a[aria-label]')).map((a) =>
      a.getAttribute('aria-label'),
    );
    expect(labels).toEqual(['Twitter', 'Instagram', 'Facebook', 'YouTube']);
  });

  it('exposes email and phone as actionable links', () => {
    const hrefs = Array.from(render().querySelectorAll('address a')).map((a) =>
      a.getAttribute('href'),
    );
    expect(hrefs).toEqual(['mailto:hello@website.com', 'tel:+025421234560']);
  });
});
