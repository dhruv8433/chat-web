"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Heading from "./components/Heading";
import { SingleChat } from "@/app/components/Chats/ChattingComponent";
import { AllChats } from "@/app/components/Inbox/InboxComponent";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#23262f" : "#23262f",
  padding: theme.spacing(3),
  textAlign: "center",
  color: "white",
}));

export default function Home() {
  return (
    <Box>
      <Heading title={"Chats"} />
      <Grid container spacing={2} sx={{mt: 1}}>
        <Grid item xs={4}>
          <Item className="rounded-2xl">
            <AllChats />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item className="rounded-2xl">
            <SingleChat />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
