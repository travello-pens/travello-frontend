import axios from "axios";

import { API_HOST_URL } from '../../constants/api';

export const getProductsByTravelAgent = (travelAgent) => {
  return axios.get(API_HOST_URL + `/product/agent/${travelAgent}`);
}