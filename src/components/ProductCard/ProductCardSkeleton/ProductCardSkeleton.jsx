import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import classNames from "classnames/bind";
import styles from "../ProductCard.module.scss";

const cx = classNames.bind(styles);

function ProductCardSkeleton({ showATC, showVariants }) {
  return (
    <div className={cx("product-card")}>
      <div className={cx("img-container")}>
        <Skeleton
          height="100%"
          containerClassName={cx("main-img")}
          style={{ aspectRatio: "3/4", display: "block" }}
        />
      </div>

      <div className={cx("card-information")}>
        {/* Variants: Chuyển thành 1 thanh ngang duy nhất */}
        {showVariants && (
          <div
            className={cx("variants")}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Skeleton width={60} height={20} borderRadius={10} />
          </div>
        )}
        <div
          className={cx("card-title")}
          style={{
            display: "block",
            height: "auto",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Skeleton width="80%" height={18} />
        </div>
        <div
          className={cx("price")}
          style={{
            display: "block",
            height: "auto",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Skeleton width="40%" height={15} />
        </div>
        {showATC && (
          <div
            className={cx("ATC-btn-wrapper")}
            style={{ marginTop: "15px", width: "100%" }}
          >
            <Skeleton height={40} borderRadius={0} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
