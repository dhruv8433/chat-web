import { httpAxios } from "../httpAxios";

export async function userBioServices(bio) {
  const result = await httpAxios
    .post("/add-bio", {
      bio: bio,
    })
    .then((response) => response.data);
  return result;
}
