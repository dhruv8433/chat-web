"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./style.css";
import Heading from "./components/Heading";
import { SingleChat } from "@/Components/SingleChat/SingleChat";
import { AllChats } from "@/Components/AllChats/allChat";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#23262f" : "#23262f",
  padding: theme.spacing(3),
  textAlign: "center",
  color: "white",
}));

export default function Home() {
  return (
    
      <Box sx={{ flexGrow: 1, mt: 5 }}>
    <Heading title={"Chats"} />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item><AllChats/></Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <SingleChat />
            </Item>
          </Grid>
        </Grid>
      </Box>
  );
}
