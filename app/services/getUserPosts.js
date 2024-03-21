import { httpAxios } from "../httpAxios";

export async function getUserPost(userId) {
  try {
    const response = await httpAxios.get(`/get-post/${userId}`, userId);
    return response.data;
  } catch (error) {
    // Handle errors, e.g., network errors, server errors, etc.
    console.error("Error adding post:", error);
    throw error; // Re-throw the error to propagate it to the caller
  }
}
