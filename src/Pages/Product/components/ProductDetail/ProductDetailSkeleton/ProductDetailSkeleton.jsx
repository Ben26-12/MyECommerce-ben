import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import classNames from "classnames/bind";
import styles from "../ProductDetail.module.scss";

const cx = classNames.bind(styles);

function ProductDetailSkeleton() {
  return (
    <div className={cx("container")}>
      {/* Left: Image Gallery Skeleton */}
      <div className={cx("image-gallery")}>
        {Array(4)
          .fill(0)
          .map((item, index) => (
            <div key={index} className={cx("image-item")}>
              <Skeleton height="100%" style={{ aspectRatio: "3/4" }} />
            </div>
          ))}
      </div>

      {/* Right: Product Info Skeleton */}
      <div className={cx("product-info")}>
        {/* Name & Price */}
        <Skeleton width="70%" height={35} style={{ marginBottom: "15px" }} />
        <Skeleton width="20%" height={25} style={{ marginBottom: "20px" }} />

        {/* Description */}
        <div style={{ marginBottom: "30px" }}>
          <Skeleton count={3} />
        </div>

        {/* Size Selection */}
        <div className={cx("size-selection")} style={{ marginBottom: "25px" }}>
          <Skeleton width={50} height={15} style={{ marginBottom: "10px" }} />
          <div style={{ display: "flex", gap: "10px" }}>
            <Skeleton
              width={45}
              height={40}
              count={4}
              containerClassName={cx("size-list")}
            />
          </div>
        </div>

        {/* Actions (Quantity + Add to cart) */}
        <div
          className={cx("actions-wrapper")}
          style={{ display: "flex", gap: "15px", marginBottom: "20px" }}
        >
          <Skeleton width={120} height={45} /> {/* Quantity section */}
          <Skeleton width="100%" height={45} /> {/* Add to cart button */}
        </div>

        <div className={cx("or-separator")} style={{ margin: "15px 0" }}>
          <Skeleton width={30} height={15} />
        </div>

        {/* Buy Now Button */}
        <Skeleton width="100%" height={45} style={{ marginBottom: "25px" }} />

        {/* Meta Data (SKU, Category) */}
        <div
          className={cx("meta-data")}
          style={{ borderTop: "1px solid #eee", paddingTop: "20px" }}
        >
          <Skeleton width="30%" height={15} count={2} />
        </div>

        {/* Additional Info (Accordions) */}
        <div className={cx("additional-info")} style={{ marginTop: "30px" }}>
          <Skeleton height={50} count={2} style={{ marginBottom: "10px" }} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailSkeleton;
