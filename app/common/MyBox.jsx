import { Box, styled, useTheme } from "@mui/material";
import React from "react";

// reusable Box
const MyBox = ({ children, className, sx, isPrimary }) => {
  const theme = useTheme();

  // based on user mode --> specific styles
  const StyledBox = styled(Box)({
    backgroundColor: isPrimary
      ? theme.palette.primary.main
      : theme.palette.secondary.main,
  });

  return (
    <StyledBox className={className} sx={{sx}}>
      {children}
    </StyledBox>
  );
};

export default MyBox;
