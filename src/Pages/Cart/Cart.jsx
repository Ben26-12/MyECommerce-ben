import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import Stepper from "@/Pages/Cart/components/Stepper";
import CartTable from "@/Pages/Cart/components/CartTable";
import CartSummary from "@/Pages/Cart/components/CartSummary";
import { useContext, useEffect, useMemo } from "react";
import { slideBarContext } from "@/contexts/SlideBarProvider";
import { MOCK_USER_ID } from "@/components/ProductCard/constants";
import BlankCart from "@/components/BlankCart";

const cx = classNames.bind(styles);
function Cart() {
  const { listProductCart, handleGetListProductsCart, setIsOpen } =
    useContext(slideBarContext);

  useEffect(() => {
    handleGetListProductsCart(MOCK_USER_ID, "cart");
  }, []);

  const subtotal = useMemo(() => {
    return (listProductCart || []).reduce(
      (acc, cur) => acc + (cur.total || 0),
      0,
    );
  }, [listProductCart]);

  return (
    <div className={cx("wrapper")}>
      <Stepper currentStep={1} />
      {listProductCart && listProductCart.length > 0 ? (
        <div className={cx("container")}>
          <div className={cx("left-content")}>
            <CartTable items={listProductCart} />
          </div>
          <div className={cx("right-content")}>
            <CartSummary subtotal={subtotal} />
          </div>
        </div>
      ) : (
        <BlankCart hasReturn />
      )}
    </div>
  );
}

export default Cart;
