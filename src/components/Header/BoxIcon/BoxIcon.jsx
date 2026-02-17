import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@components/Button";
import styles from "./BoxIcon.module.scss";
import { useContext } from "react";
import { slideBarContext } from "@/contexts/SlideBarProvider";
import { useLocation } from "react-router-dom";
import config from "@/config";
import LoadingIcon from "@/components/LoadingIcon";
const cx = classNames.bind(styles);
function BoxIcon({ item }) {
  const { setIsOpen, setType } = useContext(slideBarContext);

  const location = useLocation();

  const handleCLick = () => {
    switch (item.type) {
      case "cart":
        if (
          //nếu item có type là cart mà không ở checkout hoặc cart thì mới mở
          location.pathname === config.routes.cart ||
          location.pathname === config.routes.checkout
        ) {
          return;
        } else {
          setType(item.type);
          setIsOpen(true);
        }
        break;
    }
  };
  return (
    <Button className={cx("icon")} onClick={handleCLick}>
      <FontAwesomeIcon icon={item.icon} />
      {item.count > 0 && <p className={cx("count")}>{item.count}</p>}
    </Button>
  );
}

export default BoxIcon;
