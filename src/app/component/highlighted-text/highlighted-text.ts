import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { splitHighlight } from '../../utils/split-highlight.util';

@Component({
  selector: 'app-highlighted-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `{{ parts().before }}<span class="text-primary">{{ parts().highlight }}</span
    >{{ parts().after }}`,
})
export class HighlightedText {
  readonly text = input.required<string>();
  readonly highlight = input<string | undefined>();

  protected readonly parts = computed(() => splitHighlight(this.text(), this.highlight()));
}
