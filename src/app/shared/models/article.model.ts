export interface Article {
  readonly id: string;
  readonly category: string;
  readonly title: string;
  readonly excerpt: string;
  readonly comments: number;
  readonly views: string;
  readonly publishedLabel: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
}
