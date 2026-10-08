import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { GALLERY_AREA_CLASSES } from '../../shared/data/gallery-layout.data';
import { GALLERY_IMAGES } from '../../shared/data/gallery.data';
import { SectionHeading } from '../section-heading/section-heading';

@Component({
  selector: 'app-gallery-section',
  imports: [NgOptimizedImage, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './gallery-section.html',
  host: { class: 'block' },
})
export class GallerySection {
  protected readonly images = GALLERY_IMAGES;
  protected readonly areaClasses = GALLERY_AREA_CLASSES;
}
