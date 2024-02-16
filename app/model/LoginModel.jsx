"use client";
import React, { useState } from "react";
import {
  Modal,
  TextField,
  Button,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import SignUpModel from "./SignUpModel";
import { loginservice } from "../services/loginService";
import { useDispatch } from "react-redux";
import {
  loginUserFailure,
  loginUserSuccess,
} from "../components/action/action";
import Cookies from "js-cookie";
import MyModel from "../common/MyModel";
import { handleSignIn } from "../authContext";
import MyButton from "../common/MyButton";
import MyTextField from "../common/MyTextField";
import MyBox from "../common/MyBox";

const LoginModel = ({ onClose }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!login.username || !login.password) {
      console.error("Please fill in all the fields");
      return;
    }

    try {
      const response = await loginservice(login.username, login.password);
      onClose();
      Cookies.set("user", true);
      dispatch(loginUserSuccess(response));
      console.log("Logged in successfully");
    } catch (error) {
      console.error("Login failed");
      Cookies.set("user", false);
      dispatch(loginUserFailure);
      console.log(error);
    }
  };

  const [openSignUpModal, setOpenSignUpModal] = useState(false); // State to manage visibility of signup modal

  const handleClose = () => {
    onClose();
  };

  const handleLogin = () => {
    // Handle login functionality here
  };

  const handleSignUp = () => {
    setOpenSignUpModal(true); // Open signup modal when "Sign up now!" is clicked
  };
  const openLoginModal = () => {
    setOpenSignUpModal(false);
    // Add logic to open the login modal
  };
  return (
    <>
      <div>
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
              Login Form
            </Typography>
            <Grid container spacing={2} direction="column">
              <Grid item xs={12}>
                <MyTextField
                  label={"Username"}
                  type={"username"}
                  myFunction={(e) =>
                    setLogin({
                      ...login,
                      username: e.target.value,
                    })
                  }
                  value={login.username}
                />
              </Grid>
              <Grid item xs={12}>
                <MyTextField
                  label={"Password"}
                  type={"password"}
                  myFunction={(e) =>
                    setLogin({
                      ...login,
                      password: e.target.value,
                    })
                  }
                  value={login.password}
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <MyButton
                  className="button text-white h-min w-max p-2 rounded  px-10 text-xl "
                  myFunction={() => handleLogin()}
                  type={"submit"}
                >
                  Login
                </MyButton>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ color: theme.palette.background.text }}
                >
                  Don't have an account?{" "}
                  <span
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={handleSignUp} // Open signup modal when clicked
                  >
                    Sign up now!
                  </span>
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center", marginTop: 10 }}>
                <MyButton
                  className="button text-white h-min w-max p-2 rounded px-10  text-xl"
                  myFunction={() => handleSignIn({ dispatch })}
                >
                  Login with Google
                </MyButton>
              </Grid>
            </Grid>
          </form>
        </MyBox>
      </div>

      <MyModel open={openSignUpModal} setOpen={setOpenSignUpModal}>
        <SignUpModel
          onClose={() => setOpenSignUpModal(false)}
          openLoginModal={openLoginModal}
        />
      </MyModel>
    </>
  );
};

export default LoginModel;
