"use client"
import React, { useState } from "react";
import { Modal, TextField, Button, Grid, Typography } from "@mui/material";
import { signupservice } from "../services/signupService";

const SignUpModel = ({ open, onClose, openLoginModal }) => {
  const [signup, setSignup] = useState({ username: "", password: "" });
  async function handleSubmit(e) {
    e.preventDefault();
    if (
      !signup.username ||
      !signup.password 
    ) {
      console.error("please fill in all the field");
    }
    try {
      const response = await signupservice(signup.username, signup.password);
      console.log(response);
      onClose()
      console.log("Account Created Successfully");
    } catch (error) {
      console.error("Failed to Create Account");
      console.log(error);
    }
  }
  const handleClose = () => {
    onClose();
  };

  const handleLogin = () => {
    // Handle login functionality here
  };

  const handleSignInWithGoogle = () => {
    // Handle sign up with Google functionality here
  };
  const handleOpenLogin = () => {
    // Open the login modal
    onClose(); // Close the current signup modal
    openLoginModal(); // Open the login modal
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          borderRadius: 8,
          padding: 20,
          minWidth: 300,
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography
            variant="h5"
            gutterBottom
            style={{ textAlign: "center", marginBottom: 30 }}
          >
            SignUp Form
          </Typography>
          <Grid container spacing={2} direction="column">
            <Grid item xs={12}>
              <TextField
                label="Username"
                variant="filled"
                fullWidth
                onChange={(e) =>
                  setSignup({
                    ...signup,
                    username: e.target.value,
                  })
                }
                value={signup.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                variant="filled"
                fullWidth
                onChange={(e) =>
                  setSignup({
                    ...signup,
                    password: e.target.value,
                  })
                }
                value={signup.password}
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <button
                className="button text-white h-min w-max p-2 rounded  px-10 text-xl "
                onClick={handleLogin}
                type="submit"
              >
                Login
              </button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Already have an account?{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={handleOpenLogin} // Open signup modal when clicked
                >
                  login Here!
                </span>
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center", marginTop: 10 }}>
              <button
                className="button text-white h-min w-max p-2 rounded px-10  text-xl"
                onClick={handleSignInWithGoogle}
              >
                Sign Up with Google
              </button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Modal>
  );
};

export default SignUpModel;
