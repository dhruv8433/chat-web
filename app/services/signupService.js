import { httpAxios } from "../httpAxios";

export async function signupservice(username, password, email, displayName) {
  const result = await httpAxios
    .post("/signup", {
      username: username,
      password: password,
      email: email,
      displayName: displayName,
    })
    .then((response) => response.data);
  return result;
}
