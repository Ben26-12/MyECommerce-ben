import { useParams } from "react-router-dom";
import styles from "./ProductSlider.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { getRelatedProducts } from "@/apiServices/productService";
import ProductCard from "@/components/ProductCard";
import { toast } from "react-toastify";
import ProductCardSkeleton from "@/components/ProductCard/ProductCardSkeleton/ProductCardSkeleton";

const cx = classNames.bind(styles);

function ProductSlider() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    getRelatedProducts(id)
      .then((data) => {
        setRelatedProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("Can not get related products, please try again");
      });
  }, [id]);
  return (
    <div className={cx("slider-container")}>
      <div className={cx("slider-title")}>Related products</div>
      <div className={cx("slider-list")}>
        {isLoading
          ? Array(5)
              .fill(0)
              .map((_, index) => <ProductCardSkeleton key={index} showATC />)
          : relatedProducts.map((product) => {
              return <ProductCard key={product._id} showATC item={product} />;
            })}
      </div>
    </div>
  );
}

export default ProductSlider;
