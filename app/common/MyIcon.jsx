import { Icon, styled, useTheme } from "@mui/material";
import React from "react";

const MyIcon = ({ sx, style, className, children }) => {
  const theme = useTheme();

  const CustomIcon = styled(Icon)({
    color: theme.palette.background.icon,
  });
  return (
    <CustomIcon sx={sx} style={style} className={className}>
      {children}
    </CustomIcon>
  );
};

export default MyIcon;
