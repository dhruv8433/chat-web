import { httpAxios } from "../httpAxios";

export async function searchUser({ search }) {
  // if user found than we display their username otherwise no results found
  const response = await httpAxios
    .post("/search", { search: search })
    .then((response) => response.data);

  return response;
}
