import { Grid } from "@mui/material";
import React from "react";
import MyBox from "./MyBox";
import MyLottieAnimation from "./MyLottieAnimation";
import MyText from "./MyText";

const Feature = ({ animationData, heading, subHeading, subHeading1, md }) => {
  
    // Function to truncate text after 50 words
  const truncateText = (text) => {
    const words = text.split(" ");
    if (words.length > 30) {
      return words.slice(0, 50).join(" ") + "...";
    } else {
      return text;
    }
  };

  return (
    <Grid item xs={12} md={md}>
      <MyBox
        className={
          "flex flex-col justify-center border rounded-2xl p-4 min-h-[400px]"
        }
        isPrimary={true}
      >
        <MyLottieAnimation
          animationData={animationData}
          height={40}
          width={40}
          style={{ height: "80px", width: "80px" }}
        />
        <MyText className={"text-3xl text-start"}>{heading}</MyText>
        <MyText className={"text-start mt-3"}>{truncateText(subHeading)}</MyText>
        {/* if subheading 1 provided by user than only disply it */}
        {subHeading1 && (
          <MyText className={"text-start mt-4"}>{truncateText(subHeading1)}</MyText>
        )}
      </MyBox>
    </Grid>
  );
};

export default Feature;
