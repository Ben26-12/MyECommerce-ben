import classNames from "classnames/bind";

import styles from "./CartDrawer.module.scss";
import ProductItem from "@/components/SlideBar/components/ProductItem";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import config from "@/config";
import { useContext } from "react";
import { slideBarContext } from "@/contexts/SlideBarProvider";
const cx = classNames.bind(styles);
function CartDrawer() {
  const { setIsOpen } = useContext(slideBarContext);
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    setIsOpen(false);
    navigate(path);
  };
  return (
    <div className={cx("cart")}>
      <div className={cx("cart-body")}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>

      <div className={cx("cart-footer")}>
        <div className={cx("cart-calculation")}>
          <span className={cx("subtotal")}>Subtotal:</span>
          <span className={cx("cart-price")}>$239</span>
        </div>
      </div>
      <div className={cx("cart-actions")}>
        <Button
          onClick={() => handleNavigate(config.routes.cart)}
          large
          className={cx("viewCart-btn")}
        >
          View cart
        </Button>
        <Button
          onClick={() => handleNavigate(config.routes.checkout)}
          large
          className={cx("checkout-btn")}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default CartDrawer;
