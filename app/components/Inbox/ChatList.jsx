import * as React from "react";
import { red } from "@mui/material/colors";
import { Avatar } from "@mui/material";

export default function ChatList() {
  return (
    <div className="primary">
      <div className="flex text px-4 hover:secondary hover:cursor-pointer py-2 mb-2 rounded-2xl">
        <div className="">
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        </div>
        <div className="text-start ml-3 w-full">
          <div className="flex justify-between w-full">
            <h1>#Partner</h1>
            <p>12:24</p>
          </div>
          <h1>September 14, 2016</h1>
        </div>
      </div>

      <div className="flex text px-4 primary hover:secondary hover:cursor-pointer py-2 mb-2 rounded-2xl">
        <div className="">
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        </div>
        <div className="text-start ml-3 w-full">
          <div className="flex justify-between w-full">
            <h1>#Partner</h1>
            <p>12:24</p>
          </div>
          <h1>September 14, 2016</h1>
        </div>
      </div>
    </div>
  );
}
