import { useTheme } from "@mui/material";
import React from "react";

const MyButton = ({ title, className, myFunction }) => {
  const theme = useTheme();
  return (
    <button
      onClick={() => myFunction()}
      style={{ color: theme.palette.background.MyButton }}
      className={`${className}`}
    >
      {title}
    </button>
  );
};

export default MyButton;
