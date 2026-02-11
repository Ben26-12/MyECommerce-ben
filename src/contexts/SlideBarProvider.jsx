import { MOCK_USER_ID } from "@/components/ProductCard/constants";
import { createContext, useEffect, useState } from "react";
export const slideBarContext = createContext();
import { deleteCart, deleteItem, getCart } from "@/apiServices/cartService";
import { toast } from "react-toastify";

function SlideBarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("cart");
  const [listProductCart, setListProductCart] = useState([]);
  const handleGetListProductsCart = (userId, type) => {
    if (userId && type === "cart") {
      getCart(userId)
        .then((res) => {
          setListProductCart(res.data.data);
        })
        .catch((err) => {
          setListProductCart([]);
          toast.error("Can not get products, please try again");
        });
    }
  };

  const deleteCartProduct = (productId, userId) => {
    if (type === "cart") {
      deleteItem({
        productId,
        userId,
      })
        .then((res) => {
          handleGetListProductsCart(userId, "cart");
          toast.info("Delete item successfully");
        })
        .catch((err) => {
          toast.error("Something went wrong, can not delete item");
        });
    }
  };

  const handleDeleteCart = () => {
    deleteCart({ userId: MOCK_USER_ID })
      .then((res) => {
        handleGetListProductsCart(MOCK_USER_ID, "cart");
        toast.info("Delete all items successfully");
      })
      .catch((err) => {
        toast.error("Something went wrong, can not delete item");
      });
  };

  const value = {
    isOpen,
    setIsOpen,
    type,
    setType,
    listProductCart,
    setListProductCart,
    handleGetListProductsCart,
    deleteCartProduct,
    handleDeleteCart,
  };
  return (
    <slideBarContext.Provider value={value}>
      {children}
    </slideBarContext.Provider>
  );
}

export default SlideBarProvider;
