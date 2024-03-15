"use client"
import { userAddPostServices } from "@/app/services/addUserPosts";
import React, { useState } from "react";

const PostCard = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("postImg", e.target.postImg.files[0]);

    try {
      const responseData = await userAddPostServices(formData); // Call service function with FormData
      if (responseData && responseData.file && responseData.file.url) {
        console.log("File uploaded successfully!");
        setImageUrl(responseData.file.url);
      } else {
        console.error("Failed to upload file");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">

        <input type="file" name="postImg" />
        <button type="submit">submit</button>
      </form>

      <h1>Post Info</h1>
      {imageUrl && <img src={imageUrl} alt='Uploaded' />}
    </div>
  );
};

export default PostCard;
