import { httpAxios } from "../httpAxios";

export async function getHealthAndFitnessData(query, search = '') {
  const response = await httpAxios
    .get("/health_fitness/get-categories", {
      params: {
        category: query,
        search: search  // Pass the search query to the backend
      }
    })
    .then((response) => response.data);

  return response;
}
