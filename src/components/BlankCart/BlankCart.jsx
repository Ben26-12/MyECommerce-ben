import classNames from "classnames/bind";
import styles from "./BlankCart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import config from "@/config";
const cx = classNames.bind(styles);

function BlankCart({ hasReturn }) {
  const navigate = useNavigate();
  return (
    <div className={cx("blank-cart")}>
      <div className={cx("blank-icon")}>
        <FontAwesomeIcon icon={faCartPlus} />
      </div>
      <h4 className={cx("blank-title")}>YOUR SHOPPING CART IS EMPTY</h4>
      <span className={cx("blank-content")}>
        We invite you to get acquainted with an assortment of our shop. Surely
        you can find something for yourself!
      </span>
      {hasReturn && (
        <button
          className={cx("return-btn")}
          onClick={() => navigate(config.routes.home)}
        >
          RETURN TO SHOP
        </button>
      )}
    </div>
  );
}

export default BlankCart;
