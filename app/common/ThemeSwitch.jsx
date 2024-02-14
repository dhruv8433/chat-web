import React, { useState } from "react";
import { ButtonGroup, IconButton, Tooltip } from "@mui/material";
import { Brightness4Outlined, Brightness7Outlined } from "@mui/icons-material";

const ThemeToggleButton = ({ lightThemeApplied, DarkThemeApplied }) => {
  return (
    <>
      <Tooltip title="Dark Mode">
        <IconButton onClick={() => DarkThemeApplied()}>
          <Brightness4Outlined />
        </IconButton>
      </Tooltip>
      <Tooltip title="Light Mode">
        <IconButton onClick={() => lightThemeApplied()}>
          <Brightness7Outlined />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default ThemeToggleButton;
