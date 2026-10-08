import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PRICING_PLANS } from '../../shared/data/pricing.data';
import { PricingCard } from '../pricing-card/pricing-card';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-pricing-section',
  imports: [PricingCard, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pricing-section.html',
  host: { class: 'block' },
})
export class PricingSection {
  protected readonly plans = PRICING_PLANS;
}
