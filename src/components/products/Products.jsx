import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import useCategores from "../../hook/useCategores";
import useProducts from "../../hook/useProducts";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";

export default function Products() {
  const { data, isLoading, isError, error } = useProducts();
  if (isLoading) return <CircularProgress />;
  if (isError) return <Box color={"red"}>{error.message}</Box>;

  return (
    <Box>
      <Typography component={"h3"} variant="h4" color="red">
        Our Products
      </Typography>
      <Grid container spacing={1} >
        {data.response.data.map((product) => (
          <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            {" "}
         <Link to={`product/${product.id}`}   style={{ textDecoration: "none", color: "inherit" }} >
            <Card sx={{ color: "red", textAlign: "center", textDecoration: "none" }}>
              <CardContent>{product.name}</CardContent>
              <CardMedia component={"img"} image={product.image}></CardMedia>
            </Card>
         </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
