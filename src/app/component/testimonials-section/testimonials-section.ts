import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TESTIMONIALS } from '../../shared/data/testimonials.data';
import { SectionHeading } from '../section-heading/section-heading';
import { TestimonialCard } from '../testimonial-card/testimonial-card';

@Component({
  selector: 'app-testimonials-section',
  imports: [SectionHeading, TestimonialCard],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './testimonials-section.html',
  host: { class: 'block' },
})
export class TestimonialsSection {
  protected readonly testimonials = TESTIMONIALS;
}
