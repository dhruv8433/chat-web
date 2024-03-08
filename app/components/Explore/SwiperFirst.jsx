"use client"
import { Card, CardMedia, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Navigation,
    Pagination,

} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const SwiperFirst = () => {
    const [home1, setHome1] = useState([]);

    async function homecard1() {
        try {
            const response = await axios.get(process.env.BUSINESS_SWIPER_NEWS);

            setHome1(response.data.articles.results);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        homecard1();
    }, []); // Execute only once on component mount

    return (
        <div >

            <Swiper className=" mt-10 ml-2 justify-center w-[100%]"
                modules={[Navigation]}
                slidesPerView={1}
                navigation
            >
                {
                    home1.map((news, index) => (


                        <SwiperSlide key={index}>
                            <div className="h-[300px] w-full">

                                <img src={news.image} alt={news.title} height={'100%'}
                                    width={"100%"} className='object-cover'
                                />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    );
};

export default SwiperFirst;
