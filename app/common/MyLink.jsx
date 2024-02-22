"use client";
import Link from "next/link";
import React from "react";
import { useTheme } from "@mui/material";

const MyLink = ({ children, style, className, href }) => {
  const theme = useTheme();

  return (
    <Link
      href={href}
      className={className}
      style={{ ...style, color: theme.palette.background.text }}
    >
      {children}
    </Link>
  );
};

export default MyLink;
