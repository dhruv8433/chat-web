import { api } from "../config/config";
import { httpAxios } from "../httpAxios";

export async function loginservice({ email, password }) {
  const result = await httpAxios
    .get(`/user/login`, { email: email, password: password })
    .then((response) => response);
  return result;
}
