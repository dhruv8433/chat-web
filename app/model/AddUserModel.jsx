'use client'
import React from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import MyButton from "../common/MyButton";

const AddUserModel = ({ open, onClose }) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleConfirm = () => {

    console.log("Confirmed:", inputValue);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          width: 400,
          borderRadius: 4,
        }}
      >
        <TextField
          label="search ..."
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          fullWidth
        />
        <Box mt={2} display="flex" justifyContent="space-between">
          <MyButton myFunction={handleConfirm}>
            Confirm
          </MyButton>
          <MyButton myFunction={onClose}>
            Cancel
          </MyButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddUserModel;
