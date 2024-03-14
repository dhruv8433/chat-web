import React from "react";
import { Grid } from "@mui/material";
import MyBox from "@/app/common/MyBox";
import SwiperFirst from "./SwiperFirst";
import NewsCardFirst from "./NewsCardFirst";
import GeoapifyMap from "@/app/common/GeoapifyMap";

const ExploreMain = () => {
  return (
    <MyBox isPrimary={true} className="mt-4 rounded-2xl p-2">
      {/* we provide categories here */}
      <div className="">
        articles
        tourism
        12-15
      </div>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <SwiperFirst />
          <NewsCardFirst />
        </Grid>

        <Grid item xs={12} md={4}>
          <div className="mt-10 rounded-2xl">
            <GeoapifyMap />
          </div>
        </Grid>
      </Grid>
    </MyBox>
  );
};

export default ExploreMain;
