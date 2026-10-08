import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HlmAccordionImports } from '@spartan-ng/helm/accordion';
import { FAQ_ITEMS } from '../../shared/data/faq.data';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-faq-section',
  imports: [HlmAccordionImports, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './faq-section.html',
  host: { class: 'block' },
})
export class FaqSection {
  protected readonly faqs = FAQ_ITEMS;
}
