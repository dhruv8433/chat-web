"use client";

import { Grid, Modal, Paper } from "@mui/material";
import React, { useState } from "react";
import MyBox from "../common/MyBox";
import MyText from "../common/MyText";
import MyButton from "../common/MyButton";
import ChattingMiniAnimation from "@/app/animations/chatting.json";
import VideoCallAnimation from "@/app/animations/video-call.json";
import ExploreAnimation from "@/app/animations/explore.json";
import ThemeAnimation from "@/app/animations/theme.json";
import PostActionAnimation from "@/app/animations/postaction.json";
import Feature from "../common/Feature";
import { motion } from "framer-motion";
import LoginModel from "../model/LoginModel";
import SignUpModel from "../model/SignUpModel";

const LandingPage = () => {
  const [loginModel, setLoginModel] = useState(false);
  const [signupModel, setSignupModel] = useState(false);

  return (
    <div>
      <Paper>
        <MyBox className={"h-full"}>
          {/* Grid content */}
          <Grid container>
            <Grid item xs={12} md={4}>
              <motion.div className="flex flex-col p-8 justify-center h-full">
                <MyBox>
                  {/* animation 1 sec */}
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <h1
                      className={
                        "md:text-6xl sm:text-4xl mb-4 text-[#898cce] font-bold"
                      }
                    >
                      New Generation Chat Web
                    </h1>

                    <MyText className={"text-xl"}>
                      "Chatting is more than just exchanging words; it's about
                      connecting hearts, bridging distances, and creating bonds
                      that transcend time and space."
                    </MyText>

                    <MyText className={"text-xl"}>
                      Connect with friends, family, and colleagues in real-time
                      with our secure and reliable chat platform.
                    </MyText>
                  </motion.div>
                  <MyBox className={""}>
                    {/* on button click myFunction Executed -- onClick Event */}
                    <MyButton
                      myFunction={() => setLoginModel(true)}
                      className={"text-start mt-4 px-2 py-1 rounded"}
                    >
                      Login Now
                    </MyButton>
                  </MyBox>
                </MyBox>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={8}>
              <img
                src="https://cdn.dribbble.com/users/291221/screenshots/5601520/media/94c902c5cf585645af1a3cfb16335acf.gif"
                height={"500px"}
                width={"100%"}
                alt=""
              />
            </Grid>
          </Grid>

          {/* Signup Model */}
          <Modal
            open={loginModel}
            onClose={() => setLoginModel(false)}
            className={"flex justify-center items-center "}
          >
            <LoginModel
              setLoginModel={setLoginModel}
              setSignupModel={setSignupModel}
            />
          </Modal>

          <Modal
            open={signupModel}
            onClose={() => setSignupModel(false)}
            className={"flex justify-center items-center "}
          >
            <SignUpModel
              setSignupModel={setSignupModel}
              setLoginModel={setLoginModel}
            />
          </Modal>

          {/* Feature */}
          <MyBox className={"w-full text-center py-5"}>
            <MyText className={"text-4xl font-semibold"}>
              Why to Consider This Chatting Web?
            </MyText>
            <MyBox className={"flex mt-4 justify-around"}>
              <Grid container className="px-60" spacing={3}>
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
        </MyBox>
      </Paper>
    </div>
  );
};

export default LandingPage;
