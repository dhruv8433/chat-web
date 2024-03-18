import GeoapifyMap from "@/app/common/GeoapifyMap";
import NewsCardFirst from "@/app/components/Explore/articles/NewsCardFirst";
import NewsCardSecond from "@/app/components/Explore/articles/NewsCardSecond";
import SwiperFirst from "@/app/components/Explore/articles/SwiperFirst";
import { Grid } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <SwiperFirst />
          <NewsCardFirst />
        </Grid>

        <Grid item xs={12} md={4}>
          <div className="mt-10 rounded-2xl">
            <GeoapifyMap />
            <NewsCardSecond />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default page;
