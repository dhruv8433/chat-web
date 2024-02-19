import * as React from "react";
import { red } from "@mui/material/colors";
import { Avatar, Box, useTheme } from "@mui/material";
import { MyTextAvatar } from "@/app/common/MyAvatar";
import Link from "next/link";
import MyText from "@/app/common/MyText";

export default function ChatList() {
  const theme = useTheme();
  return (
    <Box bgcolor={theme.palette.primary.main} className="rounded-2xl">
      <div className="flex text px-4 hover:cursor-pointer py-2 mb-2 rounded-2xl">
        <div>
          <MyTextAvatar title={"R"} />
        </div>

        {/* TODO -> Dynamic pass ID */}

        <Link href={"/chats/23"} className="w-full">
          <div className="text-start ml-3 w-full">
            <div className="flex justify-between w-full">
              <MyText>#Partner</MyText>
              <MyText>12:24</MyText>
            </div>
            <MyText>September 14, 2016</MyText>
          </div>
        </Link>
      </div>

      <div className="flex text px-4 hover:cursor-pointer py-2 mb-2 rounded-2xl">
        <div className="">
          <MyTextAvatar title={"R"} />{" "}
        </div>
        <div className="text-start ml-3 w-full">
          <div className="flex justify-between w-full">
            <MyText>#Partner</MyText>
            <MyText>12:24</MyText>
          </div>
          <MyText>September 14, 2016</MyText>
        </div>
      </div>
    </Box>
  );
}
