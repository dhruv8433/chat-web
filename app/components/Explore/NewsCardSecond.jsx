'use client'
import Heading from '@/app/common/Heading';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const NewsCardSecond = () => {
    const [home, setHome1] = useState([]);

    async function homecard1() {
        try {
            const response = await axios.get("https://newsapi.ai/api/v1/article/getArticles?action=getArticles&keyword=family&articlesPage=1&articlesCount=100&articlesSortBy=date&articlesSortByAsc=false&articlesArticleBodyLen=-1&resultType=articles&dataType[]=news&dataType[]=pr&apiKey=7f5fd96a-2f8e-4ac6-9187-cb0e6efc6109&forceMaxDataTimeWindow=31");
            console.log("my-card", response.data.articles.results);
            setHome1(response.data.articles.results.slice(0, 4));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        homecard1();
    }, []);

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <div>
                        <Typography>Family</Typography>
                    </div>
                    <div className='h-20 '>
                        {home.map((news, index) => (

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
                                        <Typography variant="body2" color="text.secondary">
                                            {news.body}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        ))}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default NewsCardSecond;
