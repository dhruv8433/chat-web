"use client";

import { Divider } from "@mui/material";
import React from "react";
import MyIcon from "./MyIcon";
import MyText from "./MyText";

const Options = ({ OptionIcon, title, callPage }) => {
  return (
    <>
      <div className="flex items-center rounded-2xl h-20 relative hover:cursor-pointer hover:bg-[#494c55]">
        {/* icons */}
        <div className="ml-3">
          <MyIcon
            className="h-10 overflow-visible"
            sx={{ height: 20, width: 20, overflow: "visible" }}
          >
            <OptionIcon />
          </MyIcon>
        </div>

        {/* content */}
        <div className="">
          <MyText className="text-xl ml-4">{title}</MyText>
          {/* if it's calls page than only visible time and call type */}
          {callPage && (
            <MyText className="ml-4">
              12:20 <span>voice call</span>
            </MyText>
          )}
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Options;
