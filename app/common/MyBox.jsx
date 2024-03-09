"use client";

import { Box, useTheme } from "@mui/material";
import React from "react";

const MyBox = ({ children, className, isPrimary, style, minHeightRequire }) => {
  const theme = useTheme();

  // Define background color based on isPrimary prop
  const backgroundColor = isPrimary
    ? theme.palette.primary.main
    : theme.palette.secondary.main;

  // Define minHeight based on minHeightRequire prop
  const minHeight = minHeightRequire ? "100vh" : "auto";

  return (
    <Box
      className={className}
      // if user say min-height to be 100vh, than only this style applied otherwise user preference
      minHeight={minHeightRequire && minHeight}
      sx={{
        backgroundColor,
        ...style, // Additional styles passed as props
      }}
    >
      {children}
    </Box>
  );
};

export default MyBox;
