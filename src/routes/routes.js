import HeaderOnly from "@/components/Layout/HeaderOnly";
import Home from "@/Pages/Home";
import Shop from "@/Pages/Shop";
import About from "@/Pages/About";
import Search from "@/Pages/Search";
import Contact from "@/Pages/Contact";
import config from "@/config";
import Cart from "@/Pages/Cart";
import WishList from "@/Pages/WishList";
import Checkout from "@/Pages/Checkout";
import Product from "@/Pages/Product";
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
    path: config.routes.search,
    component: Search,
    layout: HeaderOnly,
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
    path: config.routes.wishlist,
    component: WishList,
  },
  {
    path: config.routes.checkout,
    component: Checkout,
  },
];

export const privateRoutes = {};

//không truyền gì -> mainLayout
//có truyền layout = null -> không cần layout
//có truyền thì lấy
