import styles from "./Banner.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
import Button from "@components/Button";
import { Link } from "react-router-dom";
import config from "@/config";
function Banner({ backgroundURL, title, description, buttonTitle }) {
  return (
    <div
      className={cx("banner")}
      style={{ backgroundImage: `url(${backgroundURL})` }}
    >
      <div className={cx("content")}>
        <h1 className={cx("title")}>{title}</h1>
        <p className={cx("description")}>{description}</p>
        <Link to={config.routes.shop}>
          <Button className={cx("btn")} primary>
            {buttonTitle}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
