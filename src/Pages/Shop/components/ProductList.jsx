import { useContext, useEffect, useState } from "react";
import styles from "../Shop.module.scss";
import classNames from "classnames/bind";
import ProductCard from "@/components/ProductCard";
import { OurShopContext } from "@/contexts/OurShopProvider";
import Button from "@/components/Button";
import ProductCardSkeleton from "@/components/ProductCard/ProductCardSkeleton/ProductCardSkeleton";

const cx = classNames.bind(styles);
function ProductList() {
  const { products, showOptions, perPageValue, setPerPageValue, isLoading } =
    useContext(OurShopContext);
  const currentIndex = showOptions.findIndex((item) => {
    return item.value === perPageValue;
  });
  const handleLoadMore = () => {
    if (currentIndex !== -1 && currentIndex < showOptions.length - 1) {
      const nextValue = showOptions[currentIndex + 1].value;
      setPerPageValue(nextValue);
    }
  };
  return (
    <>
      <div className={cx("product-list")}>
        {isLoading
          ? Array(Number(perPageValue))
              .fill(0)
              .map((_, index) => (
                <ProductCardSkeleton key={index} showATC showVariants />
              ))
          : products.map((product) => (
              <ProductCard
                key={product._id}
                showATC
                showVariants
                item={product}
              />
            ))}
      </div>

      <div className={cx("more-btn")}>
        {currentIndex == showOptions.length - 1 || (
          <Button onClick={handleLoadMore} primary>
            Load more products
          </Button>
        )}
      </div>
    </>
  );
}

export default ProductList;
