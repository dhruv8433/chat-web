import { Button, Divider, Typography, Modal, Box } from "@mui/material";
import React from "react";

const LogoutModel = ({ setLogoutDialogOpen }) => {
  return (
    <Modal
      open={true} // You can manage the modal's open state from parent component
      onClose={() => setLogoutDialogOpen(false)} // Handle close action
      aria-labelledby="logout-modal"
      aria-describedby="logout-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          minWidth: 500,
          maxWidth: 1000,
          borderRadius: 4,
        }}
      >
        <Typography variant="h1" sx={{ fontSize: "2rem" }} gutterBottom>
          Logout
        </Typography>
        <Divider />
        <Typography variant="body1" sx={{ mt: 2, textWrap: "wrap" }}>
          Are you sure , Do you want to logout ?
        </Typography>
        {/* action buttons */}
        <div
          style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}
        >
          <Button
            variant="outlined"
            onClick={() => setLogoutDialogOpen(false)}
            sx={{ mr: 1 }}
          >
            Cancel
          </Button>
          <Button className="bg-red-700 text-white p-4">Logout</Button>
        </div>
      </Box>
    </Modal>
  );
};

export default LogoutModel;
