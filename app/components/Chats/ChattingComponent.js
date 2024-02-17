import React from "react";
import { Box, useTheme } from "@mui/material";
import EmptyState from "../EmptyState";
import Chatting from "./Chatting";

export const SingleChat = ({ id }) => {
  const theme = useTheme();
  return (
    <Box bgcolor={theme.palette.primary.main} className="rounded-2xl">
      {id ? <Chatting /> : <EmptyState />}
    </Box>
  );
};
