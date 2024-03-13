import React from "react";

const PostCard = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("postImg", e.target.postImg.files[0]);

    try {
      const response = await fetch("http://localhost:8080/api/v1/add-post", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("File uploaded successfully!");
      } else {
        console.error("Failed to upload file");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  return (
    <div>
      <form action ="http://localhost:8080/api/v1/add-post"onSubmit={handleSubmit} method="POST" encType="multipart/form-data">

        <input type="file" name="postImg" />
        <button type="submit">submit</button>
      </form>
      <h1>Post Info</h1>
    </div>
  );
};

export default PostCard;
