import { httpAxios } from "../httpAxios";

export async function signupservice(username, password) {
  const result = await httpAxios
    .post("api/signup", {
      username: username,
      password: password,
     
    })
    .then((response) => response.data);
  return result;
}

export async function deleteAccountService(token) {
  const result = await httpAxios
    .post("api/delete-account", { token: token })
    .then((response) => response.data);
  return result;
}
