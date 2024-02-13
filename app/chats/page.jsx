"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { AllChats } from "../components/Inbox/InboxComponent";
import { SingleChat } from "../components/Chats/ChattingComponent";

export default function Home() {
  return (
    <Box>
      {/* <Heading title={"Chats"} /> */}
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} md={4}>
          <AllChats />
        </Grid>
        <Grid item xs={8}>
          <Box display={{ xs: "none", md: "block" }}>
            <SingleChat />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
