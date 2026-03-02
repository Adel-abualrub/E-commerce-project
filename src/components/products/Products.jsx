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
import Product from "../../ui/product/Product";

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
         <Product product={product}></Product>
        ))}
      </Grid>
    </Box>
  );
}
