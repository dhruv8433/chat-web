"use client";

import React, { useState } from "react";
import MyBox from "../common/MyBox";
import MyText from "../common/MyText";
import { debounce } from "lodash";
import { checkUserName } from "../services/checkUserNameService";
import MyButton from "../common/MyButton";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginUserSuccess } from "../action/action";
import { googleSignup } from "../services/googleSignup";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

// when user hit google sign up btn we open this model for some extra details
const UserNameModel = () => {
  const user = JSON.parse(localStorage.getItem("google"));

  const [username, setUserName] = useState("");
  const [response, setResponse] = useState(true);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

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
    setUserName(value);
    debounceApiCall(value);
  };

  async function submitUserDetails() {
    try {
      const response = await googleSignup(user, username);
      console.log("user here", response);
      dispatch(loginUserSuccess(response));
      toast.success("user logged in successfully");
      Cookies.set("user", true);
      // redirect user to explore page
      router.push("/explore");
    } catch (error) {
      console.log("error in google login: ", error);
    }
  }

  return (
    <MyBox className="flex flex-col items-center justify-center p-4 rounded-2xl">
      <img
        src={user.photoUrl}
        className="rounded-full"
        alt="user-dp"
        height={100}
        width={100}
      />
      <MyText className={"text-lg"}>
        Hello, Welcome to our website{" "}
        <span className="font-semibold">{user.displayName}</span>
      </MyText>
      <MyText>Please provide your username to continue...</MyText>
      {/* user name */}
      <input
        type="text"
        placeholder="userName"
        value={username}
        onChange={handleUsernameChange}
        className="w-full border border-gray-300 rounded-md py-2 px-3 mb-2 focus:outline-none focus:border-blue-500"
      />
      <div className="text-end w-full">
        {loading && <MyText>Loading...</MyText>}
        {loading ? "" : !response ? <span>✅</span> : <span>❌</span>}
      </div>

      <MyButton myFunction={submitUserDetails}>Submit</MyButton>
    </MyBox>
  );
};

export default UserNameModel;
