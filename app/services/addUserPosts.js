import { httpAxios } from "../httpAxios";

export async function userAddPostServices(postImg) {
  const result = await httpAxios
    .post("/add-posts", {
      postImg: postImg,
    })
    .then((response) => response.data);
  return result;
}
