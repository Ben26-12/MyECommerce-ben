import classNames from "classnames/bind";

import styles from "./Footer.module.scss";
import images from "@/assets/Images";
import NavMenu from "@/components/Header/NavMenu";
import { FOOTER_NAV } from "@/components/Footer/constants";
const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx("footer")}>
      <div className={cx("container")}>
        <div className={cx("logo")}>
          <a href="#">
            <img src={images.footerLogo} alt="BenStore" />
          </a>
        </div>
        <div className={cx("footer-nav")}>
          {FOOTER_NAV.map((item, index) => {
            return (
              <div key={index} className={cx("footer-item")}>
                <NavMenu item={item} />
              </div>
            );
          })}
        </div>
        <div className={cx("warranty")}>Guaranteed safe ckeckout</div>
        <div className={cx("payments")}>
          <img src={images.footerPayments} alt="payments" />
        </div>
        <div className={cx("copyrights")}>
          Copyright © 2024 XStore theme. Created by 8theme – WordPress
          WooCommerce themes.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
