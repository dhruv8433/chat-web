import { Box, styled, useTheme } from "@mui/material";
import React from "react";

// reusable Box
const MyBox = ({ children, className, sx, isPrimary, style }) => {
  const theme = useTheme();

  // based on user mode --> specific styles
  const StyledBox = styled(Box)({
    backgroundColor: isPrimary
      ? theme.palette.primary.main
      : theme.palette.secondary.main,
    minHeight: isPrimary ? "" : "100vh",
  });

  return (
    <StyledBox className={className} sx={{ sx }} style={style}>
      {children}
    </StyledBox>
  );
};

export default MyBox;
