import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import styles from "./ProductItem.module.scss";
import config from "@/config";
import Button from "@/components/Button";
import { deleteItem } from "@/apiServices/cartService";
import { useContext } from "react";
import { slideBarContext } from "@/contexts/SlideBarProvider";
import { MOCK_USER_ID } from "@/components/ProductCard/constants";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);
function ProductItem({ product }) {
  const { deleteCartProduct, setIsOpen } = useContext(slideBarContext);

  //handle direct sang product page
  const navigate = useNavigate();
  const handleNavigatetoProduct = () => {
    navigate(config.routes.product + `/${product.productId}`);
    setIsOpen(false);
  };
  //return
  return (
    <div className={cx("product-item")}>
      <Button
        onClick={() => deleteCartProduct(product.productId, MOCK_USER_ID)}
        className={cx("close-btn")}
      >
        <FontAwesomeIcon icon={faX} />
      </Button>
      <img
        className={cx("product-img")}
        src={product.images[0]}
        alt=""
        onClick={handleNavigatetoProduct}
      />
      <div className={cx("product-content")} onClick={handleNavigatetoProduct}>
        <h4 className={cx("product-title")}>{product.name}</h4>
        <div className={cx("cart-attribute")}>
          <div className={cx("size")}>Size: {product.size}</div>
        </div>
        <div className={cx("product-description")}>
          <div className={cx("quantity-box")}>
            <div className={cx("quantity")}>
              {product.quantity} <span>x</span>
            </div>
            <div className={cx("product-price")}>${product.price}</div>
          </div>
          <div className={cx("stats")}>SKU: {product.sku}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
