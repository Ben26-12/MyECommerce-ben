import classNames from "classnames/bind";
import styles from "./CartTable.module.scss";

import CartProductLine from "@/Pages/Cart/components/CartProductLine";
import { useContext } from "react";
import { slideBarContext } from "@/contexts/SlideBarProvider";

const cx = classNames.bind(styles);

function CartTable({ items }) {
  const { handleDeleteCart } = useContext(slideBarContext);
  return (
    <div className={cx("left-content")}>
      <table className={cx("product-table")}>
        <thead className={cx("desktop-detail")}>
          <tr>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>SKU</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <CartProductLine item={item} key={item.productId} />
          ))}
        </tbody>
      </table>

      <div className={cx("coupon-section")}>
        <div className={cx("coupon-input")}>
          <input type="text" placeholder="Coupon code" />
          <button>OK</button>
        </div>
        <button onClick={handleDeleteCart} className={cx("clear-btn")}>
          CLEAR CART
        </button>
      </div>
    </div>
  );
}

export default CartTable;
