import { httpAxios } from "../httpAxios";

export async function loginservice({ email, password }) {
  const response = await httpAxios.post(`/user/login`, {
    email: email,
    password: password,
  });
  return response.data;
}
