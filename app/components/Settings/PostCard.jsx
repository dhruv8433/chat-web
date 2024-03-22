"use client"
import { userAddPostServices } from "@/app/services/addUserPosts";
import { getUserPost } from "@/app/services/getUserPosts";
import { Card, CardActionArea, CardContent, CardMedia, CircularProgress, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PostCard = ({ onPostsLoaded }) => {
  const [post, setPosts] = useState([])
  const [loading, setLoading] = useState(true);
  const userId = useSelector((state) => state.auth.authUser.data.localId); // Get userId from Redux
  // get post 
  const fetchUserPosts = async () => {
    try {
      const postData = await getUserPost(userId);
      setPosts(postData.posts);
      setLoading(false)
      onPostsLoaded(postData.posts.length)
    } catch (error) {
      console.error("Error fetching user posts:", error);
      setLoading(false)
    }
  };
  // post added req
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("postImages", event.target.postImages.files[0]); // Assuming the input field name is "postImg"
    formData.append("userId", userId); // Include userId in the form data

    try {
      const response = await userAddPostServices(formData); // Assuming userAddPostServices is a function that sends a POST request with the form data to the backend
      console.log("Post added successfully:", response);
      // Handle success, maybe show a success message to the user
    } catch (error) {
      console.error("Error adding post:", error);
      // Handle error, maybe show an error message to the user
    }
  };
  useEffect(() => { fetchUserPosts() }, [userId])
  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input type="file" name="postImages" />
        <button type="submit">Submit</button>
      </form>
      <Divider />
      <h1>Post Info</h1>

      {
        loading ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={2}>
            {post.map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={6} lg={4} xl={4}>
                <Card key={post.id} sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={post.profile_url}
                      alt="Post Image"
                      sx={{ display: 'flex' }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {post.filename}
                      </Typography>

                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        )
      }

    </div>
  );
};

export default PostCard;
