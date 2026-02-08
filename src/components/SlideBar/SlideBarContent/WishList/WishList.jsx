import classNames from "classnames/bind";

import styles from "./WishList.module.scss";
import ProductItem from "@/components/SlideBar/components/ProductItem";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { slideBarContext } from "@/contexts/SlideBarProvider";
import config from "@/config";
const cx = classNames.bind(styles);
function WishList() {
  const { setIsOpen } = useContext(slideBarContext);
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  const handleAddAllToCart = () => {
    // 1. Hiện loading (nếu có)
    // 2. Gọi API để thêm toàn bộ wishlist vào cart: await api.addAllToCart(wishlistData);
    // 3. Sau khi thành công, mới điều hướng:
    handleNavigate(config.routes.cart);
  };
  return (
    <div className={cx("wishList")}>
      <div className={cx("wishList-body")}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>

      <div className={cx("wishList-footer")}>
        <div className={cx("wishList-actions")}>
          <Button
            onClick={() => handleNavigate(config.routes.wishlist)}
            large
            className={cx("viewWishList-btn")}
          >
            View wishlist
          </Button>
          <Button
            onClick={() => handleAddAllToCart()}
            large
            className={cx("addAll-btn")}
          >
            Add all to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WishList;
