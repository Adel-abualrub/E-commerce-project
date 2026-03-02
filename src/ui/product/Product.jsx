import { Card, CardContent, CardMedia, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Product({product}) {
  return (
    <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            {" "}
         <Link to={`product/${product.id}`}   style={{ textDecoration: "none", color: "inherit" }} >
            <Card sx={{ color: "red", textAlign: "center", textDecoration: "none" }}>
              <CardContent>{product.name}</CardContent>
              <CardMedia component={"img"} image={product.image}></CardMedia>
            </Card>
         </Link>
          </Grid>

)
  
}
