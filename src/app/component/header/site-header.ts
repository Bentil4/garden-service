import { ChangeDetectionStrategy, Component, ElementRef, signal, viewChild } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { NAV_LINKS } from '../../shared/data/nav-links.data';

@Component({
  selector: 'app-site-header',
  imports: [HlmButtonImports, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-header.html',
  host: {
    class: 'absolute inset-x-0 top-0 z-20 block',
    '(keydown.escape)': 'closeMenuAndRestoreFocus()',
  },
})
export class SiteHeader {
  protected readonly navLinks = NAV_LINKS;
  protected readonly menuOpen = signal(false);

  private readonly menuToggle = viewChild.required<ElementRef<HTMLButtonElement>>('menuToggle');

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected closeMenuAndRestoreFocus(): void {
    if (!this.menuOpen()) {
      return;
    }
    this.closeMenu();
    this.menuToggle().nativeElement.focus();
  }
}
