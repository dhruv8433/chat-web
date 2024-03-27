"use client";

import MyBox from "@/app/common/MyBox";
import MyText from "@/app/common/MyText";
import { getLiveTouristSuggestion } from "@/app/services/getLiveTouristSuggestion";
import { Grid, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";

const page = () => {
  const [query, setQuery] = useState("india");
  const [touristData, setTouristData] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  async function handleSeachPlace() {
    try {
      const response = await getLiveTouristSuggestion(query, page, 10);
      setTouristData(response.data);
      setTotalPages(
        Math.ceil(response.pagination.total / response.pagination.limit)
      ); // calculate total pages
      console.log("data", response);
    } catch (error) {
      console.log("error in gettign results : ", error);
    }
  }

  async function handlePageChange(event, value) {
    setPage(value);
    handleSeachPlace();
  }

  useEffect(() => {
    handleSeachPlace();
  }, [page]);

  return (
    <MyBox isPrimary={true} className={"p-4 mt-4 rounded-2xl"}>
      {/* image container with input for search anything popular */}
      <div className="h-[600px] w-full">
        <img
          src="https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/jwkvsCOubn.jpg"
          className="object-cover h-full w-full rounded-2xl"
          alt="bg"
        />
      </div>

      <div className="mt-2 flex justify-between">
        <MyText className={"font-semibold text-2xl"}>
          Top Tourism Places Of India
        </MyText>
        <input
          placeholder="Search places"
          className="border w-[400px] p-2 rounded-xl"
        />
      </div>

      {/* list of user prefrence cards */}
      <div className="w-full">
        <Grid container>
          {touristData.map((places, index) => (
            <div key={index}>
              <Grid key={places.id} item xs={12} md={4}>
                <div className="border p-2 rounded-2xl mx-1 w-[480px] my-3">
                  <img
                    src={places.image}
                    className="object-cover h-[300px] w-full rounded-2xl"
                    alt={places.name}
                  />
                  <MyText className={"font-bold mt-2"}>{places.name}</MyText>
                  <h1 className={"text-gray-400"}>{places.location}</h1>
                </div>
              </Grid>
            </div>
          ))}
        </Grid>

        {/* here pagination logic*/}
        <div className="flex justify-center items-center">
          <Pagination count={totalPages} onChange={handlePageChange} />
        </div>
      </div>
    </MyBox>
  );
};

export default page;
