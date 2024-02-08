import React from "react";
import "../../app/style.css";
import {
  Card,
  TextField,
  IconButton,
  Stack,
  Box,
  CardMedia,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import GalleryIcon from "@mui/icons-material/InsertPhoto";
import VoiceIcon from "@mui/icons-material/Mic";

export const SingleChatBody = () => {
  return (
    <Card className="my-secondary" sx={{ padding: 3 }}>
      {/* Receiver messages */}
      <Box
        sx={{ display: "flex", justifyContent: "flex-start", marginBottom: 2 }}
      >
        <CardMedia
          component="img"
          src="/userProfile.jpg"
          alt="User Profile"
          sx={{
            height: 40,
            width: 40,
            padding: 1,
            borderRadius: "50%",
            marginRight: 2,
          }}
        />
        <Typography
          className="my-primary"
          sx={{
            padding: 2,
            borderRadius: 2,
            backgroundColor: "#f0f0f0",
            maxWidth: "70%",
            borderTopLeftRadius: 0,
          }}
        >
          Hello, how are you?
        </Typography>
      </Box>
      {/* Sender messages */}
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", marginBottom: 2 }}
      >
        <Typography
          className="my-primary"
          sx={{
            padding: 2,
            borderRadius: 2,
            backgroundColor: "#dcf8c6",
            maxWidth: "70%",
            borderTopRightRadius: 0, // Set top-right corner border radius to zero
          }}
        >
          I'm good, thank you!
        </Typography>
      </Box>
      {/* Message input */}
      <Box>
        <Stack direction="row" spacing={1}>
          {/* Text Field */}
          <TextField
            className="my-primary"
            variant="outlined"
            placeholder="Write message"
            fullWidth
          />
          {/* Gallery Icon */}
          <IconButton
            aria-label="gallery"
            className="my-primary"
            sx={{ borderRadius: "10%" }}
          >
            <GalleryIcon fontSize="large" />
          </IconButton>
          {/* Voice Icon */}
          <IconButton
            aria-label="voice"
            className="my-primary"
            sx={{ borderRadius: "10%" }}
          >
            <VoiceIcon fontSize="large" />
          </IconButton>
          {/* Send Icon */}
          <IconButton
            aria-label="send"
            className="my-primary"
            sx={{ borderRadius: "10%" }}
          >
            <SendIcon fontSize="large" />
          </IconButton>
        </Stack>
      </Box>
    </Card>
  );
};
