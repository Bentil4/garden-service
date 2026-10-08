import { TestBed } from '@angular/core/testing';
import { SiteHeader } from './site-header';

describe('SiteHeader', () => {
  function createHeader() {
    const fixture = TestBed.createComponent(SiteHeader);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    const toggle = root.querySelector<HTMLButtonElement>('button[aria-controls="mobile-menu"]')!;
    return { fixture, root, toggle };
  }

  it('renders the primary navigation links', () => {
    const { root } = createHeader();
    const labels = Array.from(root.querySelectorAll('nav[aria-label="Primary"] a')).map((a) =>
      a.textContent?.trim(),
    );
    expect(labels).toEqual(['Home', 'About Us', 'Pages']);
  });

  it('keeps the mobile menu closed by default', () => {
    const { root, toggle } = createHeader();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(root.querySelector('#mobile-menu')).toBeNull();
  });

  it('opens the mobile menu when the toggle is clicked', () => {
    const { fixture, root, toggle } = createHeader();
    toggle.click();
    fixture.detectChanges();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(root.querySelector('#mobile-menu')).not.toBeNull();
  });

  it('closes the menu and returns focus to the toggle on Escape', () => {
    const { fixture, root, toggle } = createHeader();
    toggle.click();
    fixture.detectChanges();
    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();
    expect(root.querySelector('#mobile-menu')).toBeNull();
    expect(document.activeElement).toBe(toggle);
  });
});
