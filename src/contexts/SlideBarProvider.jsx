import { MOCK_USER_ID } from "@/components/ProductCard/constants";
import { createContext, useEffect, useState } from "react";
export const slideBarContext = createContext();
import { deleteCart, deleteItem, getCart } from "@/apiServices/cartService";
import { toast } from "react-toastify";

function SlideBarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("cart");
  const [listProductCart, setListProductCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const handleGetListProductsCart = (userId, type) => {
    if (userId && type === "cart") {
      setIsLoading(true);
      getCart(userId)
        .then((res) => {
          setListProductCart(res.data.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setListProductCart([]);
          toast.error("Can not get products, please try again");
        });
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    handleGetListProductsCart(MOCK_USER_ID, "cart");
  }, []);

  const deleteCartProduct = async (productId, userId) => {
    if (type !== "cart") return;
    try {
      const res = await deleteItem({ productId, userId });
      await handleGetListProductsCart(userId, "cart");
      toast.info("Delete item successfully");
      return res;
    } catch (err) {
      toast.error("Something went wrong, can not delete item");
      throw err; //throw ra ngoài để catch tiếp ở bên ngoài
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
    isLoading,
    setIsLoading,
  };
  return (
    <slideBarContext.Provider value={value}>
      {children}
    </slideBarContext.Provider>
  );
}

export default SlideBarProvider;
