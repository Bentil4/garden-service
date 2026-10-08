import { Directive } from '@angular/core';
import { classes } from '@spartan-ng/helm/utils';

@Directive({
  selector: '[hlmCardTitle]',
  host: { 'data-slot': 'card-title' },
})
export class HlmCardTitle {
  constructor() {
    classes(
      () => 'font-heading text-[1.375rem]/7 font-semibold text-foreground sm:text-[1.75rem]/8',
    );
  }
}
