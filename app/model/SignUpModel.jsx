"use client";

import React, { useState } from "react";
import MyBox from "../common/MyBox";
import MyText from "../common/MyText";
import MyButton from "../common/MyButton";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginUserSuccess } from "../action/action";
import { signupservice } from "../services/signupService";
import { debounce } from "lodash";
import { checkUserName } from "../services/checkUserNameService";
import { signInWithGoogle } from "../services/googlePopupProvider";
import { signupCheck } from "../services/signupCheck";

const SignupModel = ({ setSignupModel, setLoginModel }) => {
  // Username, password, Name and email for user data.
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(true);

  const dispatch = useDispatch();

  // when user give custom data while sign up
  const signIn = async () => {
    try {
      const userCredential = await signupservice(
        userData.username,
        userData.password,
        userData.email,
        userData.name
      );
      console.log("user", userCredential);
      toast.success("Sign up successful!");
    } catch (err) {
      console.error(err);
      toast.error("Sign up error !");
    }
  };

  // when user attempt signup with GOOGLE
  async function googleSignIn() {
    try {
      const response = await signInWithGoogle();
      console.log(response);
      localStorage.setItem("google", JSON.stringify(response));
      // now user have to provide username to continue chatting...
      try {
        const result = await signupCheck(response.email);
        // set user data in this format
        const user = {
          data: response,
          message: "login success",
        };
        if (result.error === true) {
          console.log("user donenonde");
          dispatch(loginUserSuccess(user));
          Cookies.set("user", true);
          toast.success("Google login success..");
        } else {
          console.log("open popup");
          setLoginModel(false);
          setUserNameModel(true);
        }
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }


  // Debounce the API request to wait for the user to stop typing
  const debounceApiCall = debounce(async (inputValue) => {
    setLoading(true);
    // Make API request to check username validity
    try {
      console.log(inputValue);
      const response = await checkUserName({ userName: inputValue });
      console.log("response: ", response.error);
      // timeout for loading statement
      setTimeout(() => {
        setResponse(response.error);
        setLoading(false);
      }, 1000); // Simulate API call delay of 1 second
    } catch (error) {
      console.error("Error checking username:", error);
      setLoading(false);
    }
  }, 1000);

  const handleUsernameChange = (e) => {
    const { value } = e.target;
    setUserData({ ...userData, username: value });
    debounceApiCall(value);
  };

  function LoginModelOpen() {
    setSignupModel(false);
    setLoginModel(true);
  }

  return (
    <>
      <MyBox className="flex flex-col items-center justify-center p-4 rounded-2xl">
        <MyText className="text-3xl font-bold mb-8">Sign up</MyText>
        <div className="w-80">
          {/* user name */}
          <input
            type="text"
            placeholder="userName"
            value={userData.username}
            onChange={handleUsernameChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2 focus:outline-none focus:border-blue-500"
          />
          <div className="text-end w-full">
            {loading && <MyText>Loading...</MyText>}
            {loading ? "" : !response ? <span>✅</span> : <span>❌</span>}
          </div>

          {/* email */}
          <input
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4 focus:outline-none focus:border-blue-500"
          />
          {/* password */}
          <input
            type="password"
            placeholder="Password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4 focus:outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Display Name"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-6 focus:outline-none focus:border-blue-500"
          />
          <MyButton
            myFunction={signIn}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            SignUp
          </MyButton>
          <MyText className={"flex justify-center w-full mt-1"}>
            Already have an account?
            <span
              className="text-blue-500 pl-2 cursor-pointer"
              onClick={LoginModelOpen}
            >
              Login
            </span>
          </MyText>
          <MyButton
            myFunction={googleSignIn}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none mt-2"
          >
            Login with Google
          </MyButton>
        </div>
      </MyBox>
    </>
  );
};

export default SignupModel;
