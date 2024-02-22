"use client";

import React from "react";
import { Card, IconButton, Box, CardMedia } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import GalleryIcon from "@mui/icons-material/InsertPhoto";
import VoiceIcon from "@mui/icons-material/Mic";
import MyInput from "@/app/common/MyInput";
import { useEffect, useState } from "react";
import io from "socket.io-client";

export const SingleChatBody = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io();
    setSocket(newSocket);

    newSocket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => newSocket.close();
  }, []);

  const sendMessage = () => {
    socket.emit("chat message", input);
    setInput("");
  };
  return (
    <div className="p-5 rounded-2xl">
      {/* Receiver messages */}
      <div className="flex justify-start mb-2 rounded-2xl min-h-[500px]">
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

        <ul>
          {messages.map((msg, index) => (
            <li className="text-white" key={index}>{msg}</li>
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
