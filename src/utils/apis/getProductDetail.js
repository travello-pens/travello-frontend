import axios from "axios";

import { API_HOST_URL } from '../../constants/api';

export const getProductDetail = (id) => {
  return axios.get(API_HOST_URL + `/product/${id}`);
}