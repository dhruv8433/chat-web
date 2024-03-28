'use client';
import { Card, CardContent, CardMedia, Container, Divider, Typography } from '@mui/material'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = () => {
    const [selectData, setSelectData] = useState(null)
    useEffect(() => {
        const getData = localStorage.getItem("selectNews")

        if (getData) {
            const parsedata = JSON.parse(getData)
            setSelectData(parsedata)
        }
    }, [])
    return (
        <Container sx={{ mt: '5%' }}>
            {
                selectData && (

                    <Card>
                        <CardMedia component="img"
                            image={selectData.image} />
                        <CardContent>
                            <Typography>{selectData.body}</Typography>
                            <Divider />
                            <Typography>Published At:{selectData.date}</Typography>
                            <Typography sx={{ cursor: 'pointer' }}>
                                <Link href={selectData.url}>Read More</Link>
                            </Typography>
                        </CardContent>
                    </Card>
                )
            }
        </Container >
    )
}

export default page
