import { PlanTheme } from '../models/plan-theme.model';

export const STANDARD_PLAN_THEME: PlanTheme = {
  header: 'bg-primary text-primary-foreground',
  price: 'border-b-2 border-primary bg-card text-primary',
  body: 'bg-card text-primary',
  separator: 'bg-primary/30',
  badge: 'secondary',
  button: 'default',
};

export const FEATURED_PLAN_THEME: PlanTheme = {
  header: 'bg-card text-primary',
  price: 'border-b-4 border-card bg-primary text-primary-foreground',
  body: 'bg-primary text-primary-foreground',
  separator: 'bg-primary-foreground/40',
  badge: 'default',
  button: 'secondary',
};
