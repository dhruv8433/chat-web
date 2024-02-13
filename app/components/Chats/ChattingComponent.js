import React from "react";
import Chatting from "./Chatting";
import { Box, useTheme } from "@mui/material";
export const SingleChat = () => {
  const theme = useTheme();
  return (
    <Box bgcolor={theme.palette.primary.main} className="rounded-2xl">
      <Chatting />
    </Box>
  );
};
