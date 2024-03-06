import { httpAxios } from "../httpAxios";

export async function loginservice(email, password) {
  // take email and password and check into db, if both are correct than user logged in else not
  const result = await httpAxios
    .post("/user/login", { email: email, password: password })
    .then((response) => response.data);
  return result;
}
