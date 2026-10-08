import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { IconCardItem } from '../../shared/models/icon-card-item.model';
import { HighlightedText } from '../highlighted-text/highlighted-text';

@Component({
  selector: 'app-icon-card',
  imports: [HlmCardImports, NgOptimizedImage, HighlightedText],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  templateUrl: './icon-card.html',
})
export class IconCard {
  readonly item = input.required<IconCardItem>();
}
