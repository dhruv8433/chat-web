"use client";

import Cookies from "js-cookie";
import { useState } from "react";
import MyBox from "../common/MyBox";
import MyText from "../common/MyText";
import MyModel from "../common/MyModel";
import SignUpModel from "./SignUpModel";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import MyButton from "../common/MyButton";
import { useRouter } from "next/navigation";
import { loginUserSuccess } from "../action/action";
import { loginservice } from "../services/loginService";
import { signInWithGoogle } from "../services/googleSignIn";

const LoginModel = ({ setLoginModel }) => {
  const [signupModelOpen, setSignupModelOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // when user attempt login with their email and password
  const loginUser = async () => {
    try {
      console.log("getting user data", email, password);
      const user = await loginservice(email, password);
      dispatch(loginUserSuccess(user));
      Cookies.set("user", true);
      router.push("/explore");
      toast.success("login sucess");
    } catch (err) {
      console.error(err);
      toast.error("login failed,please try again later.");
    }
  };

  const router = useRouter();

  // when user attempt signup with GOOGLE
  async function googleSignIn() {
    try {
      const response = await signInWithGoogle();
      console.log(response);
      dispatch(loginUserSuccess(response));
      Cookies.set("user", true);
      toast.success("Google login success..");
    } catch (error) {
      console.log(error);
    }
  }

  function signupModelVisible() {
    // setLoginModel(false);
    setSignupModelOpen(true);
    console.log("signup model changed", signupModelOpen);
  }

  return (
    <>
      <MyBox className="flex flex-col items-center justify-center p-4 rounded-2xl">
        <MyText className="text-3xl font-bold mb-8">Login</MyText>
        <div className="w-80">
          {/* email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4 focus:outline-none focus:border-blue-500"
          />

          {/* password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-6 focus:outline-none focus:border-blue-500"
          />

          {/* login */}
          <MyButton
            myFunction={loginUser}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Login
          </MyButton>
          <MyText className={"flex justify-center w-full mt-1"}>
            No Account ?
            <span
              className="text-blue-500 pl-2 cursor-pointer"
              onClick={signupModelVisible}
            >
              Sign Up
            </span>
          </MyText>

          {/* login with GOOGLE */}
          <MyButton
            // provide dispatch and router that only supports in this class code
            myFunction={() => googleSignIn()}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none mt-2"
          >
            Login with Google
          </MyButton>
        </div>
      </MyBox>

      {/* SIGN UP model */}
      <MyModel
        open={signupModelOpen}
        setOpen={setSignupModelOpen}
        className={"flex justify-center items-center "}
      >
        <SignUpModel setSignupModel={setSignupModelOpen} />
      </MyModel>
    </>
  );
};

export default LoginModel;
