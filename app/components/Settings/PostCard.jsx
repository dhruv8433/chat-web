"use client"
import { userAddPostServices } from "@/app/services/addUserPosts";
import { getUserPost } from "@/app/services/getUserPosts";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const PostCard = () => {
  const [posts, setPosts] = useState([])

  // get post 
  const fetchUserPosts = async () => {
    try {
      const postData = await getUserPost("SKybRaMPvu7Fxb5t1Trc");
      setPosts([postData]); // Assuming the response contains a "posts" array
      console.log(postData, "posts-get")
    } catch (error) {
      console.error("Error fetching user posts:", error);
    }
  };
  // post added req
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
  useEffect(() => { fetchUserPosts() }, [])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" name="postImages" />
        <button type="submit">Submit</button>
      </form>

      <h1>Post Info</h1>
      {posts.map((post) => (
        <Card key={post.id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={post.profile_url} // Assuming "profile_url" contains the image URL
              alt="Post Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {post.filename}
              </Typography>

            </CardContent>
          </CardActionArea>
        </Card>
      ))}

    </div >
  );
};

export default PostCard;
