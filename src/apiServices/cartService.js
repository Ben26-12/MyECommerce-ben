import httpRequest from "@/utils/httpRequest";

const addProductToCart = async (data) => {
  return await httpRequest.post("/cart", data);
};

const getCart = async (userId) => {
  return await httpRequest.get(`/cart/${userId}`);
};

const deleteItem = async (body) => {
  return await httpRequest.delete(`/cart/deleteItem`, {
    data: body,
  });
};

const deleteCart = async (body) => {
  return await httpRequest.delete(`/cart/delete`, {
    data: body,
  });
};
export { addProductToCart, deleteCart, getCart, deleteItem };
