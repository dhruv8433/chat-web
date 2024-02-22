"use client";

import React from "react";
import { Card, IconButton, Box, CardMedia } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import GalleryIcon from "@mui/icons-material/InsertPhoto";
import VoiceIcon from "@mui/icons-material/Mic";
import { useEffect, useState } from "react";
import io from "socket.io-client";

export const SingleChatBody = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Establish connection to Socket.IO server
    const newSocket = io("http://localhost:4000"); // Replace with your server URL
    setSocket(newSocket);

    // Clean up socket connection on unmount
    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    // Emit message to server
    if (socket && input.trim() !== "") {
      socket.emit("sendMessage", { message: input });
      setMessages((prevMessages) => [...prevMessages, input]);
      console.log(input); // Use input instead of message
      setInput(""); // Clear the input field after sending the message
    }
  };

  return (
    <div className="p-5 rounded-2xl">
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", marginBottom: 2 }}
      >
        <ul>
          {/* TODO - If another user connected and send msg than dispaly this on that user side as well store messages  */}
          {messages.map((msg, index) => (
            <li className="primary p-3 rounded mb-3 text-white" key={index}>
              {msg}
            </li>
          ))}
        </ul>
      </Box>

      {/* Message input */}
      <Box>
        <div className="flex space-x-2">
          {/* Text Field */}
          <input
            className={"w-full rounded bg-none px-1"}
            placeholder={"Write message"}
            value={input}
            onChange={(e) => setInput(e.target.value)}
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
            onClick={sendMessage}
          >
            <SendIcon fontSize="medium" />
          </IconButton>
        </div>
      </Box>
    </div>
  );
};
