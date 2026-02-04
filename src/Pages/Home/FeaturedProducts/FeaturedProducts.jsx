import classNames from "classnames/bind";

import styles from "./FeaturedProducts.module.scss";
import SectionIntro from "@/components/SectionIntro";
import ProductLayout from "@/components/ProductLayout";

const cx = classNames.bind(styles);
function FeatureProducts() {
  return (
    <div className={cx("wrapper")}>
      <SectionIntro title="Don't miss super offer" desc="Our best products" />
      {/* Khối product 1  */}
      <ProductLayout />
      {/* Khối product 2  */}
      <ProductLayout />
    </div>
  );
}

export default FeatureProducts;
