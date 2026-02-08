import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Shop.module.scss";
import classNames from "classnames/bind";

import config from "@/config";
import Banner from "@/components/Banner";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import { Filter, ProductList } from "@/Pages/Shop/components";
import OurShopProvider from "@/contexts/OurShopProvider";
const cx = classNames.bind(styles);

function Shop() {
  const breadcrumbItems = [
    { label: "Home", path: config.routes.home },
    { label: "Shop" }, // Chặng cuối không cần path
  ];
  return (
    <OurShopProvider>
      <div className={cx("container")}>
        {/* navigation  */}
        <Breadcrumb items={breadcrumbItems} showBack />
        {/* Banner */}
        <Banner
          title="The Classics Make A Comeback"
          backgroundURL="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Background.jpeg"
          buttonTitle="Buy Now"
        />
        {/* Product List  */}
        <div className={cx("product-list-container")}>
          <Filter />
          <ProductList />
        </div>
      </div>
    </OurShopProvider>
  );
}

export default Shop;
