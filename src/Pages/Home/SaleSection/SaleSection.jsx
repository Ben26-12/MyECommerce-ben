import classNames from "classnames/bind";

import styles from "./SaleSection.module.scss";
import Button from "@/components/Button";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "@/config";

const cx = classNames.bind(styles);
function SaleSection() {
  const navigate = useNavigate();
  const [translateXPosition, setTranslateXPosition] = useState(150);

  const prevPosition = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        setTranslateXPosition(0);
        return;
      }
      const currentPosition = window.scrollY;
      const isScrollingDown = currentPosition > prevPosition.current;

      // Chỉ bắt đầu hiệu ứng khi scroll qua mốc 1700px
      if (currentPosition >= 1700) {
        if (isScrollingDown) {
          // Scroll xuống: Thu hẹp khoảng cách (giảm về 0)
          setTranslateXPosition((prev) => (prev - 5 <= 0 ? 0 : prev - 5));
        } else {
          // Scroll lên: Tăng lại khoảng cách (tách ra không quá 150px)
          setTranslateXPosition((prev) => (prev + 5 >= 150 ? 150 : prev + 5));
        }
      }

      prevPosition.current = currentPosition;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cx("sale-section")}>
      <div className={cx("box-img-1")}>
        <img
          style={{ transform: `translateX(${-translateXPosition}px)` }}
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg"
          alt="image 1"
        />
      </div>
      <div className={cx("box-content")}>
        <div className={cx("title")}>Sale of the year</div>
        <div className={cx("desc")}>
          Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
        </div>
        <a href="#">
          <Button
            onClick={() => navigate(config.routes.shop)}
            className={cx("more-btn")}
          >
            Read more
          </Button>
        </a>
      </div>
      <div className={cx("box-img-2")}>
        <img
          style={{
            transform:
              window.innerWidth <= 768
                ? `translateX(0px)` //ở mobile thì lần mount đầu tiên sẽ không 150px transform nữa
                : `translateX(${translateXPosition}px)`,
          }}
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg"
          alt="image 1"
        />
      </div>
    </div>
  );
}

export default SaleSection;
