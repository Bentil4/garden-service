import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ARTICLES } from '../../shared/data/articles.data';
import { ArticleCard } from '../article-card/article-card';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-blog-section',
  imports: [ArticleCard, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './blog-section.html',
  host: { class: 'block' },
})
export class BlogSection {
  protected readonly articles = ARTICLES;
}
