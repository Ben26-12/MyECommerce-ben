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
import { useContext, useEffect, useMemo, useState } from "react";
import { slideBarContext } from "@/contexts/SlideBarProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/Button";
import MobileMenu from "@/components/Header/MobileMenu";

const cx = classNames.bind(styles);

function Header() {
  const { listProductCart } = useContext(slideBarContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false);
  const cartCount = useMemo(() => {
    return listProductCart.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);
  });
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
        {/* menu trên mobile  */}
        <MobileMenu
          isOpen={isOpenMenuMobile}
          onClose={() => setIsOpenMenuMobile(false)}
        />
        <Button
          onClick={() => setIsOpenMenuMobile(true)}
          className={cx("menu-btn")}
        >
          <FontAwesomeIcon icon={faBars} />
        </Button>
        {/* logo */}
        <div className={cx("logo")}>
          <Link to={config.routes.home}>
            <img src={images.logo} alt="BenStore" />
          </Link>
        </div>
        {/* left menu  */}
        <div className={cx("left-menu")}>
          <div className={cx("nav-menu")}>
            {NAV_ACTIONS.map((item, index) => {
              return (
                <div key={index} className={cx("nav-item")}>
                  <NavMenu item={item} />
                </div>
              );
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
        {/* right menu  */}
        <div className={cx("right-menu")}>
          <div className={cx("box-icon")}>
            {SOCIAL_DATA.map((item, index) => {
              return <BoxIcon item={item} key={index} />;
            })}
          </div>
          <div className={cx("box-icon")}>
            {HEADER_ACTIONS.map((item, index) => {
              if (item.hasCount) {
                item = { ...item, count: cartCount };
              }
              return <BoxIcon item={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
