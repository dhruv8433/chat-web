import Link from "next/link";
import React from "react";

const SwiperCard = ({ news }) => {
  const handleClick = (response) => {
    localStorage.setItem("selectNews", JSON.stringify(response));
  };
  return (
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
  );
};

export default SwiperCard;
