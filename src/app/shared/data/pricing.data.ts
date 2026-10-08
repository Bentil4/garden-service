import { PricingPlan } from '../models/pricing-plan.model';

const BASE_FEATURES = [
  'Initial Consultation',
  'Labor Costs',
  'Materials and Plants',
  'Equipment and Machinery',
] as const;

export const PRICING_PLANS: readonly PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic Plan',
    badge: 'Package',
    pricePerMonth: 40,
    features: BASE_FEATURES,
    featured: false,
  },
  {
    id: 'standard',
    name: 'Standard Plan',
    badge: 'Package',
    pricePerMonth: 80,
    features: [...BASE_FEATURES, 'Permits and Inspection Fees'],
    featured: false,
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    badge: 'Promo',
    pricePerMonth: 120,
    features: [...BASE_FEATURES, 'Permits and Inspection Fees', 'Maintenance Packages'],
    featured: true,
  },
];
