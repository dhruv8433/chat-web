"use client"

import { TextField, useTheme } from "@mui/material";
import React from "react";

const MyTextField = ({ label, value, myFunction }) => {
  const theme = useTheme();
  return (
    <TextField
      label={label}
      // type={type}
      variant="outlined"
      fullWidth
      onChange={() => (myFunction ? myFunction() : "")}
      value={value}
      style={{
        color: theme.palette.background.text,
        backgroundColor: theme.palette.primary.main,
      }}
    />
  );
};

export default MyTextField;
