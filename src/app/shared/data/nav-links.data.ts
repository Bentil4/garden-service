import { NavLink } from '../models/nav-link.model';

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Home', href: '#main' },
  { label: 'About Us', href: '#about' },
  { label: 'Pages', href: '#', hasChevron: true },
];
