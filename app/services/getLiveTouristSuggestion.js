import axios from "axios";
import { CUSTOM_RAPID_HEADERS, TOURISM_API } from "../config/config";

export async function getLiveTouristSuggestion(query) {
  const response = await axios
    .post(
      `${TOURISM_API}/typeahead`,
      { q: query, language: "en_US" },
      {
        headers: CUSTOM_RAPID_HEADERS,
      }
    )
    .then((res) => res.data.results);

  return response;
}
