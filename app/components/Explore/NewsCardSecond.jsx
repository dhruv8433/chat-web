'use client'
import Heading from '@/app/common/Heading';
import NewsHeading from '@/app/common/NewsHeading';
import { FAMILY_NEWS } from '@/app/config/config';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, useTheme } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const NewsCardSecond = () => {
    const [home, setHome1] = useState([]);

    async function homecard1() {
        try {
            const response = await axios.get(FAMILY_NEWS);
            console.log("my-card", response.data.articles.results);
            setHome1(response.data.articles.results.slice(0, 4));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    const theme = useTheme()
    useEffect(() => {
        homecard1();
    }, []);

    return (
        <div >
            <NewsHeading title={"Family"} className="bg-red-400 mb-10" />
            <Grid container spacing={2}>

                {/* title */}
                <div className=' flex mr-2 h-[500px]'>
                    {home.map((news, index) => (
                        <div className='w-[100%] mr-4'>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Card sx={{ maxWidth: 600 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={news.image}
                                            alt={news.title}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {news.title}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </div>
                    ))}
                </div>
            </Grid>
        </div >
    );
}

export default NewsCardSecond;
