import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { Testimonial } from '../../shared/models/testimonial.model';

@Component({
  selector: 'app-testimonial-card',
  imports: [HlmCardImports, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  templateUrl: './testimonial-card.html',
})
export class TestimonialCard {
  readonly testimonial = input.required<Testimonial>();
}
