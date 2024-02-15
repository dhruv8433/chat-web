"use client";
import React, { useState } from "react";
import { TextField, Grid, Typography } from "@mui/material";
import { signupservice } from "../services/signupService";
import MyBox from "../common/MyBox";

const SignUpModel = ({ onClose }) => {
  const [signup, setSignup] = useState({ username: "", password: "" });
  async function handleSubmit(e) {
    e.preventDefault();
    if (!signup.username || !signup.password) {
      console.error("please fill in all the field");
    }
    try {
      const response = await signupservice(signup.username, signup.password);
      console.log(response);
      onClose();
      console.log("Account Created Successfully");
    } catch (error) {
      console.error("Failed to Create Account");
      console.log(error);
    }
  }

  return (
    <MyBox className={"w-[300px]"}>
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
                // onClick={handleOpenLogin} // Open signup modal when clicked
              >
                login Here!
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center", marginTop: 10 }}>
            <button
              className="button text-white h-min w-max p-2 rounded px-10  text-xl"
              // onClick={handleSignInWithGoogle}
            >
              Sign Up with Google
            </button>
          </Grid>
        </Grid>
      </form>
    </MyBox>
  );
};

export default SignUpModel;
