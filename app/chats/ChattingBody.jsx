import React from "react";
import { AllChats } from "../components/Inbox/InboxComponent";
import ChattingBox from "../components/Chats/ChattingBox";
import { Box, Grid } from "@mui/material";

const ChattingBody = ({ id }) => {
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      <Grid item xs={12} md={4}>
        {/* Inbox component */}
        <AllChats />
      </Grid>
      <Grid item xs={8}>
        <Box display={{ xs: "none", md: "block" }}>
          {/* Single Chatting Body */}
          <ChattingBox id={id} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ChattingBody;
