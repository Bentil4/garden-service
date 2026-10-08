export type PlanBadgeVariant = 'default' | 'secondary';
export type PlanButtonVariant = 'default' | 'secondary';

export interface PlanTheme {
  readonly header: string;
  readonly price: string;
  readonly body: string;
  readonly separator: string;
  readonly badge: PlanBadgeVariant;
  readonly button: PlanButtonVariant;
}
