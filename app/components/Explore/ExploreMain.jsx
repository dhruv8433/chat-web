import { Grid, TextField } from "@mui/material";
import React from "react";
import SwiperFirst from "./SwiperFirst";
import NewsCardFirst from "./NewsCardFirst";
import NewsCardSecond from "./NewsCardSecond";
import GeoapifyMap from "@/app/common/GeoapifyMap";
const ExploreMain = () => {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} md={8}>
          <SwiperFirst />
        </Grid>

        <Grid item xs={12} md={4}>
          <div className="mt-10 rounded-2xl">
            <GeoapifyMap />
          </div>
        </Grid>

        {/* <Grid xs={12} md={6}>
                    <NewsCardFirst />
                </Grid>
                <Grid xs={12} md={12}>
                    <NewsCardSecond />
                </Grid> */}
      </Grid>
    </div>
  );
};

export default ExploreMain;
