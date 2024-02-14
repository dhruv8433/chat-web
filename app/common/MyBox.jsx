import { Box, styled, useTheme } from "@mui/material";
import React from "react";

// reusable Box  
const MyBox = ({ children, className, sx }) => {
  const theme = useTheme();

  const StyledBox = styled(Box)({
    backgroundColor: theme.palette.primary.main,
  });
  
  return (
    <StyledBox className={className} sx={sx}>
      {children}
    </StyledBox>
  );
};

export default MyBox;
