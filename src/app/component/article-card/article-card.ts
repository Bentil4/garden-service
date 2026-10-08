import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideClock, lucideEye, lucideMessageSquare } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { Article } from '../../shared/models/article.model';

@Component({
  selector: 'app-article-card',
  imports: [HlmButtonImports, NgIcon, NgOptimizedImage],
  providers: [provideIcons({ lucideClock, lucideEye, lucideMessageSquare })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  templateUrl: './article-card.html',
})
export class ArticleCard {
  readonly article = input.required<Article>();
}
