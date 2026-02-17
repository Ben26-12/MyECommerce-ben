import { createContext, useEffect, useState } from "react";
import { getProduct } from "@/apiServices/productService";

export const OurShopContext = createContext();

function OurShopProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const sortOptions = [
    { label: "Default sorting", value: "0" },
    { label: "Sort by latest", value: "3" },
    { label: "Sort by price: low to high", value: "4" },
    { label: "Sort by price: high to low", value: "5" },
  ];

  const showOptions = [
    { label: "8", value: "8" },
    { label: "12", value: "12" },
    { label: "23", value: "23" },
  ];
  const [sortValue, setSortValue] = useState("0");
  const [perPageValue, setPerPageValue] = useState("8");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let isUnmounted = false;
    setIsLoading(true);

    getProduct({
      sortType: sortValue,
      page: 1,
      limit: perPageValue,
    }).then((res) => {
      if (!isUnmounted) {
        setProducts(res.data.contents ?? res);
        setIsLoading(false);
      }
    });
    return () => (isUnmounted = true);
  }, [sortValue, perPageValue]);
  const value = {
    isLoading,
    setIsLoading,
    sortOptions,
    showOptions,
    sortValue,
    setSortValue,
    perPageValue,
    setPerPageValue,
    products,
    setProducts,
  };
  return (
    <OurShopContext.Provider value={value}>{children}</OurShopContext.Provider>
  );
}

export default OurShopProvider;
