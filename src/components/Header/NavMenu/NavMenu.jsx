import classNames from "classnames/bind";

import styles from "./NavMenu.module.scss";
const cx = classNames.bind(styles);
import { NavLink } from "react-router-dom";
function NavMenu({ item }) {
  let Component = "a";
  const props = {};
  if (item.to) {
    Component = NavLink;
    props.to = item.to;
  } else if (item.href) {
    Component = "a";
    props.href = item.href;
  }

  const navLinkClass = ({ isActive }) => {
    return cx("nav-link", { active: isActive });
  };

  return (
    <>
      {Component === "a" ? (
        <a className={cx("nav-link")} {...props}>
          <div className={cx("nav-item")}>{item.title}</div>
        </a>
      ) : (
        <NavLink className={navLinkClass} {...props}>
          <div className={cx("nav-item")}>{item.title}</div>
        </NavLink>
      )}
    </>
  );
}

export default NavMenu;
