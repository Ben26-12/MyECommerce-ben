import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./CartDrawer.module.scss";
import ProductItem from "@/components/SlideBar/components/ProductItem";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import config from "@/config";
import { useContext, useMemo } from "react";
import { slideBarContext } from "@/contexts/SlideBarProvider";
import BlankCart from "@/components/BlankCart";
const cx = classNames.bind(styles);
function CartDrawer() {
  const { setIsOpen, listProductCart } = useContext(slideBarContext);
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  const cartSubtotal = useMemo(() => {
    return listProductCart.reduce((acc, currV) => acc + currV.total, 0);
  }, [listProductCart]);

  return (
    <div className={cx("cart")}>
      <div className={cx("cart-body")}>
        {listProductCart.length <= 0 ? (
          <BlankCart />
        ) : (
          listProductCart.map((product, index) => {
            return <ProductItem key={index} product={product} />;
          })
        )}
      </div>

      <div className={cx("cart-footer")}>
        <div className={cx("cart-calculation")}>
          <span className={cx("subtotal")}>Subtotal:</span>
          <span className={cx("cart-price")}>${cartSubtotal.toFixed(2)}</span>
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
          onClick={() => {
            if (listProductCart.length > 0) {
              handleNavigate(config.routes.checkout);
            }
          }}
          large
          className={cx("checkout-btn")}
          disabled={listProductCart.length <= 0}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default CartDrawer;
