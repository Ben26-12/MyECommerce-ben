import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import CartTable from "@/Pages/Cart/components/CartTable";
import CartSummary from "@/Pages/Cart/components/CartSummary";
import { useContext, useMemo } from "react";
import { slideBarContext } from "@/contexts/SlideBarProvider";
import BlankCart from "@/components/BlankCart";
import Stepper from "@/components/Stepper";

const cx = classNames.bind(styles);
function Cart() {
  const { listProductCart } = useContext(slideBarContext);

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
