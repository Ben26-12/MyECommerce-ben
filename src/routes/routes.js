import { lazy } from "react";
const Home = lazy(() => import("@/Pages/Home"));
const Shop = lazy(() => import("@/Pages/Shop"));
const About = lazy(() => import("@/Pages/About"));
const Contact = lazy(() => import("@/Pages/Contact"));
const Cart = lazy(() => import("@/Pages/Cart"));
const Checkout = lazy(() => import("@/Pages/Checkout"));
const Product = lazy(() => import("@/Pages/Product"));
const ThankYou = lazy(() => import("@/Pages/Thankyou"));

import config from "@/config";
export const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.shop,
    component: Shop, //collection page
  },
  {
    path: config.routes.about,
    component: About,
  },
  {
    path: config.routes.contact,
    component: Contact,
  },
  {
    path: config.routes.cart,
    component: Cart,
  },
  {
    path: config.routes.product + "/:id",
    component: Product,
  },
  {
    path: config.routes.checkout,
    component: Checkout,
  },
  {
    path: config.routes.thankyou,
    component: ThankYou,
    layout: null,
  },
];

export const privateRoutes = {};

//không truyền gì -> mainLayout
//có truyền layout = null -> không cần layout
//có truyền thì lấy
