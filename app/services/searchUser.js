import { httpAxios } from "../httpAxios";

export async function searchUser({ search }) {
  const response = await httpAxios
    .post("/search", { search: search })
    .then((response) => response.data);

  return response;
}
