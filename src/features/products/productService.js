import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product?page=1&limit=10`);
  if (response.data) {
    return response.data;
  }
};

export const productService = {
  getProducts,
};
