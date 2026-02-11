import classNames from "classnames/bind";
import styles from "./PaymentMethods.module.scss";

const cx = classNames.bind(styles);

const PAYMENT_DATA = [
  {
    name: "Visa",
    src: "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg",
  },
  {
    name: "Master Card",
    src: "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg",
  },
  {
    name: "PayPal",
    src: "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg",
  },
  {
    name: "American Express",
    src: "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg",
  },
  {
    name: "Maestro",
    src: "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg",
  },
  {
    name: "Bitcoin",
    src: "https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg",
  },
];

function PaymentMethods() {
  return (
    <>
      <p className={cx("safe-checkout")}>
        GUARANTEED <span>SAFE</span> CHECKOUT
      </p>
      <div className={cx("payments")}>
        {PAYMENT_DATA.map((method, index) => (
          <span key={index} className={cx("method")}>
            <img
              className={cx("method-img")}
              src={method.src}
              alt={`Pay safely with ${method.name}`}
              width="90px"
              height="60px"
            />
          </span>
        ))}
      </div>
    </>
  );
}

export default PaymentMethods;
