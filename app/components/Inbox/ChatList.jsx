import * as React from "react";
import { red } from "@mui/material/colors";
import { Avatar, Box, useTheme } from "@mui/material";
import { MyTextAvatar } from "@/app/common/MyAvatar";
import Link from "next/link";

export default function ChatList() {
  const theme = useTheme();
  return (
    <Box bgcolor={theme.palette.primary.main} className="rounded-2xl">
      <div className="flex text px-4 hover:cursor-pointer py-2 mb-2 rounded-2xl">
        <div>
          <MyTextAvatar title={"R"} />
        </div>

        {/* TODO -> Dynamic pass ID */}

        <Link href={"/chats/23"}>
          <div className="text-start ml-3 w-full">
            <div className="flex justify-between w-full">
              <h1>#Partner</h1>
              <p>12:24</p>
            </div>
            <h1>September 14, 2016</h1>
          </div>
        </Link>
      </div>

      <div className="flex text px-4 hover:cursor-pointer py-2 mb-2 rounded-2xl">
        <div className="">
          <MyTextAvatar title={"R"} />{" "}
        </div>
        <div className="text-start ml-3 w-full">
          <div className="flex justify-between w-full">
            <h1>#Partner</h1>
            <p>12:24</p>
          </div>
          <h1>September 14, 2016</h1>
        </div>
      </div>
    </Box>
  );
}
