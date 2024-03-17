import { httpAxios } from "../httpAxios";

export async function userAddPostServices(formData) {
  try {
    const response = await httpAxios.post("/add-post", formData);
    return response.data;
  } catch (error) {
    // Handle errors, e.g., network errors, server errors, etc.
    console.error("Error adding post:", error);
    throw error; // Re-throw the error to propagate it to the caller
  }
}
