import styles from "./Product.module.scss";
import classNames from "classnames/bind";

import Breadcrumb from "@/components/Breadcrumb";
import config from "@/config";
import ProductDetail from "@/Pages/Product/components/ProductDetail";
import ProductSlider from "@/Pages/Product/components/ProductSlider";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetailProduct } from "@/apiServices/productService";

const cx = classNames.bind(styles);

function Product() {
  const breadcrumbItems = [
    { label: "Home", path: config.routes.home },
    { label: "Product" }, // Chặng cuối không cần path
  ];

  return (
    <div className={cx("wrapper")}>
      <Breadcrumb items={breadcrumbItems} />
      <ProductDetail />
      <ProductSlider />
    </div>
  );
}

export default Product;
