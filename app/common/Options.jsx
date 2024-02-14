"use client"

import { Divider, Icon } from "@mui/material";
import React from "react";
import MyIcon from "./MyIcon";

const Options = ({ OptionIcon, title, callPage }) => {
  return (
    <>
      <div className="flex items-center rounded-2xl h-20 relative hover:cursor-pointer hover:bg-[#494c55]">
        {/* icons */}
        <div className="ml-3">
          <MyIcon className="h-10 overflow-visible" sx={{ height: 20, width: 20, overflow: "visible" }}>
            <OptionIcon />
          </MyIcon>
        </div>
        
        {/* content */}
        <div className="">
          <h1 className="text-xl ml-4">{title}</h1>
          {/* if it's calls page than only visible time and call type */}
          {callPage && (
            <p className="ml-4">
              12:20 <span>voice call</span>
            </p>
          )}
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Options;
