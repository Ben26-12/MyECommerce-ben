import HeaderOnly from "@/components/Layout/HeaderOnly";
import Home from "@/Pages/Home";
import Shop from "@/Pages/Shop";
import About from "@/Pages/About";
import Contact from "@/Pages/Contact";
import config from "@/config";
import Cart from "@/Pages/Cart";
import Checkout from "@/Pages/Checkout";
import Product from "@/Pages/Product";
import ThankYou from "@/Pages/Thankyou";
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
