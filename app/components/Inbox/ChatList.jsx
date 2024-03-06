"use client";

import React, { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import { MyTextAvatar } from "@/app/common/MyAvatar";
import Link from "next/link";
import MyText from "@/app/common/MyText";
import { useSelector } from "react-redux";
import MyBox from "@/app/common/MyBox";

export default function ChatList() {
  const theme = useTheme();
  const usersList = useSelector((state) => state.chatUser.users);
  const [users, setUsers] = useState([]);

  // Update users state when usersList changes
  useEffect(() => {
    if (usersList) {
      setUsers(usersList);
    }
  }, [usersList]);

  console.log("list", usersList);
  return (
    <Box bgcolor={theme.palette.primary.main} className="rounded-2xl">
      {users ? (
        users.map((user) => {
          return (
            // Redirect it to chatting page when user click some user
            <Link href={`/chats/${user.id}/${user.user.username}`} key={user.id}>
              <div className="flex text px-4 hover:cursor-pointer py-2 mb-2 rounded-2xl">
                <MyTextAvatar src={user.displayImage} />
                <div className="text-start ml-3 w-full">
                  <div className="flex justify-between w-full">
                    <MyText>{user.user.displayName}</MyText>
                    <MyText>12:24</MyText>
                  </div>
                  <MyText>September 14, 2016</MyText>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <MyBox isPrimary={true} className={"min-h-[800px]"}>
          <div className="min-h-[80%]">
            No users found. Please add users by clicking the add button on the
            top of the screen.
          </div>
        </MyBox>
      )}
    </Box>
  );
}
