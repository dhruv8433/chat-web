"use client"
import { Avatar, Divider, useTheme, Modal, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { MyTextAvatar } from "@/app/common/MyAvatar";
import MyBox from "@/app/common/MyBox";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "@/app/common/MyButton";
import { addBio, editBio, removeBio } from "@/app/action/action"; // Import the action creators for adding, editing, and removing bio

const ProfileLeft = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const textStyle = {
    color: theme.palette.background.text,
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bio, setBio] = useState("");
  const storedBio = useSelector((state) => state.Bio.bio);

  useEffect(() => {
    // Set the bio from the Redux store as the initial state when the component mounts
    setBio(storedBio);
  }, [storedBio]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddBio = () => {
    dispatch(addBio(bio)); // Dispatch the action to add bio to the Redux store
    handleCloseModal();
  };


  const handleRemoveBio = () => {
    dispatch(removeBio()); // Dispatch the action to remove bio from the Redux store
    setBio(""); // Clear the bio state locally
    handleCloseModal();
  };

  return (
    <MyBox isPrimary={true} className="border border-black min-h-[770px]  rounded-2xl">
      {/* Avatar, following and posts info */}
      <div className="mt-4 flex justify-around">
        <MyTextAvatar className='h-36 w-36' />
        <div className="flex flex-col justify-center text-center">
          <h1 style={textStyle}>1</h1>
          <h1 style={textStyle}>Posts</h1>
        </div>
        <div className="flex flex-col justify-center text-center">
          <h1 style={textStyle}>10</h1>
          <h1 style={textStyle}>Followers</h1>
        </div>
        <div className="flex flex-col justify-center text-center">
          <h1 style={textStyle}>10</h1>
          <h1 style={textStyle}>Following</h1>
        </div>
      </div>

      {/* user details and captions */}
      <div className="m-10 mt-2">
        <div className="flex">
          <h1 className="chat-name text-2xl" style={textStyle}>Partner</h1>
          <MyButton
            title={"Edit Bio"}
            className="button h-min w-max p-2 rounded m-auto mr-2"
            myFunction={handleOpenModal}
          >
            Edit Bio
          </MyButton>
        </div>
        <pre style={textStyle}>
          {bio}
        </pre>
        {/* Buttons for editing and removing bio */}

        {
          bio && (

            <div>

              <MyButton
                title={"Remove Bio"}
                className="button h-min w-max p-2 rounded m-auto mr-2"
                myFunction={handleRemoveBio}
              >
                Remove Bio
              </MyButton>
            </div>
          )
        }
      </div>

      <Divider />

      {/* user posts */}
      <div className="p-10" style={textStyle}>
        POSTS
        <PostCard />
      </div>

      {/* Bio modal */}
      <Modal open={isModalOpen} onClose={handleCloseModal} className="flex justify-center h-min mt-10" sx={{ justifyContent: 'center' }}>
        <div>
          <TextField
            style={{
              color: theme.palette.background.text,
              backgroundColor: theme.palette.primary.main,
            }}
            id="bio-input"
            label="Bio"
            multiline
            rows={4}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />

          <MyButton
            title={"ADD"}
            className="button h-min w-max p-2 rounded m-auto mr-2"
            myFunction={handleAddBio}
          >
            ADD
          </MyButton>
        </div>
      </Modal>
    </MyBox>
  );
};

export default ProfileLeft;
