"use client";

import "./globals.css";
import "./style/style.css";
import { Box, Grid, Paper, ThemeProvider, useTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import { Baloo_2 } from "next/font/google";
import { darkTheme, lightTheme } from "./themes/theme";
import React, { useState } from "react";
import Heading from "./common/Heading";
import LandingPage from "./components/LandingPage";
import { StoreProvider } from "./storeProvider";
import MyBox from "./common/MyBox";

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

  const theme = useTheme();
  const login = true;
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <ThemeProvider theme={!isDarkTheme ? darkTheme : lightTheme}>
            <StoreProvider>
              {!login ? (
                <MyBox className="p-10 h-full">
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
        </ThemeProvider>
      </body>
    </html>
  );
}
