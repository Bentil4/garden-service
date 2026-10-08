import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SERVICES } from '../../shared/data/services.data';
import { IconCard } from '../icon-card/icon-card';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-services-section',
  imports: [IconCard, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services-section.html',
  host: { class: 'block' },
})
export class ServicesSection {
  protected readonly services = SERVICES;
}
