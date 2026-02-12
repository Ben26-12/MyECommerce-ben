import ContactBox from "@/Pages/Contact/ContactBox";
import styles from "./Contact.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Contact() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("map")}>
        <img
          className={cx("map-img")}
          src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Map-new.jpeg"
          alt=""
        />
      </div>
      <ContactBox />
    </div>
  );
}

export default Contact;
