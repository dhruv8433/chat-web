import { httpAxios } from "../httpAxios";

export async function userAddPostServices(formData) {
  const result = await httpAxios
    .post("/add-posts", {
      formData: formData,
    })
    .then((response) => response.data);
  return result;
}
