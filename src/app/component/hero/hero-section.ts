import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HERO_STATS } from '../../shared/data/hero-stats.data';

@Component({
  selector: 'app-hero-section',
  imports: [HlmButtonImports, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero-section.html',
  host: { class: 'block' },
})
export class HeroSection {
  protected readonly stats = HERO_STATS;
}
