import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Breadcrumb.module.scss";
import classNames from "classnames/bind";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

function Breadcrumb({ items = [], showBack = true }) {
  const navigate = useNavigate();
  return (
    <div className={cx("navigation")}>
      <div className={cx("breadcrumb")}>
        <div className={cx("breadcrumb-text")}>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <div key={index} className={cx("item-wrapper")}>
                {isLast ? (
                  <p className={cx("special-text")}>{item.label}</p>
                ) : (
                  <div
                    className={cx("normal-text")}
                    onClick={() => item.path && navigate(item.path)}
                  >
                    {item.label}
                    <FontAwesomeIcon
                      className={cx("icon")}
                      icon={faAngleRight}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {showBack && (
        <div className={cx("back-history")} onClick={() => navigate(-1)}>
          <FontAwesomeIcon className={cx("icon")} icon={faAngleLeft} />
          <span onClick={() => navigate(-1)} className={cx("back-text")}>
            Return to previous page
          </span>
        </div>
      )}
    </div>
  );
}

export default Breadcrumb;
