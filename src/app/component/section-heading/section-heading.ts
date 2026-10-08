import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { HighlightedText } from '../highlighted-text/highlighted-text';

@Component({
  selector: 'app-section-heading',
  imports: [HighlightedText],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <header [class]="headerClass()">
      <h2 [id]="headingId()" class="font-heading text-h2 font-semibold text-foreground">
        <app-highlighted-text [text]="title()" [highlight]="highlight()" />
      </h2>
      <p class="leading-6 font-medium text-muted-foreground">{{ description() }}</p>
    </header>
  `,
})
export class SectionHeading {
  readonly headingId = input.required<string>();
  readonly title = input.required<string>();
  readonly highlight = input<string | undefined>();
  readonly description = input.required<string>();
  readonly align = input<'start' | 'center'>('start');

  protected readonly headerClass = computed(() =>
    this.align() === 'center'
      ? 'mx-auto flex max-w-[939px] flex-col gap-6 text-center'
      : 'flex max-w-[823px] flex-col gap-6',
  );
}
