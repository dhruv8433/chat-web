"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { SingleChat } from "@/app/components/Chats/ChattingComponent";
import { AllChats } from "@/app/components/Inbox/InboxComponent";

export default function Home() {
  return (
    <Box>
      {/* <Heading title={"Chats"} /> */}
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={4}>
          <AllChats />
        </Grid>
        <Grid item xs={8}>
          <SingleChat />
        </Grid>
      </Grid>
    </Box>
  );
}
