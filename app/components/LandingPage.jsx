"use client";
import React, { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import LoginModel from "../model/LoginModel";

const LandingPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      alignItems="center"
      style={{
        backgroundColor: "white",
        border: "80px solid orange",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* Left Side */}
      <Grid item xs={12} md={6}>
        <div style={{ textAlign: "center" }}>
          <div style={{ marginBottom: "10px" }}>
            <Typography variant="h1">Let's connect</Typography>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Typography variant="h1">with your customer</Typography>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Typography variant="h1">in real time</Typography>
          </div>
          <Typography variant="h6">
            Your customers are waiting to chat with you. Start chatting now to
            provide real-time support and build better relationships.
          </Typography>
          <button
            className="button h-min w-max p-5 rounded m-auto mr-2 text-2xl capitalize"
            onClick={handleOpenModal}
          >
            Start Chatting Now
          </button>
          {/* Render LoginModel only if openModal is true */}
          {openModal && (
            <LoginModel open={openModal} onClose={handleCloseModal} />
          )}
        </div>
      </Grid>

      {/* Right Side */}
      <Grid item xs={12} md={6}>
        <div style={{ textAlign: "center" }}>
          <img
            src="/landImg.png"
            alt="Chatting"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
