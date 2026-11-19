import axios from "axios";
const url = "http://localhost:4000/api/v1/products";
export const createProduct = async (product) => {
  try {
    const response = await axios.post(url,{
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    });
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    return null;
    }
};
export const getProducts = async () => {
  try {
    const res = await axios.get(url);

    const data = res.data;

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const getProduct = async (id) => {
  try {
    const response = await axios.get(`${url}/${id}`);
    const data = response.data;
    return data;
  }catch (error) {
    console.error(error);
    return null;
  }
};
export const updateProduct = async (id, product) => {
  try {
    const response = await axios.put(`${url}/${id}`, {
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    });
    const data = response.data;
    return data;
  }catch (error) {
    console.error(error);
    return null;
  }
};
export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${url}/${id}`);
    const data = response.data;
    return data;
  }catch (error) {
    console.error(error);
    return null;
  }
};