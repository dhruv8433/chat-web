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
      sx={{
        backgroundColor,
        minHeight,
        ...style, // Additional styles passed as props
      }}
    >
      {children}
    </Box>
  );
};

export default MyBox;
