"use client";

import MyBox from "@/app/common/MyBox";
import NewsHeading from "@/app/common/NewsHeading";
import { getArticals } from "@/app/services/getArticles";
import { Grid } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import slugify from "slugify";
import NewsCardContent from "./NewsCardContent";

const NewsCardSecond = () => {
  const [articles, setArticles] = useState([]);

  // getting top business articles
  async function topBusiness() {
    try {
      const response = await getArticals("family");
      setArticles(response.articles.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // call top business when page load
  useEffect(() => {
    topBusiness();
  }, []);

  // when user click any article we store it inside localstorage
  const handleCardClick = (response) => {
    localStorage.setItem("selectNews", JSON.stringify(response));
  };
  return (
    <div>
      <NewsHeading title={"Family"} className="bg-red-400 "/>
      <Grid container spacing={2}>
        {/* title */}
        <div>
          {articles.slice(0, 2).map((news, index) => (
            <div className="w-[100%] mr-4" key={index}>
              <Grid item xs={12}>
                <Link href={`/explore/${slugify(news.title).toLowerCase()}`}>
                  <MyBox
                    className="flex justify-center p-5 my-4 h-[300px] rounded-2xl overflow-hidden"
                    OnClick={handleCardClick(news)}
                  >
                    <NewsCardContent news={news} isSmallCard={true} />
                  </MyBox>
                </Link>
              </Grid>
            </div>
          ))}
        </div>
      </Grid>
    </div>
  );
};

export default NewsCardSecond;
