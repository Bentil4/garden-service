import { Directive } from '@angular/core';
import { BrnFieldControlDescribedBy } from '@spartan-ng/brain/field';
import { BrnInput } from '@spartan-ng/brain/input';
import { classes } from '@spartan-ng/helm/utils';

@Directive({
  selector: '[hlmInput]',
  hostDirectives: [
    { directive: BrnInput, inputs: ['id', 'forceInvalid'] },
    BrnFieldControlDescribedBy,
  ],
  host: { 'data-slot': 'input' },
})
export class HlmInput {
  constructor() {
    classes(
      () =>
        'h-auto min-h-14 w-full min-w-0 rounded-[2.5rem] border border-primary-foreground bg-transparent px-4 py-4 text-base/6 font-medium text-primary-foreground transition-colors outline-none placeholder:text-primary-foreground focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ink focus-visible:ring-2 focus-visible:ring-white data-[matches-spartan-invalid=true]:border-4 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
    );
  }
}
