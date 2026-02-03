import styles from "./Layout.module.scss";
import classNames from "classnames/bind";

import Header from "@components/Header";
import Footer from "@components/Footer";

const cx = classNames.bind(styles);
function MainLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
