import styles from "../CartTable/CartTable.module.scss";
import classNames from "classnames/bind";
import { MOCK_USER_ID } from "@/components/ProductCard/constants";
import { useContext, useState } from "react";
import { slideBarContext } from "@/contexts/SlideBarProvider";
import { useNavigate } from "react-router-dom";
import config from "@/config";
import SelectInput from "@/components/SelectInput";
import { addProductToCart } from "@/apiServices/cartService";
import { toast } from "react-toastify";
import LoadingIcon from "@/components/LoadingIcon";
const cx = classNames.bind(styles);

function CartProductLine({ item }) {
  const navigate = useNavigate();
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { deleteCartProduct, handleGetListProductsCart } =
    useContext(slideBarContext);
  const quantityChangeOptions = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
  ];

  const handleNavigatetoProduct = (productId) => {
    navigate(config.routes.product + `/${productId}`);
  };
  const handleDeleteProductInCartPage = (productId) => {
    setIsDeleting(true);
    try {
      deleteCartProduct(productId, MOCK_USER_ID);
      //không cần setIsDeleting = false ở đây cũng được vì item bị remove rồi
    } catch (err) {
      //deleteCartProduct có thow lỗi ra, catch tiếp ở đây
      setIsDeleting(false);
    }
  };
  const updateNewProductInCart = (data) => {
    setIsUpdating(true);
    addProductToCart(data)
      .then((res) => {
        handleGetListProductsCart(MOCK_USER_ID, "cart");
        setIsUpdating(false);
      })
      .catch((err) => {
        toast.error(
          "Something went wrong, can not update product, try again later",
        );
      });
  };
  return (
    <tr>
      {isDeleting && (
        <td className={cx("overlay")}>
          <LoadingIcon className={cx("loading")} />
        </td>
      )}
      <td className={cx("product-info")}>
        <img
          src={item.images[0]}
          alt={item.name}
          onClick={() => handleNavigatetoProduct(item.productId)}
          style={{ cursor: "pointer" }}
        />
        <div className={cx("details")}>
          <div className={cx("mobile-detail")}>
            <div className={cx("detail")}>
              <p
                className={cx("name")}
                onClick={() => handleNavigatetoProduct(item.productId)}
              >
                {item.name}
              </p>
              <p className={cx("size")}>
                Size:
                <span className={cx("size-value")}>{item.size}</span>
              </p>
              <div>Price: ${item.price.toFixed(2)}</div>
              <div>SKU: {item.sku}</div>
              <div className={cx("quantity-box")}>
                Quantity:
                <SelectInput
                  small
                  defaultValue={item.quantity}
                  className={cx("quantity-input")}
                  getValue={(newQuantity) => {
                    const data = {
                      userId: MOCK_USER_ID,
                      productId: item.productId,
                      quantity: Number(newQuantity - item.quantity),
                      size: item.size,
                      isMultiple: false,
                    };
                    updateNewProductInCart(data);
                  }}
                  options={quantityChangeOptions}
                />
              </div>
            </div>
            <div className={cx("subtotal-price")}>
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
          <p
            className={cx("name", "desktop-detail")}
            onClick={() => handleNavigatetoProduct(item.productId)}
          >
            {item.name}
          </p>
          <p className={cx("size", "desktop-detail")}>
            Size: <span className={cx("size-value")}>{item.size}</span>
          </p>
        </div>
        <button
          onClick={() => handleDeleteProductInCartPage(item.productId)}
          className={cx("remove-btn")}
        >
          ×
        </button>
      </td>
      <td className={cx("desktop-detail")}>${item.price.toFixed(2)}</td>
      <td className={cx("desktop-detail")}>{item.sku}</td>
      <td className={cx("desktop-detail")}>
        <div className={cx("quantity-box")}>
          {isUpdating ? (
            <LoadingIcon />
          ) : (
            <SelectInput
              defaultValue={item.quantity}
              className={cx("quantity-input")}
              getValue={(newQuantity) => {
                const data = {
                  userId: MOCK_USER_ID,
                  productId: item.productId,
                  quantity: Number(newQuantity - item.quantity),
                  size: item.size,
                  isMultiple: false,
                };
                updateNewProductInCart(data);
              }}
              options={quantityChangeOptions}
            />
          )}
        </div>
      </td>
      <td className={cx("subtotal-price", "desktop-detail")}>
        ${(item.price * item.quantity).toFixed(2)}
      </td>
    </tr>
  );
}

export default CartProductLine;
