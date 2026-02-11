import classNames from "classnames/bind";
import styles from "./CartSummary.module.scss";
import { useNavigate } from "react-router-dom";
import config from "@/config";
import PaymentMethods from "@/components/PaymentMethods";

const cx = classNames.bind(styles);

function CartSummary({ subtotal }) {
  const navigate = useNavigate();

  return (
    <>
      <div className={cx("cart-totals")}>
        <h3>CART TOTALS</h3>
        <div className={cx("total-row")}>
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className={cx("total-row", "grand-total")}>
          <span>TOTAL</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <button
          className={cx("checkout-btn")}
          onClick={() => navigate(config.routes.checkout)}
        >
          PROCEED TO CHECKOUT
        </button>
        <button
          className={cx("continue-btn")}
          onClick={() => navigate(config.routes.shop)}
        >
          CONTINUE SHOPPING
        </button>
        <PaymentMethods />
      </div>
    </>
  );
}

export default CartSummary;
