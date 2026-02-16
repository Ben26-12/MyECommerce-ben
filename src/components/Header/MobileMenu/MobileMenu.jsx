import classNames from "classnames/bind";
import styles from "./MobileMenu.module.scss";
import { NAV_ACTIONS, NAV_MENU } from "../Constants";
import NavMenu from "@components/Header/NavMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/Button";
import { useEffect } from "react";

const cx = classNames.bind(styles);

function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  return (
    <div className={cx("wrapper", { open: isOpen })}>
      <div className={cx("overlay")} onClick={onClose}></div>

      <div className={cx("content")}>
        <div className={cx("header-menu")}>
          <span className={cx("title")}>Menu</span>
          <Button className={cx("close-btn")} onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </Button>
        </div>

        <nav className={cx("nav-list")}>
          {[...NAV_ACTIONS, ...NAV_MENU].map((item, index) => (
            <div key={index} className={cx("menu-item")} onClick={onClose}>
              <NavMenu item={item} />
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
