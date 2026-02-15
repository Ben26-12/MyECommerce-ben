import classNames from "classnames/bind";
import styles from "./ThankYou.module.scss";
import { Link, useLocation } from "react-router-dom";
import config from "@/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { SOCIAL_DATA } from "@/components/Header/Constants";
import BoxIcon from "@/components/Header/BoxIcon";
const cx = classNames.bind(styles);

function ThankYou() {
  const orderData = useLocation().state;

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("header")}>
          <div className={cx("icon-check")}>
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <h1 className={cx("title")}>
            Thank you, {orderData.firstName} {orderData.lastName} !
          </h1>
          <p className={cx("desc")}>
            The order has been placed successfully! Thank you for shopping with
            us
          </p>
        </div>
        <div className={cx("content-grid")}>
          <div className={cx("info-box")}>
            <h3 className={cx("box-title")}>Connect With Us</h3>
            <div className={cx("social-icons")}>
              {SOCIAL_DATA.map((item) => {
                return <BoxIcon item={item} />;
              })}
            </div>
          </div>

          <div className={cx("info-box")}>
            <h3 className={cx("box-title")}>Visit Our Website</h3>
            <Link to={config.routes.home} className={cx("visit-btn")}>
              Visit Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
