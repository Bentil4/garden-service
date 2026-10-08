import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { STRENGTHS } from '../../shared/data/strengths.data';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-why-choose-section',
  imports: [NgOptimizedImage, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './why-choose-section.html',
  host: { class: 'block' },
})
export class WhyChooseSection {
  protected readonly strengths = STRENGTHS;
}
