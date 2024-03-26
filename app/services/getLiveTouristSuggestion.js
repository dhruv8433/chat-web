import { httpAxios } from "../httpAxios";

export async function getLiveTouristSuggestion(query) {
  const response = await httpAxios
    .get("/tourism/get-places")
    .then((response) => response.data);

  return response;
}
