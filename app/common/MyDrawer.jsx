import { Drawer } from "@mui/material";
import React from "react";

const MyDrawer = ({ open, setOpen, className, sx, children }) => {
  return (
    <Drawer
      open={open}
      onClose={() => setOpen(false)}
      className={className}
      sx={sx}
    >
      {children}
    </Drawer>
  );
};

export default MyDrawer;
