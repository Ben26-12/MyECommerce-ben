import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@components/Button";
import styles from "./BoxIcon.module.scss";

const cx = classNames.bind(styles);
function BoxIcon({ item }) {
  return (
    <Button className={cx("icon")} href={item.href}>
      <FontAwesomeIcon icon={item.icon} />
      {item.count === undefined || <p className={cx("count")}>{item.count}</p>}
    </Button>
  );
}

export default BoxIcon;
