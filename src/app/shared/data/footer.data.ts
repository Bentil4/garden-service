import { ContactDetail } from '../models/contact-detail.model';
import { NavLink } from '../models/nav-link.model';
import { SocialLink } from '../models/social-link.model';

export const FOOTER_LINKS: readonly NavLink[] = [
  { label: 'About Us', href: '#about' },
  { label: 'Service', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
];

export const CONTACT_DETAILS: readonly ContactDetail[] = [
  {
    id: 'email',
    icon: 'lucideMail',
    label: 'Email',
    value: 'hello@website.com',
    href: 'mailto:hello@website.com',
  },
  {
    id: 'address',
    icon: 'lucideMapPin',
    label: 'Address',
    value: 'Riverside Building, County Hall, London SE1 7PB, United Kingdom',
  },
  {
    id: 'phone',
    icon: 'lucidePhone',
    label: 'Phone',
    value: '+02 5421234560',
    href: 'tel:+025421234560',
  },
];

// Social profile URLs are not defined yet.
export const SOCIAL_LINKS: readonly SocialLink[] = [
  { id: 'twitter', label: 'Twitter', href: '#', icon: 'lucideTwitter' },
  { id: 'instagram', label: 'Instagram', href: '#', icon: 'lucideInstagram' },
  { id: 'facebook', label: 'Facebook', href: '#', icon: 'lucideFacebook' },
  { id: 'youtube', label: 'YouTube', href: '#', icon: 'lucideYoutube' },
];
