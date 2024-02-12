import React from "react";
import { Card, IconButton, Box, CardMedia } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import GalleryIcon from "@mui/icons-material/InsertPhoto";
import VoiceIcon from "@mui/icons-material/Mic";

export const SingleChatBody = () => {
  return (
    <Card className="secondary rounded-2xl p-2">
      {/* Receiver messages */}
      <div className="flex justify-start mb-2 min-h-[520px]">
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
        <h1
          className="primary p-3 h-min rounded text-white"
          style={{
            borderTopLeftRadius: 0,
          }}
        >
          Hello, how are you?
        </h1>
      </div>

      {/* Sender messages */}
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", marginBottom: 2 }}
      >
        <h1
          className="primary p-3 rounded text-white"
          style={{
            borderTopRightRadius: 0, // Set top-right corner border radius to zero
          }}
        >
          I'm good, thank you!
        </h1>
      </Box>
      {/* Message input */}
      <Box>
        <div className="flex space-x-2">
          {/* Text Field */}
          <input
            className="primary pl-2 rounded text-white w-full"
            placeholder="Write message"
          />
          {/* Gallery Icon */}
          <IconButton
            aria-label="gallery"
            className="primary rounded text-white hover:primary"
            size="medium"
          >
            <GalleryIcon fontSize="medium" />
          </IconButton>
          {/* Voice Icon */}
          <IconButton
            aria-label="voice"
            className="primary rounded text-white"
            size="medium"
          >
            <VoiceIcon fontSize="medium" />
          </IconButton>
          {/* Send Icon */}
          <IconButton
            aria-label="send"
            className="button rounded text-white"
            size="medium"
          >
            <SendIcon fontSize="medium" />
          </IconButton>
        </div>
      </Box>
    </Card>
  );
};
