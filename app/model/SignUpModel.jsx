"use client";
import React, { useState } from "react";
import { TextField, Grid, Typography, useTheme } from "@mui/material";
import { signupservice } from "../services/signupService";
import MyBox from "../common/MyBox";
import MyButton from "../common/MyButton";
import { handleSignIn } from "../authContext";
import { useDispatch } from "react-redux";
import MyTextField from "../common/MyTextField";

const SignUpModel = ({ onClose }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
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
    <MyBox
      className={"w-[300px]"}
      style={{
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
          style={{
            textAlign: "center",
            marginBottom: 30,
            color: theme.palette.background.text,
          }}
        >
          SignUp Form
        </Typography>
        <Grid container spacing={2} direction="column">
          <Grid item xs={12}>
            <MyTextField
              label={"Username"}
              type={"username"}
              myFunction={(e) =>
                setSignup({
                  ...signup,
                  username: e.target.value,
                })
              }
              value={signup.username}
            />
          </Grid>
          <Grid item xs={12}>
            <MyTextField
              label={"Password"}
              type={"password"}
              value={signup.password}
              myFunction={(e) =>
                setSignup({
                  ...signup,
                  password: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <MyButton
              type={"submit"}
              className="button text-white h-min w-max p-2 rounded  px-10 text-xl "
            >
              Sign Up
            </MyButton>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              gutterBottom
              style={{ color: theme.palette.background.text }}
            >
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
            <MyButton
              className="button text-white h-min w-max p-2 rounded px-10  text-xl"
              myFunction={() => handleSignIn({ dispatch })}
            >
              SignUp with Google
            </MyButton>
          </Grid>
        </Grid>
      </form>
    </MyBox>
  );
};

export default SignUpModel;
