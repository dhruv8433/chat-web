import { Modal } from "@mui/material";
import React from "react";

const MyModel = ({ open, setOpen, children, className, sx }) => {
  return (
    <Modal
      className={className}
      sx={sx}
      open={open}
      onClose={() => setOpen(false)}
    >
      {children}
    </Modal>
  );
};

export default MyModel;
