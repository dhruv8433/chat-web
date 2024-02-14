"use client";

import * as React from "react";
import Grid from "@mui/material/Grid";
import { SingleChat } from "@/app/components/Chats/ChattingComponent";
import { AllChats } from "@/app/components/Inbox/InboxComponent";

export default function Home() {
  return (
    <div>
      {/* <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={4}>
          <AllChats />
        </Grid>
        <Grid item xs={8}>
          <SingleChat />
        </Grid>
      </Grid> */}
      <h1 className="text-white">Pending...</h1>
    </div>
  );
}
