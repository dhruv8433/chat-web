// theme.js
import { createTheme } from "@mui/material/styles";

// Define color palette for dark mode
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#23262f",
    },
    secondary: {
      main: "#111111",
    },
    background: {
      body: "#000000",
      text: "#ffffff",
      indicator: "#ffffff",
    },
  },
});

// Define color palette for light mode
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#e3e3e5",
    },
    background: {
      body: "#0d1b2b",
      text: "#000000",
      indicator: "#000000",
    },
  },
});

export { darkTheme, lightTheme };
