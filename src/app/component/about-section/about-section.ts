import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ABOUT_CARDS } from '../../shared/data/about.data';
import { IconCard } from '../icon-card/icon-card';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-about-section',
  imports: [IconCard, NgOptimizedImage, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about-section.html',
  host: { class: 'block' },
})
export class AboutSection {
  protected readonly cards = ABOUT_CARDS;
}
