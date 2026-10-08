export interface PricingPlan {
  readonly id: string;
  readonly name: string;
  readonly badge: string;
  readonly pricePerMonth: number;
  readonly features: readonly string[];
  readonly featured: boolean;
}
