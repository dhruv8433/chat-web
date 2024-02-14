import { Tab, styled, useTheme } from "@mui/material";
import React from "react";

const MyTab = ({ label, icon, className, sx }) => {
  const theme = useTheme();
  const CustomTab = styled(Tab)({
    color: theme.palette.background.text,
  });
  return (
    <div>
      <CustomTab className={className} sx={sx} label={label} icon={icon} />
    </div>
  );
};

export default MyTab;
