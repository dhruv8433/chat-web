import { Grid } from "@mui/material";
import React from "react";
import SwiperFirst from "./SwiperFirst";
import GeoapifyMap from "@/app/common/GeoapifyMap";

const ExploreMain = () => {
  const key = process.env.MAP_API_KEY;
  console.log("here", key);
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} md={8}>
          <SwiperFirst />
        </Grid>

        <Grid item xs={12} md={4}>
          <div className="mt-10 rounded-2xl">
            <GeoapifyMap key={key} />
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
