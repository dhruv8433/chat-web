"use client";
import { useState } from "react";
import MyBox from "../common/MyBox";
import MyText from "../common/MyText";
import MyButton from "../common/MyButton";
import MyModel from "../common/MyModel";
import SignUpModel from "./SignUpModel";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { loginUserSuccess } from "../action/action";
import Cookies from "js-cookie";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import GoogleButton from "react-google-button";

const LoginModel = ({ setLoginModel }) => {
  const [signupModel, setSignupModel] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();


  const signIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      dispatch(loginUserSuccess(user));
      Cookies.set("user-auth", true);
      toast.success("login sucess")
    } catch (err) {
      console.error(err);
      Cookies.set("user-auth", false);
      toast.error("login failed,please try again later.")
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = result.user;
      dispatch(loginUserSuccess(user)); //
      Cookies.set("user", true);
      toast.success("login successful!")
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
          {/* <MyButton
            myFunction={signInWithGoogle}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none mt-2"
          >
            Login with Google
          </MyButton> */}

          <GoogleButton className="g-btn "
            type="dark"
            onClick={signInWithGoogle} style={{ width: '100%' }} />
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
