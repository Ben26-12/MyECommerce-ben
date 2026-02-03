import config from "@/config";
import {
  faFacebookF,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faSync,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

export const SOCIAL_DATA = [
  {
    icon: faFacebookF,
    href: "https://facebook.com",
  },
  {
    icon: faYoutube,
    href: "https://youtube.com",
  },
  {
    icon: faLinkedin,
    href: "https://linkedin.com",
  },
];

export const HEADER_ACTIONS = [
  {
    icon: faSync,
    href: "#",
  },
  {
    icon: faHeart,
    href: "#",
  },
  {
    icon: faShoppingCart,
    href: "#",
    count: 0,
  },
];
export const NAV_MENU = [
  { title: "Elements", href: config.routes.elements },
  { title: "Our Shop", to: config.routes.shop },
  { title: "About us", to: config.routes.about },
];

export const NAV_ACTIONS = [
  { title: "Contacts", to: config.routes.contact },
  { title: "Sign In", to: config.routes.login },
  { title: "Search", to: config.routes.search },
];
