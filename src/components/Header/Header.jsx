import classNames from "classnames/bind";
import {
  SOCIAL_DATA,
  HEADER_ACTIONS,
  NAV_ACTIONS,
  NAV_MENU,
} from "./Constants";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import images from "@assets/Images";
import BoxIcon from "@components/Header/BoxIcon";
import NavMenu from "@components/Header/NavMenu";
import config from "@/config";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const wrapperClass = cx("wrapper", {
    sticky: isScrolled,
  });
  return (
    <header className={wrapperClass}>
      <div className={cx("container")}>
        {/* left menu  */}
        <div className={cx("left-menu")}>
          <div className={cx("box-icon")}>
            {SOCIAL_DATA.map((item, index) => {
              return <BoxIcon item={item} key={index} />;
            })}
          </div>
          <div className={cx("nav-menu")}>
            {NAV_MENU.map((item, index) => {
              return (
                <div key={index} className={cx("nav-item")}>
                  <NavMenu item={item} />
                </div>
              );
            })}
          </div>
        </div>
        {/* logo */}
        <div className={cx("logo")}>
          <Link to={config.routes.home}>
            <img src={images.logo} alt="BenStore" />
          </Link>
        </div>
        {/* left menu  */}
        <div className={cx("right-menu")}>
          <div className={cx("nav-menu")}>
            {NAV_ACTIONS.map((item, index) => {
              return (
                <div key={index} className={cx("nav-item")}>
                  <NavMenu item={item} />
                </div>
              );
            })}
          </div>
          <div className={cx("box-icon")}>
            {HEADER_ACTIONS.map((item, index) => {
              return <BoxIcon item={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
