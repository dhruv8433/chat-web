import React from "react";
import Chatting from "./Chatting";
import { Box, useTheme } from "@mui/material";
import EmptyState from "../EmptyState";
export const SingleChat = () => {
  const theme = useTheme();
  return (
    <Box bgcolor={theme.palette.primary.main} className="rounded-2xl">
      {/* <Chatting /> */}
      <EmptyState />
    </Box>
  );
};
