import { Grid, TextField } from '@mui/material'
import React from 'react'
import SwiperFirst from './SwiperFirst'
import NewsCardFirst from './NewsCardFirst'
import NewsCardSecond from './NewsCardSecond'
import Heading from '@/app/common/Heading'
const ExploreMain = () => {
    return (
        <div>

            <Grid container spacing={1}>
                
                <Grid xs={12} md={6}>
                    <SwiperFirst />
                </Grid>
                <Grid xs={12} md={6}>
                    <NewsCardFirst />
                </Grid>
                {/* 2nd part */}
                <Grid xs={12} md={12}>
                    <NewsCardSecond />
                </Grid>
            </Grid>
        </div>
    )
}

export default ExploreMain;
