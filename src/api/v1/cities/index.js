import axios from "axios";
import { URL } from "../index";

export const getCities = () => {
  return axios.get(URL + "cities");
};
