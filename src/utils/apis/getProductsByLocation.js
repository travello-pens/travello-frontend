import axios from "axios";

import { API_HOST_URL } from '../../constants/api';

export const getProductsByLocation = (location) => {
  return axios.get(API_HOST_URL + `/product/location/${location}`);
}