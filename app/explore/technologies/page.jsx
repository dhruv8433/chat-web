'use client'
import MyBox from "@/app/common/MyBox";
import MyText from "@/app/common/MyText";
import { getTechnologies } from "@/app/services/getTechnologies";
import { Grid, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";


const Page = () => {
    const [query, setQuery] = useState('');
    const [touristData, setTouristData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [notFound, setNotFound] = useState(false); // State to track if category not found


    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    async function handleSearchPlace() {
        try {
            const response = await getTechnologies(query, searchQuery, page, 10);
            setTouristData(response.data);
            setNotFound(response.data.length === 0); // Set notFound state based on response
            setTotalPages(
                Math.ceil(response.pagination.total / response.pagination.limit)
            );
            console.log("data", response.data);
        } catch (error) {
            console.log("error in getting results : ", error);
        }
    }
    async function handlePageChange(event, value) {
        setPage(value);
        handleSearchPlace();
    }
    useEffect(() => {
        handleSearchPlace();
    }, [searchQuery, page]);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearchPlace();
        }
    };

    return (
        <MyBox isPrimary={true} className={"p-4 mt-4 rounded-2xl"}>
            {/* image container with input for search anything popular */}
            <div className="h-[600px] w-full">
                <img
                    src="https://www.fitnall.com/wp-content/uploads/2023/10/HealthInsurance.png"
                    className="object-cover h-full w-full rounded-2xl"
                    alt="health-fitness-banner"
                />
            </div>

            <div className="mt-2 flex justify-between">
                <MyText className={"font-semibold text-2xl"}>
                    Top Technologies
                </MyText>
                <input
                    placeholder="Search places"
                    className="border w-[400px] p-2 rounded-xl"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress} // Call handleSearchPlace when Enter key is pressed
                />
            </div>

            {/* list of user preference cards */}
            <div className="w-full">
                {notFound ? (
                    <MyText>No results found for '{searchQuery}'</MyText>
                ) : (
                    <Grid container spacing={2}>
                        {touristData.map((places, index) => (
                            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                                <div className="border p-2 rounded-2xl my-3">
                                    <img
                                        src={places.image}
                                        className="object-cover h-48 w-full rounded-2xl"
                                        alt={places.category}
                                    />
                                    <MyText className={"font-bold mt-2"}>{places.category}</MyText>
                                    <p className={"text-gray-400"}>{places.description}</p>
                                </div>
                            </Grid>

                        ))}
                    </Grid>

                )}
                {/* pagination logic here*/}
                <div className='flex justify-center items-center'>
                    <Pagination count={totalPages} onChange={handlePageChange} />
                </div>
            </div>
        </MyBox >
    );
};

export default Page;
