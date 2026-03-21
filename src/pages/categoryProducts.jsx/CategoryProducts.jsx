import React from "react";
import { Link, useParams } from "react-router-dom";
import useGetCategoryProducts from "../../hook/useGetCategoryProducts";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
} from "@mui/material";

export default function CategoryProducts() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetCategoryProducts(id);

  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography color="error">
          {error?.message || "Something went wrong"}
        </Typography>
      </Box>
    );
  }

  const products = data?.data?.response || [];

  if (!products.length) {
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography>No products found</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: 3,
        p: 3,
      }}
    >
      {products.map((product) => (
        <Card
        component={Link}
        to={`/product/${product.id}`}
        
          key={product.id}
          sx={{
            borderRadius: 3,
            boxShadow: 3,
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            height="220"
            image={product.image}
            alt={product.name}
          />

          <CardContent>
            <Typography variant="h6" gutterBottom>
              {product.name}
            </Typography>

            <Typography variant="body1" sx={{ mb: 1 }}>
              Price: ${product.price}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Rate: {product.rate}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}