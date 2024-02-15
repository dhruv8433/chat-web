import Lottie from "lottie-react";
import React from "react";

const MyLottieAnimation = ({ animationData, height, width, style }) => {
  return <Lottie animationData={animationData} height={height} width={width} style={style}/>;
};

export default MyLottieAnimation;
