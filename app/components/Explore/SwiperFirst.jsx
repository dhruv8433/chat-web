"use client";
import { Card, CardMedia, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BUSINESS_SWIPER_NEWS } from "@/app/config/config";
import Link from "next/link";
import MyText from "@/app/common/MyText";
const SwiperFirst = () => {
  const [home1, setHome1] = useState([]);

  async function homecard1() {
    try {
      const response = await axios.get(BUSINESS_SWIPER_NEWS);
      setHome1(response.data.articles.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    homecard1();
  }, []); // Execute only once on component mount

  const handleClick = (response) => {
    localStorage.setItem("selectNews", JSON.stringify(response));
  };
  return (
    <div className="mt-10">
      <MyText className={"text-2xl"}>Explore Anything here</MyText>
      <MyText className={"text-md"}>
        Select in map area to get trending topics of that ara
      </MyText>
      <Swiper
        className="ml-2 justify-center w-[100%] rounded-2xl"
        modules={[Navigation]}
        slidesPerView={1}
        navigation
      >
        {home1.map((news, index) => (
          <SwiperSlide key={index}>
            <div className="h-[500px] rounded-2xl w-full">
              <Link href={`/explore/${encodeURIComponent(news.title)}`}>
                <img
                  src={news.image}
                  alt={news.title}
                  onClick={() => handleClick(news)}
                  className="object-cover h-full w-full"
                />
                <div className="absolute -mt-[70px] w-full flex items-center justify-center bg-opacity-70 backdrop-filter backdrop-blur-md">
                  <h1 className="text-2xl text-white">{news.title}</h1>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperFirst;
