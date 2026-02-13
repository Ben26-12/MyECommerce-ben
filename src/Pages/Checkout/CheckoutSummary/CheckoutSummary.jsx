import classNames from "classnames/bind";
import styles from "./CheckoutSummary.module.scss";
import Button from "@/components/Button";
import PaymentMethods from "@/components/PaymentMethods";
import { useContext } from "react";
import { slideBarContext } from "@/contexts/SlideBarProvider";
import { MOCK_USER_ID } from "@/components/ProductCard/constants";
import { useNavigate } from "react-router-dom";
import config from "@/config";

const cx = classNames.bind(styles);

function CheckoutSummary({ formik, total, displayProducts }) {
  const { deleteCartProduct } = useContext(slideBarContext);
  const navigate = useNavigate();
  const handleBackToProduct = (productId) => {
    navigate(config.routes.product + `/${productId}`);
  };
  const payments = [
    {
      id: "check",
      title: "Check payments",
      desc: "Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.",
    },
    {
      id: "cod",
      title: "Cash on delivery",
      desc: "Pay with cash when the order arrives.",
    },
  ];

  return (
    <div className={cx("order-summary")}>
      <div className={cx("summary-box")}>
        <h3 className={cx("title")}>YOUR ORDER</h3>
        {displayProducts.map((productCart, index) => {
          return (
            <div key={index} className={cx("product-item")}>
              <div className={cx("product-info")}>
                <img
                  onClick={() => handleBackToProduct(productCart.productId)}
                  src={productCart.images[0]}
                  alt="product"
                  className={cx("product-img")}
                />
                <div className={cx("product-stats")}>
                  <p
                    onClick={() => handleBackToProduct(productCart.productId)}
                    className={cx("product-name")}
                  >
                    {productCart.name}
                  </p>
                  <div className={cx("product-meta")}>
                    <div className={cx("quantity")}>{productCart.quantity}</div>
                    <div className={cx("product-price")}>
                      × ${productCart.price}
                    </div>
                  </div>
                  <p className={cx("product-meta")}>Size: {productCart.size}</p>
                  <Button
                    onClick={() =>
                      deleteCartProduct(productCart.productId, MOCK_USER_ID)
                    }
                    className={cx("remove-btn")}
                  >
                    Remove
                  </Button>
                </div>
              </div>
              <div className={cx("product-total")}>
                ${productCart.total.toFixed(2)}
              </div>
            </div>
          );
        })}

        <div className={cx("summary-row")}>
          <span>Subtotal</span>
          <span>${total}</span>
        </div>
        <div className={cx("summary-row", "total")}>
          <span>TOTAL</span>
          <span className={cx("total-price")}>${total}</span>
        </div>
        <div className={cx("payment-methods")}>
          {payments.map((payment) => {
            return (
              <div key={payment.id} className={cx("payment-option")}>
                <input
                  className={
                    formik.values.paymentMethod === payment.id
                      ? cx("active")
                      : ""
                  }
                  checked={formik.values.paymentMethod === payment.id}
                  type="radio"
                  id={payment.id}
                  name="payment"
                  onChange={() =>
                    formik.setFieldValue("paymentMethod", payment.id)
                  }
                />
                <label htmlFor={payment.id}>{payment.title}</label>
                <p className={cx("payment-desc")}>{payment.desc}</p>
              </div>
            );
          })}
        </div>

        <Button
          type="button"
          onClick={formik.handleSubmit}
          large
          className={cx("place-order-btn")}
        >
          PLACE ORDER
        </Button>

        <PaymentMethods />
        <p className={cx("secure-text")}>Your Payment is 100% Secure</p>
      </div>
    </div>
  );
}

export default CheckoutSummary;
