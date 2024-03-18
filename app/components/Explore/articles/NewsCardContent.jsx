import MyText from "@/app/common/MyText";
import React from "react";

const NewsCardContent = ({ news, isSmallCard }) => {
  return (
    <div className={`${isSmallCard ? "block" : "flex"} w-auto`}>
      {/* news image */}
      <div
        className={` ${
          isSmallCard ? "w-[100%] block" : "w-[80%] flex"
        }  h-full`}
      >
        <img
          className="object-cover w-full h-full rounded-xl"
          src={news.image}
          alt={news.alt}
        />
      </div>

      {/* news body with max 300 character */}
      <div className={`${isSmallCard ? "-mt-16 ml-2 relative" : "ml-10"}`}>
        <MyText className={"font-semibold text-2xl"}>{news.title}</MyText>

        {isSmallCard ? (
          ""
        ) : (
          <MyText className={""}>
            {news.body.length > 300
              ? news.body.substring(0, 300) + "..."
              : news.body}
          </MyText>
        )}
      </div>
    </div>
  );
};

export default NewsCardContent;
