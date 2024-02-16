import { useTheme } from "@mui/material";
import React from "react";

const MyButton = ({ children, className, myFunction, type }) => {
  const theme = useTheme();
  return (
    <button
      // if user provide function than execute that else nothing
      onClick={() => (myFunction ? myFunction() : "")}
      style={{
        color: theme.palette.background.text,
        backgroundColor: theme.palette.background.button,
      }}
      className={`${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default MyButton;
