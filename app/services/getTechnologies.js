import { httpAxios } from "../httpAxios";

export async function getTechnologies(query, search = "", offset, limit) {
  const response = await httpAxios
    .get(`/technologies/get-data?_page=${offset}&_limit=${limit}`, {
      params: {
        category: query,
        search: search, // Pass the search query to the backend
      },
    })
    .then((response) => response.data);

  return response;
}
