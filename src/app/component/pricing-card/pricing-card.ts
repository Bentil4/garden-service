import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleCheck } from '@ng-icons/lucide';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';
import { FEATURED_PLAN_THEME, STANDARD_PLAN_THEME } from '../../shared/data/plan-themes.data';
import { PricingPlan } from '../../shared/models/pricing-plan.model';

@Component({
  selector: 'app-pricing-card',
  imports: [
    CurrencyPipe,
    HlmBadgeImports,
    HlmButtonImports,
    HlmCardImports,
    HlmSeparatorImports,
    NgIcon,
  ],
  providers: [provideIcons({ lucideCircleCheck })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  templateUrl: './pricing-card.html',
})
export class PricingCard {
  readonly plan = input.required<PricingPlan>();

  protected readonly theme = computed(() =>
    this.plan().featured ? FEATURED_PLAN_THEME : STANDARD_PLAN_THEME,
  );
}
