import { useTheme } from "@mui/material";
import React from "react";
import { BeatLoader } from "react-spinners";

const MyBeatLoader = () => {
  const theme = useTheme();
  return (
    <BeatLoader
      className="flex justify-center mt-2"
      color={theme.palette.background.text}
    />
  );
};

export default MyBeatLoader;
