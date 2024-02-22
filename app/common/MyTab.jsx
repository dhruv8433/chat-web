"use client";

import { Tab, styled, useTheme } from "@mui/material";
import React from "react";

const MyTab = ({ label, icon, className, sx, onChange }) => {
  const theme = useTheme();

  // global - tab styling
  const CustomTab = styled(Tab)({
    color: theme.palette.background.text,
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    borderRadius: "1rem",
  });

  return (
    <div>
      <CustomTab
        className={className}
        sx={sx}
        label={label}
        icon={icon}
        onChange={onChange}
      />
    </div>
  );
};

export default MyTab;
