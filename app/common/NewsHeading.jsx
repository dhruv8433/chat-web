import { Box, Typography, unstable_ClassNameGenerator, useTheme } from '@mui/material'
import React from 'react'

const NewsHeading = ({ title, className }) => {
    const theme = useTheme()
    return (
        <div>
            <Box sx={{ color: theme.palette.background.text, paddingY: "5px", my: '5px', borderRadius: '10px', width: 'auto' }} className={className}>
                <Typography sx={{ pl: '10px' }}>{title}</Typography>
            </Box>
        </div>
    )
}

export default NewsHeading
