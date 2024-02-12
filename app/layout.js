"use client";

import "./globals.css";
import "./style/style.css";
import { Box, Grid, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import { Baloo_2 } from "next/font/google";
import { darkTheme, lightTheme } from "./themes/theme";
import { useEffect, useState } from "react";

const font = Baloo_2({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  function changeDarkMode() {
    setTheme("dark");
    localStorage.setItem("theme", "dark");
  }

  function changeLightMode() {
    setTheme("light");
    localStorage.setItem("theme", "light");
  }
  return (
    <html lang="en">
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <body className={`${font.className} m-10`}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <Box
                className="fixed w-[15%]"
                display={{ xs: "none", md: "block" }}
              >
                <Navbar
                  changeDarkMode={changeDarkMode}
                  changeLightMode={changeLightMode}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={10}>
              {children}
            </Grid>
          </Grid>
        </body>
      </ThemeProvider>
    </html>
  );
}
