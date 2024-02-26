"use client";

import "./globals.css";
import "./style/style.css";
import MyBox from "./common/MyBox";
import Heading from "./common/Heading";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Baloo_2 } from "next/font/google";
import { useParams } from "next/navigation";
import { StoreProvider } from "./storeProvider";
import LandingPage from "./components/LandingPage";
import { darkTheme, lightTheme } from "./themes/theme";
import { Box, Grid, ThemeProvider } from "@mui/material";
import { Toaster } from "react-hot-toast";

const font = Baloo_2({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  const [isDarkTheme, setDarkTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme")
  );

  function DarkThemeApplied() {
    setDarkTheme(true);
    localStorage.setItem("theme", true);
  }

  function lightThemeApplied() {
    setDarkTheme(false);
    localStorage.setItem("theme", false);
  }

  const login = false;


  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <StoreProvider>
            {!login ? (
              <MyBox minHeightRequire={true} className="p-10 h-full">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={2}>
                    <Box
                      className="fixed w-[15%]"
                      display={{ xs: "none", md: "block" }}
                    >
                      <Navbar />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <Heading
                      title={"Chats"}
                      DarkThemeApplied={DarkThemeApplied}
                      lightThemeApplied={lightThemeApplied}
                    />
                    <div>{children}</div>
                  </Grid>
                </Grid>
              </MyBox>
            ) : (
              <LandingPage />
            )}
          </StoreProvider>

          {/* global toaster import here */}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
