"use client";

import MyBox from "../common/MyBox";
import MyText from "../common/MyText";
import { motion } from "framer-motion";
import Feature from "../common/Feature";
import React, { useState } from "react";
import MyButton from "../common/MyButton";
import LoginModel from "../model/LoginModel";
import SignUpModel from "../model/SignUpModel";
import UserNameModel from "../model/UserNameModel";
import { Grid, Modal, Paper } from "@mui/material";
import ThemeAnimation from "@/app/animations/theme.json";
import ExploreAnimation from "@/app/animations/explore.json";
import VideoCallAnimation from "@/app/animations/video-call.json";
import PostActionAnimation from "@/app/animations/postaction.json";
import ChattingMiniAnimation from "@/app/animations/chatting.json";

const LandingPage = () => {
  const [loginModel, setLoginModel] = useState(false);
  const [signupModel, setSignupModel] = useState(false);
  const [userNameModel, setUserNameModel] = useState(false);

  return (
    <div>
      {/* Bg -- mountains */}

      <div className="w-full relative">
        <img
          src="https://assets.cntraveller.in/photos/643e4e2d894e6f6e66aad427/16:9/w_4368,h_2457,c_limit/153245593"
          height={"100%"}
          width={"100%"}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <h1
            className={
              "font-bold text-center opacity-45 text-white hover:opacity-55"
            }
            style={{ fontSize: "300px" }}
          >
            explore
          </h1>
          {/* Action button -- login form */}
          <div className="">
            <MyButton
              myFunction={() => setLoginModel(true)}
              className={
                "text-start text-2xl mt-4 px-2 py-1 rounded border border-white bg-transparent font-bold"
              }
            >
              Login Now
            </MyButton>
          </div>
        </div>
      </div>

      {/* LOGIN Model */}
      <Modal
        open={loginModel}
        onClose={() => setLoginModel(false)}
        className={"flex justify-center items-center "}
      >
        <div className="">
          <LoginModel
            setLoginModel={setLoginModel}
            setSignupModel={setSignupModel}
            // if user logged in with google then we provide anotehr model where user have to set their username to contine the web
            setUserNameModel={setUserNameModel}
          />
        </div>
      </Modal>

      {/* SIGNUP Model */}
      <Modal
        open={signupModel}
        onClose={() => setSignupModel(false)}
        className={"flex justify-center items-center "}
      >
        <div className="">
          <SignUpModel
            setSignupModel={setSignupModel}
            setLoginModel={setLoginModel}
            // if user logged in with google then we provide anotehr model where user have to set their username to contine the web
            setUserNameModel={setUserNameModel}
          />
        </div>
      </Modal>

      {/* user set their username in this modal */}
      <Modal
        open={userNameModel}
        onClose={() => setUserNameModel(false)}
        className={"flex justify-center items-center "}
      >
        <div className="">
          <UserNameModel />
        </div>
      </Modal>

      {/* Feature */}
      <MyBox className={"w-full text-center py-5"}>
        <MyText className={"text-4xl font-semibold"}>
          Why to Consider This Web?
        </MyText>
        <MyBox className={"flex mt-4 justify-around"}>
          <Grid
            container
            sx={{ px: { md: " 10rem", xs: "2rem", sm: "5rem" } }}
            spacing={3}
          >
            {/* Feature - 1 */}
            <Feature
              animationData={ChattingMiniAnimation}
              md={4}
              heading={"Real time Chatting"}
              subHeading={
                "Real-time chatting sparks instant connections, fostering conversations that transcend boundaries. With each keystroke, words bridge gaps, emotions resonate, and friendships flourish. From fleeting hellos to heartfelt exchanges, it's a digital symphony of voices, uniting hearts and minds across the virtual landscape"
              }
            />

            {/* Feature - 2 */}
            <Feature
              animationData={VideoCallAnimation}
              md={4}
              heading={"Video Calling"}
              subHeading={
                "Video calling brings distant faces close, weaving a tapestry of shared moments in real-time. Through pixels and screens, voices echo, laughter fills the air, and expressions paint stories. It's more than just a call; it's a window to worlds, connecting souls across miles with warmth and intimacy. you can also share your emotions with your family."
              }
            />

            {/* Feature - 3 */}
            <Feature
              animationData={ExploreAnimation}
              md={4}
              heading={"Explore Eveything"}
              subHeading={
                "Exploring trending social media is like embarking on a digital adventure, where every click unveils a new narrative. It's a dynamic landscape of ideas, opinions, and creativity, where connections flourish and trends spark conversations. Navigating through feeds, we discover the pulse of society, shaping and reshaping our digital footprint."
              }
            />

            {/* Feature - 4 */}
            <Feature
              animationData={ThemeAnimation}
              md={4}
              heading={"Dark Light Modes"}
              subHeading={
                "Dark mode themes immerse users in a sleek, sophisticated ambiance, reducing eye strain and enhancing focus during nocturnal browsing. Conversely, light mode themes exude vibrancy and clarity, ideal for daytime activities, offering a refreshing visual experience that resonates with the ambiance of a bright, sunlit environment."
              }
            />

            {/* Feature - 5 */}
            <Feature
              animationData={PostActionAnimation}
              md={8}
              heading={"Like, Comment & Share"}
              subHeading={
                "Interactions such as likes, comments, and shares on a particular post play a pivotal role in shaping digital discourse and community engagement. They signify user appreciation, spark meaningful conversations, and amplify content reach across social networks"
              }
              subHeading1={
                "Each action serves as a catalyst for connection, fostering a sense of belonging and facilitating the exchange of ideas, opinions, and emotions within the online ecosystem."
              }
            />
          </Grid>
        </MyBox>
      </MyBox>
    </div>
  );
};

export default LandingPage;
