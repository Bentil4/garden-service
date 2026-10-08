export interface IconCardItem {
  readonly id: string;
  readonly iconSrc: string;
  readonly title: string;
  readonly highlight?: string;
  readonly description: string;
  readonly featured?: boolean;
}
