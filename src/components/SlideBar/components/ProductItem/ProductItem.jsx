import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import styles from "./ProductItem.module.scss";
import config from "@/config";
import Button from "@/components/Button";
import { useContext, useState } from "react";
import { slideBarContext } from "@/contexts/SlideBarProvider";
import { MOCK_USER_ID } from "@/components/ProductCard/constants";
import LoadingIcon from "@/components/LoadingIcon";

const cx = classNames.bind(styles);
function ProductItem({ product }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const { deleteCartProduct, setIsOpen } = useContext(slideBarContext);
  const handleDeleteProductInCart = (productId) => {
    setIsDeleting(true);
    try {
      deleteCartProduct(productId, MOCK_USER_ID);
      //không cần setIsDeleting = false ở đây cũng được vì item bị remove rồi
    } catch (err) {
      //deleteCartProduct có thow lỗi ra, catch tiếp ở đây
      setIsDeleting(false);
    }
  };
  //handle direct sang product page
  const navigate = useNavigate();
  const handleNavigatetoProduct = () => {
    navigate(config.routes.product + `/${product.productId}`);
    setIsOpen(false);
  };
  //return
  return (
    <div className={cx("product-item")}>
      {isDeleting && (
        <div className={cx("overlay")}>
          <LoadingIcon className={cx("loading")} />
        </div>
      )}
      <Button
        onClick={() => handleDeleteProductInCart(product.productId)}
        className={cx("close-btn")}
      >
        {isDeleting ? <LoadingIcon /> : <FontAwesomeIcon icon={faX} />}
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
