import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@components/Button";
import styles from "./BoxIcon.module.scss";
import { useContext } from "react";
import { slideBarContext } from "@/contexts/SlideBarProvider";
import { useLocation } from "react-router-dom";
import config from "@/config";
const cx = classNames.bind(styles);
function BoxIcon({ item }) {
  const { isOpen, setIsOpen, setType } = useContext(slideBarContext);
  const currentURL = useLocation();

  const handleCLick = () => {
    if (currentURL.pathname === config.routes.cart) {
      return;
    }

    if (item.type) {
      setType(item.type);
      setIsOpen(true);
    }
  };
  return (
    <Button className={cx("icon")} onClick={handleCLick} href={item.href}>
      <FontAwesomeIcon icon={item.icon} />
      {item.count > 0 && <p className={cx("count")}>{item.count}</p>}
    </Button>
  );
}

export default BoxIcon;
