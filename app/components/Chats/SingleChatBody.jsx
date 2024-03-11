import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { Box, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import GalleryIcon from "@mui/icons-material/InsertPhoto";
import VoiceIcon from "@mui/icons-material/Mic";

export const SingleChatBody = ({ user, recipient }) => {
  // Add recipient as a prop
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Establish connection to Socket.IO server -- we need to start backend server idk why..?
    const newSocket = io("https://chat-back-end-gamma.vercel.app"); // Replace with your server URL
    setSocket(newSocket);

    // Clean up socket connection on unmount
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      // Listen for incoming messages
      socket.on("receiveMessage", (data) => {
        setMessages((prevMessages) => [...prevMessages, data.message]);
      });
    }
  }, [socket]);

  const sendMessage = () => {
    // Emit message to server
    if (socket && input.trim() !== "") {
      socket.emit("sendMessage", { sender: user, recipient, message: input }); // Specify sender and recipient
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: user, message: input },
      ]); // Include sender in displayed messages
      setInput(""); // Clear the input field after sending the message
    }
  };

  return (
    <div className="p-5 rounded-2xl min-h-[660px]">
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", marginBottom: 2 }}
      >
        <ul>
          {messages.map((msg, index) => (
            <li className="primary p-3 rounded mb-3 text-white" key={index}>
              {msg.sender}: {msg.message}{" "}
              {/* Display sender along with message */}
            </li>
          ))}
        </ul>
      </Box>

      <Box>
        <div className="flex space-x-2 mt-[60%]">
          <input
            className={"w-full rounded bg-none px-1"}
            placeholder={"Write message"}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            aria-label="gallery"
            className="primary rounded text-white hover:primary"
            size="medium"
          >
            <GalleryIcon fontSize="medium" />
          </IconButton>
          <IconButton
            aria-label="voice"
            className="primary rounded text-white"
            size="medium"
          >
            <VoiceIcon fontSize="medium" />
          </IconButton>
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
