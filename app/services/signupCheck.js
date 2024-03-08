const { httpAxios } = require("../httpAxios");

export async function signupCheck(email) {
  const response = await httpAxios.post("/signup-check", {
    email: email,
  });
  return response.data;
}
