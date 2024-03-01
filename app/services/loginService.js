import { httpAxios } from "../httpAxios";

export async function loginservice(email, password) {
  const result = await httpAxios
    .post("/user/login", { email: email, password: password })
    .then((response) => response.data);
  return result;
}
