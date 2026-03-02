import { CardContent, Typography } from '@mui/material'
import React from 'react'

export default function Category({category}) {
  return (
 
   <CardContent>
              <Typography component={'h3'} variant='h3'>
                
                {category.name} 
              </Typography>
            
            </CardContent>


  )
}
