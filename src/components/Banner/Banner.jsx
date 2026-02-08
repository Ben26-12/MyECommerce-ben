import styles from "./Banner.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
import Button from "@components/Button";
import { useNavigate } from "react-router-dom";
import config from "@/config";
import { useRef } from "react";
function Banner({ className, backgroundURL, title, description, buttonTitle }) {
  const navigate = useNavigate();
  const bannerClasses = cx("banner", {
    [className]: className,
  });
  return (
    <div
      className={bannerClasses}
      style={{ backgroundImage: `url(${backgroundURL})` }}
    >
      <div className={cx("content")}>
        <h1 className={cx("title")}>{title}</h1>
        {description && <p className={cx("description")}>{description}</p>}

        <Button
          onClick={() => navigate(config.routes.shop)}
          className={cx("btn")}
          primary
        >
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
}

export default Banner;
