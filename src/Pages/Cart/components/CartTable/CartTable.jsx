import classNames from "classnames/bind";
import styles from "./CartTable.module.scss";
import { MOCK_USER_ID } from "@/components/ProductCard/constants";
import { useContext } from "react";
import { slideBarContext } from "@/contexts/SlideBarProvider";
import { useNavigate } from "react-router-dom";
import config from "@/config";
import SelectInput from "@/components/SelectInput";
import { addProductToCart } from "@/apiServices/cartService";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);

function CartTable({ items }) {
  const navigate = useNavigate();
  const { deleteCartProduct, handleGetListProductsCart, handleDeleteCart } =
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
  const updateNewProductInCart = (data) => {
    addProductToCart(data)
      .then((res) => {
        toast.success("Update successfully");
        handleGetListProductsCart(MOCK_USER_ID, "cart");
      })
      .catch((err) => {
        toast.error(
          "Something went wrong, can not update product, try again later",
        );
      });
  };

  return (
    <div className={cx("left-content")}>
      <table className={cx("product-table")}>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>SKU</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className={cx("product-info")}>
                <img
                  src={item.images[0]}
                  alt={item.name}
                  onClick={() => handleNavigatetoProduct(item.productId)}
                  style={{ cursor: "pointer" }}
                />
                <div className={cx("details")}>
                  <p
                    className={cx("name")}
                    onClick={() => handleNavigatetoProduct(item.productId)}
                  >
                    {item.name}
                  </p>
                  <p className={cx("size")}>
                    Size: <span className={cx("size-value")}>{item.size}</span>
                  </p>
                </div>
                <button
                  onClick={() =>
                    deleteCartProduct(item.productId, MOCK_USER_ID)
                  }
                  className={cx("remove-btn")}
                >
                  ×
                </button>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.sku}</td>
              <td>
                <div className={cx("quantity-box")}>
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
                </div>
              </td>
              <td className={cx("subtotal-price")}>
                ${(item.price * item.quantity).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={cx("coupon-section")}>
        <div className={cx("coupon-input")}>
          <input type="text" placeholder="Coupon code" />
          <button>OK</button>
        </div>
        <button onClick={handleDeleteCart} className={cx("clear-btn")}>
          CLEAR SHOPPING CART
        </button>
      </div>
    </div>
  );
}

export default CartTable;
