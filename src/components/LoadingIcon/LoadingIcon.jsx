// components/LoadingIcon/index.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./LoadingIcon.module.scss";

const cx = classNames.bind(styles);

function LoadingIcon({ className }) {
  return (
    <span className={cx("spinner", className)}>
      <FontAwesomeIcon icon={faCircleNotch} />
    </span>
  );
}

export default LoadingIcon;
