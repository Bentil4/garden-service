import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BlogSection } from '../../component/blog-section/blog-section';
import { ContactSection } from '../../component/contact-section/contact-section';
import { FaqSection } from '../../component/faq-section/faq-section';
import { GallerySection } from '../../component/gallery-section/gallery-section';
import { HeroSection } from '../../component/hero/hero-section';
import { AboutSection } from '../../component/about-section/about-section';
import { PricingSection } from '../../component/pricing-section/pricing-section';
import { ServicesSection } from '../../component/services-section/services-section';
import { TestimonialsSection } from '../../component/testimonials-section/testimonials-section';
import { WhyChooseSection } from '../../component/why-choose-section/why-choose-section';
import { SiteFooter } from '../../component/site-footer/site-footer';
import { SiteHeader } from '../../component/header/site-header';

@Component({
  selector: 'app-landing-page',
  imports: [
    SiteHeader,
    HeroSection,
    AboutSection,
    WhyChooseSection,
    ServicesSection,
    PricingSection,
    GallerySection,
    TestimonialsSection,
    FaqSection,
    BlogSection,
    ContactSection,
    SiteFooter,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './landing-page.html',
})
export class LandingPage {}
