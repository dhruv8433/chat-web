// theme.js
import { createTheme } from "@mui/material/styles";

// Define your color palette for dark mode
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#23262f", // Adjust primary color for dark mode
    },
    secondary: {
      main: "#f48fb1", // Adjust secondary color for dark mode
    },
  },
});

// Define your color palette for light mode
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f7f7f7", // Default primary color
    },
    secondary: {
      main: "#f50057", // Default secondary color
    },
  },
});

export { darkTheme, lightTheme };
