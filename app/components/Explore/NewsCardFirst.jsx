"use client"
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';

const NewsCardFirst = () => {
    const [home, setHome1] = useState([]);

    async function homecard1() {
        try {
            const response = await axios.get(process.env.BUSINESS_NEWS);
            setHome1(response.data.articles.results.slice(0, 3));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        homecard1();
    }, []);

    return (
        <div className=' w-full mt-3'>

            {home.map((news, index) => (
                <Card key={index} sx={{ display: 'inline-block', margin: '10px', height: '100px' }}>
                    <Grid container spacing={1}>
                        <Grid xs={12} md={4}>
                            <CardMedia
                                component="img"
                                sx={{ width: 151 }}
                                image={news.image}
                                alt={news.alt}
                            />
                        </Grid>
                        <Grid xs={12} md={8}>
                            <CardContent sx={{ flex: '1 0 auto', overflow: 'hidden' }}>
                                <Typography component="div" variant="h6">
                                    {news.title}
                                </Typography>
                                <Typography variant="subtitle2" color="text.secondary" component="div">
                                    {news.body}
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>


                </Card>
            ))
            }
        </div >
    );
}

export default NewsCardFirst;
