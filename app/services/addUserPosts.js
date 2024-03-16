import axios from "axios";
import { httpAxios } from "../httpAxios";

export async function userAddPostServices(formData) {
  const result = await httpAxios
    .post("/add-post", formData) // Specify complete URL
    .then((response) => response.data);
  return result;
}
