import { httpAxios } from "../httpAxios";

export async function getLiveTouristSuggestion(query, offset, limit) {
  const response = await httpAxios
    .get(`/tourism/get-places?_page=${offset}&_limit=${limit}`)
    .then((response) => response.data);

  return response;
}
