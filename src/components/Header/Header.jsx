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
const cx = classNames.bind(styles);
function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        {/* box icon 1 */}
        <div className={cx("box-icon")}>
          {SOCIAL_DATA.map((item, index) => {
            return <BoxIcon item={item} key={index} />;
          })}
        </div>
        {/* nav menu 1 */}
        <div className={cx("nav-menu")}>
          {NAV_MENU.map((item, index) => {
            return <NavMenu item={item} key={index} />;
          })}
        </div>
        {/* logo */}
        <div className={cx("logo")}>
          <Link to={config.routes.home}>
            <img src={images.logo} alt="BenStore" />
          </Link>
        </div>
        {/* nav menu 2 */}
        <div className={cx("nav-menu")}>
          {NAV_ACTIONS.map((item, index) => {
            return <NavMenu item={item} key={index} />;
          })}
        </div>
        {/* box icon 2 */}
        <div className={cx("box-icon")}>
          {HEADER_ACTIONS.map((item, index) => {
            return <BoxIcon item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
