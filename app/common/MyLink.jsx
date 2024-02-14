import { styled, useTheme } from "@mui/material";
import Link from "next/link";
import React from "react";

const MyLink = ({ children, style, className, href }) => {
  const theme = useTheme();

  const CustomLink = styled(Link)({
    color: theme.palette.background.text,
  });
  return (
    <CustomLink className={className} style={style} href={href}>
      {children}
    </CustomLink>
  );
};

export default MyLink;
