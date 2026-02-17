import classNames from "classnames/bind";

import styles from "./FeaturedProducts.module.scss";
import SectionIntro from "@/components/SectionIntro";
import ProductCard from "@/components/ProductCard";
import CountDownBanner from "@/Pages/Home/CountDownBanner";

const cx = classNames.bind(styles);
import { getProduct } from "@/apiServices/productService";
import { useEffect, useState } from "react";
import ProductCardSkeleton from "@/components/ProductCard/ProductCardSkeleton/ProductCardSkeleton";

function FeatureProducts() {
  const [isLoading, setIsLoading] = useState(true);
  const [listProducts, setListProducts] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    getProduct({
      sortType: 1,
      page: 1,
      limit: 14,
    }).then((res) => {
      setListProducts(res.data.contents ?? res);
      setIsLoading(false);
    });
  }, []);
  return (
    <div className={cx("wrapper")}>
      <SectionIntro title="Don't miss super offer" desc="Our best products" />
      {/* Khối list product 1 */}
      <div className={cx("product-list")}>
        <CountDownBanner />
        {isLoading ? (
          <div className={cx("section-grid-2")}>
            {Array(2)
              .fill(0)
              .map((_, index) => {
                return <ProductCardSkeleton key={index} />;
              })}
          </div>
        ) : (
          <div className={cx("section-grid-2")}>
            {listProducts.slice(0, 2).map((item) => {
              return <ProductCard key={item._id} item={item} />;
            })}
          </div>
        )}
      </div>
      {/* Khối list product 2 */}
      {isLoading ? (
        <div className={cx("product-list")}>
          <div className={cx("section-grid-4")}>
            {Array(12)
              .fill(0)
              .map((_, index) => {
                return <ProductCardSkeleton key={index} />;
              })}
          </div>
        </div>
      ) : (
        <div className={cx("product-list")}>
          <div className={cx("section-grid-4")}>
            {listProducts.slice(2).map((item) => {
              return <ProductCard key={item._id} item={item} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default FeatureProducts;
