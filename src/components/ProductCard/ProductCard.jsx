import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./ProductCard.module.scss";
import Button from "@/components/Button";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import config from "@/config";
import { useContext, useState } from "react";
import { MOCK_USER_ID } from "@/components/ProductCard/constants";
import { addProductToCart } from "@/apiServices/cartService";
import { slideBarContext } from "@/contexts/SlideBarProvider";
import { toast } from "react-toastify";
const cx = classNames.bind(styles);

function ProductCard({ item, showATC, showVariants }) {
  const { handleGetListProductsCart } = useContext(slideBarContext);
  const navigate = useNavigate();
  const defaultSize = () => {
    if (showVariants) {
      return "";
    } else {
      return item.size[0].name;
    }
  };
  const [sizeChoose, setSizeChoose] = useState(defaultSize);

  const handleRedirect = () => {
    navigate(`${config.routes.product}/${item._id}`);
  };

  const handleATC = (productId) => {
    const data = {
      userId: MOCK_USER_ID,
      productId,
      quantity: 1,
      size: sizeChoose,
      isMultiple: false,
    };

    if (!sizeChoose) {
      toast.error("Please choose your variants to add to cart");
    } else {
      addProductToCart(data)
        .then((res) => {
          handleGetListProductsCart(MOCK_USER_ID, "cart");
          toast.success("Added to cart!");
        })
        .catch((err) => toast.error("Failed to add!"));
    }
  };
  return (
    <div className={cx("product-card")}>
      {/* img container  */}
      <div className={cx("img-container")}>
        <img
          draggable={false}
          onClick={handleRedirect}
          className={cx("main-img")}
          src={item.images[0]}
          alt="Product"
        />
        <img
          onClick={handleRedirect}
          className={cx("hover-img")}
          src={item.images[1]}
          alt="Product"
        />

        <div className={cx("actions")}>
          <Button onClick={(e) => handleATC(item._id)}>
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faHeart} />
          </Button>
          <Button onClick={handleRedirect}>
            <FontAwesomeIcon icon={faEye} />
          </Button>
        </div>
      </div>
      {/* card information */}
      <div className={cx("card-information")}>
        {showVariants && (
          <div className={cx("variants")}>
            {item.size.map((size, index) => {
              return (
                <Button
                  key={index}
                  className={cx("size", {
                    activeSize: size.name === sizeChoose,
                  })}
                  onClick={() => setSizeChoose(size.name)}
                >
                  {size.name}
                </Button>
              );
            })}
          </div>
        )}
        <div className={cx("card-title")} onClick={handleRedirect}>
          {item.name}
        </div>
        <div className={cx("price")} onClick={handleRedirect}>
          {typeof item.price == "object"
            ? `$${item.price.min} - $${item.price.max}`
            : `$${item.price}`}
        </div>
        {showATC && (
          <Button
            onClick={(e) => handleATC(item._id)}
            className={cx("ATC-btn")}
            primary
          >
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
