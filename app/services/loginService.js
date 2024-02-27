import { httpAxios } from "../httpAxios";

export async function loginservice(username, password) {
  const result = await httpAxios
    .post("api/login", { username: username, password: password })
    .then((response) => response.data);
  return result;
}
