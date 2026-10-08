import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideFacebook,
  lucideInstagram,
  lucideMail,
  lucideMapPin,
  lucidePhone,
  lucideTwitter,
  lucideYoutube,
} from '@ng-icons/lucide';
import { CONTACT_DETAILS, FOOTER_LINKS, SOCIAL_LINKS } from '../../shared/data/footer.data';

@Component({
  selector: 'app-site-footer',
  imports: [NgIcon],
  providers: [
    provideIcons({
      lucideFacebook,
      lucideInstagram,
      lucideMail,
      lucideMapPin,
      lucidePhone,
      lucideTwitter,
      lucideYoutube,
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-footer.html',
  host: { class: 'block' },
})
export class SiteFooter {
  protected readonly links = FOOTER_LINKS;
  protected readonly contacts = CONTACT_DETAILS;
  protected readonly socials = SOCIAL_LINKS;
}
