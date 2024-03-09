"use client";
import React from "react";
import { Grid, Switch } from "@mui/material";
import Settings from "../components/Settings/Settings";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function Layout({children}) {
  return (
    <Router>
      <div>
        <Grid container spacing={2} mt={4}>
          <Grid xs={12} md={6} lg={4}>
            <Settings />
          </Grid>
          <Grid xs={12} md={6} lg={8}>
            {children}
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}
