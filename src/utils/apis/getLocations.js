import axios from "axios";

import { API_HOST_URL } from '../../constants/api';

export const getLocations = () => {
  return axios.get(API_HOST_URL + `/location`);
}