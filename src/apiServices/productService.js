import httpRequest from "@/utils/httpRequest";
import { MOCK_PRODUCTS } from "@/MockData/MockData";

const getProduct = async (params) => {
  try {
    const res = await httpRequest.get("/product", {
      params,
    });
    return res;
  } catch (error) {
    console.error("API gọi bị lỗi mất, dùng Mocks product tạm nhé :v");
    return MOCK_PRODUCTS;
  }
};

const getDetailProduct = async (id) => {
  const res = await httpRequest.get(`/product/${id}`);
  return res.data;
};

const getRelatedProducts = async (id) => {
  const res = await httpRequest.get(`/related-products/${id}`);
  return res.data.relatedProducts;
};

export { getProduct, getDetailProduct, getRelatedProducts };
