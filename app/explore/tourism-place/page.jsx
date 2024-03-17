"use client";

import MyBox from "@/app/common/MyBox";
import MyButton from "@/app/common/MyButton";
import { getLiveTouristSuggestion } from "@/app/services/getLiveTouristSuggestion";
import React, { useEffect, useState } from "react";

const page = () => {
  const [query, setQuery] = useState("india");
  const [touristData, setTouristData] = useState([]);

  async function handleSeachPlace() {
    try {
      const response = await getLiveTouristSuggestion(query);
      console.log("search for " + query + "results :" + response);
      setTouristData(response.data);
    } catch (error) {
      console.log("error in gettign results : ", error);
    }
  }

  useEffect(() => {
    handleSeachPlace();
  }, []);
  return (
    <MyBox isPrimary={true} className={"mt-4 rounded-2xl"}>
      {/* image container with input for search anything popular */}
      <div className="p-4 h-[600px] w-full">
        <img
          src="https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/jwkvsCOubn.jpg"
          className="object-cover h-full w-full rounded-2xl"
          alt="bg"
        />
      </div>

      {/* search bar */}
      <div className="w-full flex justify-center items-center relative -mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for popular places"
          className="p-2 w-[50%]"
        />
        <MyButton isPrimaryButton={true} className={"py-2 px-3"}>Search</MyButton>
      </div>

      {/* list of user prefrence cards */}
      <div className="">
        {touristData.map((place) => {
          return <div key={place.id}>
            <img src={place.result_object.photo.images.original.url} height={"300px"} width={"300px"} alt={place.result_object.name} />
            {place.result_object.name}
            </div>;
        })}
      </div>
    </MyBox>
  );
};

export default page;
