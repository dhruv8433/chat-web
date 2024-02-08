import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import VideoCallRoundedIcon from "@mui/icons-material/VideoCallRounded";
import "../../app/style.css";
import { Box, Stack } from "@mui/system";
import { SingleChatBody } from "./SingleChatBody";
export const SingleChatHeader = () => {
  return (
    <Box>
      <Card className="my-primary">
        <CardHeader
          avatar={<Avatar aria-label="recipe" src="/userProfile.jpg"></Avatar>}
          action={
            <Stack direction="row" spacing={1}>
              {/* video call icon */}
              <IconButton
                aria-label="video call"
                className="my-secondary"
                sx={{ borderRadius: "10%" }}
              >
                <VideoCallRoundedIcon fontSize="large" />
              </IconButton>
              {/* call icon */}
              <IconButton
                aria-label="call"
                className="my-secondary"
                sx={{ borderRadius: "10%" }}
              >
                <CallRoundedIcon fontSize="large" />
              </IconButton>
              {/* close icon */}
              <IconButton
                aria-label="close"
                className="my-secondary"
                sx={{ borderRadius: "10%" }}
              >
                <CloseRoundedIcon fontSize="large" />
              </IconButton>
            </Stack>
          }
          sx={{
            justifyContent: "space-between",
            textAlign: "start",
          }}
          title="#Partner"
          subheader="status"
        />

        <SingleChatBody />
      </Card>
    </Box>
  );
};
