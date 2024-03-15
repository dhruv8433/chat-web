import MyButton from '@/app/common/MyButton'
import MyText from '@/app/common/MyText'
import { Card, CardActionArea, CardMedia, TextField } from '@mui/material'
import React from 'react'

const page = () => {

  return (
    <div>


      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <TextField
          label="Enter a tourism place"
          variant="outlined"
          fullWidth

        />
        <MyButton>Search</MyButton>
      </div>
      <div>
        <Card>
          <CardMedia image='' />
          <CardActionArea>
            <MyText>city name</MyText>
          </CardActionArea>
        </Card>
      </div>
    </div>
    
  )
}

export default page
