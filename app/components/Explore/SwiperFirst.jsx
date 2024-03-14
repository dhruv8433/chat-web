"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import MyText from "@/app/common/MyText";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { getArticals } from "@/app/services/getArticles";
import { SwiperSkeleton } from "../Skeleton";
import SwiperCard from "./SwiperCard";

const SwiperFirst = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  async function homecard1() {
    try {
      const response = await getArticals("business");
      console.log("business response", response);
      setArticles(response.articles.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    homecard1();
  }, []); // Execute only once on component mount

  return (
    <div className="mt-2">
      <MyText className={"text-2xl"}>Explore Anything here</MyText>
      <MyText className={"text-md mb-4"}>
        Select in map area to get trending topics of that ara
      </MyText>
      <Swiper
        className="ml-2 justify-center w-[100%] rounded-2xl border border-blue-500"
        style={{ borderWidth: "6px" }}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        pagination
        navigation
      >
        {loading ? (
          <SwiperSkeleton />
        ) : (
          articles.slice(0, 15).map((news, index) => (
            <SwiperSlide key={index}>
              <SwiperCard news={news} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default SwiperFirst;
