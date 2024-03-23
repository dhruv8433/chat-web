"use client"
import MyLink from "@/app/common/MyLink";
import MyText from "@/app/common/MyText";
import { userAddPostServices } from "@/app/services/addUserPosts";
import { getUserPost } from "@/app/services/getUserPosts";
import { Button, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Divider, Grid, Modal, TextField, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CameraIcon from "@mui/icons-material/PhotoCamera"; // Importing the camera icon
import MyButton from "@/app/common/MyButton";
const PostCard = ({ onPostsLoaded }) => {
  const theme = useTheme()
  const [post, setPosts] = useState([])
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  // Function to handle opening the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => { fetchUserPosts() }, [userId])
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '20px', cursor: 'pointer' }} onClick={handleOpenModal}>
        {/* add camera */}
        <CameraIcon style={{ fontSize: "40px", borderRadius: "50%", border: "1px solid #000", padding: "20px" }} />
        <MyText style={{ fontWeight: "bold", fontSize: "40px" }}>Share Photos</MyText>
        <MyText >When you share photos, they will appear on your profile </MyText>
        <MyText className={{ color: 'to-blue-500' }}>Share your first photo</MyText>
      </div>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', borderRadius: '10px', backgroundColor: theme.palette.background.body, color: theme.palette.background.text }}>
          <MyText>Create new post</MyText>
          <Divider />
          {/* img */}
          <div style={{ margin: '60px' }}>
            <img src='https://aeromegh.com/wp-content/uploads/2023/05/Image-Upload.png' width={'200px'} height='100px' alt='upload img photos' />
            <MyText >Drag photos and videos here</MyText>
            <form onSubmit={handleSubmit}>
              <TextField type="file" name="postImages" />
              <MyButton type='submit'>Submit</MyButton>
            </form>
          </div>
        </div>
      </Modal>
      <Divider />
      <h1>Posts</h1>
    

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
                      <MyText>{post.filename}</MyText>

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
