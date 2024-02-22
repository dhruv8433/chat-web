"use client"

import { useTheme } from "@mui/material";
import React from "react";

const MyButton = ({
  children,
  className,
  myFunction,
  type,
  isPrimaryButton,
  customBgColor,
}) => {
  const theme = useTheme();
  return (
    <button
      // if user provide function than execute that else nothing
      onClick={() => (myFunction ? myFunction() : "")}
      style={{
        color: theme.palette.background.text,
        // if button is primary than blue bg else user specified color
        backgroundColor: isPrimaryButton
          ? theme.palette.background.button
          : customBgColor,
      }}
      className={`${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default MyButton;
