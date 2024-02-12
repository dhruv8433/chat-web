import React from "react";
import { Grid, Typography, Button } from "@mui/material";

const LandingPage = () => {
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
          <Button variant="contained" color="primary" size="large" href="/chat">
            Start Chatting Now
          </Button>
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
