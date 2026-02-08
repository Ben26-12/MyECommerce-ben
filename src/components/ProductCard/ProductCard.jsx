import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./ProductCard.module.scss";
import Button from "@/components/Button";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import config from "@/config";
const cx = classNames.bind(styles);

function ProductCard({ item, showATC }) {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`${config.routes.product}/${item._id}`);
  };

  const handleATC = (e) => {
    e.stopPropagation();
    //handle addto cart (chua viet)
  };
  return (
    <div className={cx("product-card")}>
      {/* img container  */}
      <div className={cx("img-container")} onClick={handleRedirect}>
        <img className={cx("main-img")} src={item.images[0]} alt="Product" />
        <img className={cx("hover-img")} src={item.images[1]} alt="Product" />

        <div className={cx("actions")}>
          <Button className={cx("action-btn")}>
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
          <Button className={cx("action-btn")}>
            <FontAwesomeIcon icon={faHeart} />
          </Button>
          <Button className={cx("action-btn")}>
            <FontAwesomeIcon icon={faEye} />
          </Button>
        </div>
      </div>
      {/* card information */}
      <div className={cx("card-information")}>
        <div className={cx("card-title")}>{item.name}</div>
        <div className={cx("price")}>
          {typeof item.price == "object"
            ? `$${item.price.min} - $${item.price.max}`
            : `$${item.price}`}
        </div>
        {showATC && (
          <Button
            onClick={(e) => handleATC(e)}
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
