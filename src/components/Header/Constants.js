import config from "@/config";
import {
  faFacebookF,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

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
    href: "https://www.linkedin.com/in/nguyenly2612/",
  },
];

export const HEADER_ACTIONS = [
  {
    icon: faHeart,
    href: "",
    count: 0,
    type: "wishList",
  },
  {
    icon: faShoppingCart,
    href: "",
    count: 0,
    type: "cart",
  },
];
export const NAV_MENU = [
  { title: "Home", to: config.routes.home },
  { title: "Collection", to: config.routes.shop },
  { title: "About us", to: config.routes.about },
];

export const NAV_ACTIONS = [
  { title: "Contacts", to: config.routes.contact },
  { title: "Sign In", to: "" },
  { title: "Search", to: config.routes.search },
];
