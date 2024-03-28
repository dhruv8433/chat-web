"use client";

import Link from "next/link";
import MyBox from "@/app/common/MyBox";
import React, { useEffect, useState } from "react";
import { getArticals } from "@/app/services/getArticles";
import slugify from "slugify";
import NewsCardContent from "./NewsCardContent";

const NewsCardFirst = () => {
  const [articles, setArticles] = useState([]);

  // getting top business articles
  async function topBusiness() {
    try {
      const response = await getArticals("top-business");
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
    <div className="w-full mt-3">
      {/* get only 3 news */}
      {articles.slice(0, 4).map((news, index) => (
        // use slugify to make url with - separator
        <Link
          key={index}
          href={`/explore/articles/${slugify(news.title).toLowerCase()}`}
        >
          <MyBox
            className="flex justify-center p-5 my-4 h-[200px] rounded-2xl overflow-hidden"
            OnClick={handleCardClick(news)}
          >
            <NewsCardContent news={news} isSmallCard={false} />
          </MyBox>
        </Link>
      ))}
    </div>
  );
};

export default NewsCardFirst;
