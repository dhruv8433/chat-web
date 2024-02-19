"use client"

import { styled, useTheme } from "@mui/material";
import React from "react";

// used for p , h1 ... h6 etc.
const MyText = ({ children, style, className }) => {
  const theme = useTheme();

  return (
    <h1 className={className} style={{ color: theme.palette.background.text }}>
      {children}
    </h1>
  );
};

export default MyText;
