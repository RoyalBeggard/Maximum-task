import axios from "axios";
import { URL } from "../index";

export const sendForm = async (form) => {
  return await axios.post(URL + "send-form", form);
};
