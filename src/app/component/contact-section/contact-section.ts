import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ContactForm } from '../contact-form/contact-form';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-contact-section',
  imports: [ContactForm, NgOptimizedImage, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-section.html',
  host: { class: 'block' },
})
export class ContactSection {}
