import { httpAxios } from "../httpAxios";

export async function signupservice(username, password, email, displayName) {
  const result = await httpAxios
    .post("/user", {
      username: username,
      password: password,
      email: email,
      displayName: displayName,
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
