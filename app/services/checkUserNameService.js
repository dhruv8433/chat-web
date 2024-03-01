import { httpAxios } from "../httpAxios";

export async function checkUserName({ userName }) {
  // we took one username from user and check into db --> if username already taken by another user then we simply ignore and display ❌ else ✅
  const response = await httpAxios
    .post("/check-user", { username: userName })
    .then((response) => response.data);
  return response;
}
