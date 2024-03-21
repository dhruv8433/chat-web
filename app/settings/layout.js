"use client";
import React from "react";
import { Grid, Switch } from "@mui/material";
import Settings from "../components/Settings/Settings";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Layout({ children }) {
  const posts = useSelector((state) => state.auth.authUser.data.localId);
  return (
    <Router>
      <div>
        <Grid container mt={2}>
          <Grid xs={12} md={6} lg={4}>
            <Settings posts={posts} />
          </Grid>
          <Grid xs={12} md={6} lg={8}>
            {children}
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}
