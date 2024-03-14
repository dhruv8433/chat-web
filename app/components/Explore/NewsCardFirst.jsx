"use client";

import Link from "next/link";
import MyBox from "@/app/common/MyBox";
import MyText from "@/app/common/MyText";
import React, { useEffect, useState } from "react";
import { getArticals } from "@/app/services/getArticles";

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
      {articles.slice(0, 3).map((news, index) => (
        <Link key={index} href={`/explore/${encodeURIComponent(news.title)}`}>
          <MyBox
            className="flex justify-center p-5 my-4 h-[200px] overflow-hidden"
            OnClick={handleCardClick(news)}
          >
            <div className="min-w-[200px] object-cover h-full">
              <img
                className="object-cover w-full h-full rounded-xl"
                src={news.image}
                alt={news.alt}
                height={"100%"}
                width={"100%"}
              />
            </div>

            <div className="ml-10">
              <MyText className={"font-semibold text-lg"}>{news.title}</MyText>
              <MyText>{news.body}</MyText>
            </div>
          </MyBox>
        </Link>
      ))}
    </div>
  );
};

export default NewsCardFirst;
