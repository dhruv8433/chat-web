"use client"
import { userAddPostServices } from "@/app/services/addUserPosts";
import React, { useState } from "react";

const PostCard = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("postImages", event.target.postImages.files[0]); // Assuming the input field name is "postImg"

    try {
      const response = await userAddPostServices(formData); // Assuming userAddPostServices is a function that sends a POST request with the form data to the backend
      console.log("Post added successfully:", response);
      // Handle success, maybe show a success message to the user
    } catch (error) {
      console.error("Error adding post:", error);
      // Handle error, maybe show an error message to the user
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" name="postImages" />
        <button type="submit">Submit</button>
      </form>

      <h1>Post Info</h1>
    </div >
  );
};

export default PostCard;
