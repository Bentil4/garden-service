import { Directive } from '@angular/core';
import { BrnAccordionItem } from '@spartan-ng/brain/accordion';
import { classes } from '@spartan-ng/helm/utils';

@Directive({
  selector: '[hlmAccordionItem],hlm-accordion-item',
  hostDirectives: [
    {
      directive: BrnAccordionItem,
      inputs: ['isOpened', 'disabled'],
      outputs: ['openedChange'],
    },
  ],
  host: {
    'data-slot': 'accordion-item',
  },
})
export class HlmAccordionItem {
  constructor() {
    classes(
      () =>
        'flex flex-col overflow-hidden rounded-2xl bg-card text-foreground shadow-[18px_15px_35px_0_rgb(0_0_0/0.09)] data-open:bg-primary data-open:text-primary-foreground',
    );
  }
}
