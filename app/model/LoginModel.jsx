"use client";
import { useState } from "react";
import MyBox from "../common/MyBox";
import MyText from "../common/MyText";
import MyButton from "../common/MyButton";
import MyModel from "../common/MyModel";
import SignUpModel from "./SignUpModel";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { loginUserSuccess, logoutuser } from "../action/action";
import Cookies from "js-cookie";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";

const LoginModel = ({ setLoginModel }) => {
  const [signupModel, setSignupModel] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  // const handleLogin = () => {
  //   // Handle login logic
  //   console.log("Logging in with email:", email, "and password:", password);
  // };

  // const handleLoginWithGoogle = () => {
  //   // Handle login with Google logic
  //   console.log("Logging in with Google");
  // };

  const signIn = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      dispatch(loginUserSuccess(user));
      Cookies.set("user-auth", true);
    } catch (err) {
      console.error(err);
      Cookies.set("user-auth", false);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = result.user;
      dispatch(loginUserSuccess(user)); //
      Cookies.set("user", true);
    } catch (err) {
      console.error(err);
      Cookies.set("user", false);
    }
  };

  
  return (
    <>
      <MyBox className="flex flex-col items-center justify-center p-4 rounded-2xl">
        <MyText className="text-3xl font-bold mb-8">Login</MyText>
        <div className="w-80">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4 focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-6 focus:outline-none focus:border-blue-500"
          />
          <MyButton
            myFunction={signIn}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Login
          </MyButton>
          <MyText className={"flex justify-center w-full mt-1"}>
            No Account ?
            <span
              className="text-blue-500 pl-2 cursor-pointer"
              onClick={() => {
                // setLoginModel(false);
                setSignupModel(true);
              }}
            >
              Sign Up
            </span>
          </MyText>
          <MyButton
            myFunction={signInWithGoogle}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none mt-2"
          >
            Login with Google
          </MyButton>
        </div>
      </MyBox>
      <MyModel
        open={signupModel}
        setOpen={setSignupModel}
        className={"flex justify-center items-center "}
      >
        <SignUpModel setSignupModel={setSignupModel} />
      </MyModel>
    </>
  );
};

export default LoginModel;
