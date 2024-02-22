"use client";
import { useState } from "react";
import MyBox from "../common/MyBox";
import MyText from "../common/MyText";
import MyButton from "../common/MyButton";
import MyModel from "../common/MyModel";
import SignUpModel from "./SignUpModel";
import LoginModel from "./LoginModel";

const SignupModel = ({ setSignupModel }) => {
  const [loginModel, setLoginModel] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    // Handle login logic
    console.log("Logging in with email:", email, "and password:", password);
  };

  const handleLoginWithGoogle = () => {
    // Handle login with Google logic
    console.log("Logging in with Google");
  };

  return (
    <>
      <MyBox className="flex flex-col items-center justify-center p-4 rounded-2xl">
        <MyText className="text-3xl font-bold mb-8">Sign up</MyText>
        <div className="w-80">
          {/* user name */}
          <input
            type="text"
            placeholder="userName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4 focus:outline-none focus:border-blue-500"
          />
          {/* email  */}
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
          <MyButton
            myFunction={handleLogin}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            SignUp
          </MyButton>
          <MyText className={"flex justify-center w-full mt-1"}>
            Already have Account ?
            <span
              className="text-blue-500 pl-2 cursor-pointer"
              onClick={() => {
                setLoginModel(true);
                setSignupModel(true);
              }}
            >
              Login
            </span>
          </MyText>
          <MyButton
            myFunction={handleLoginWithGoogle}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none mt-2"
          >
            Login with Google
          </MyButton>
        </div>
      </MyBox>
      <MyModel
        open={loginModel}
        setOpen={setLoginModel}
        className={"flex justify-center items-center "}
      >
        <LoginModel />
      </MyModel>
    </>
  );
};

export default SignupModel;
