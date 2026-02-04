import classNames from "classnames/bind";

import styles from "./SectionIntro.module.scss";

const cx = classNames.bind(styles);
function SectionIntro({ title, desc }) {
  return (
    <div className={cx("intro-container")}>
      <div className={cx("content")}>
        <span className={cx("title")}>{title}</span>
        <div className={cx("desc")}>
          <div className={cx("left-line")}></div>
          <h2>{desc}</h2>
          <div className={cx("right-line")}></div>
        </div>
      </div>
    </div>
  );
}

export default SectionIntro;
