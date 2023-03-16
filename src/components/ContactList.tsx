import {Card, Avatar, CardHeader, CardContent, CardMedia, IconButton, Typography} from '@mui/material'
import {red} from '@mui/material/colors'
import React from 'react'
import { ContactDataType } from '../interface/interface'

interface Props {
    item: ContactDataType 
}

export const ContactList:React.FC<Props> = ({item}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {item.name[0]}
          </Avatar>
        }
        
        title={item.name}
        subheader={item.username}
      />
     
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {item.email}
        </Typography>
      </CardContent>
      
      
    </Card>
  )
}
