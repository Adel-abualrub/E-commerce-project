import React from "react";
import { Link, useParams } from "react-router-dom";
import useProductDetails from "../../hook/useProductDetails";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import useAddToCart from "../../hook/useAddToCart";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import useAddRating from "../../hook/useAddRating";

export default function ProductDetails() {
  const [value, setValue] = React.useState(0);
  const { id } = useParams();
  
  const { data, isLoading, isError, error } = useProductDetails(id);
  const { register, handleSubmit, formState: { errors } } = useForm({});
  
  const { mutate, isPending } = useAddToCart();
  const { mutate: AddRating, isPending: PendingRating, isError: errorRating, error: errorType } = useAddRating();

  // دالة تجميع البيانات قبل إرسالها للـ Hook
  const onSubmitReview = (formData) => {
    AddRating({
      Rating: value,
      Comment: formData.Comment, // إرسال النص باسم Comment
      id: id
    });
  };

  if (isLoading) {
    return (
      <Box sx={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (errorRating) {
    console.log(errorType?.response?.data);
    console.log(errorType?.response?.status);
    console.log(errorType);
  }

  if (isError) {
    return (
      <Container sx={{ py: 3 }}>
        <Alert severity="error">{error?.message || "Something went wrong"}</Alert>
      </Container>
    );
  }

  const product = data?.response;

  if (!product) {
    return (
      <Container sx={{ py: 3 }}>
        <Alert severity="warning">Product not found.</Alert>
      </Container>
    );
  }

  const inStock = Number(product.quantity) > 0;
  const reviews = product.reviews || [];

  return (
    <Container sx={{ py: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
          Product Details
        </Typography>

        <Button component={Link} to="/home" variant="outlined">
          Back to Products
        </Button>
      </Stack>

      <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2 }}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{
                  width: "100%",
                  height: { xs: 260, sm: 360, md: 420 },
                  objectFit: "contain",
                  borderRadius: 2,
                  bgcolor: "background.paper",
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <CardContent sx={{ p: 3 }}>
              <Stack spacing={1.5}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  {product.name}
                </Typography>

                <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                  <Chip
                    label={inStock ? "In Stock" : "Out of Stock"}
                    color={inStock ? "success" : "error"}
                    variant="filled"
                    sx={{ fontWeight: 600 }}
                  />
                  <Chip label={`ID: ${product.id}`} variant="outlined" />
                  <Chip label={`Qty: ${product.quantity}`} variant="outlined" />
                </Stack>

                <Divider />

                <Stack direction="row" alignItems="baseline" spacing={1}>
                  <Typography variant="h4" sx={{ fontWeight: 800 }}>
                    ${product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    (taxes excluded)
                  </Typography>
                </Stack>

                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.9 }}>
                  {product.description}
                </Typography>

                <Divider />

                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                  <Button
                    variant="contained"
                    disabled={!inStock || isPending}
                    sx={{ flex: 1, py: 1.2, borderRadius: 2 }}
                    onClick={() => {
                      mutate({
                        pId: product.id,
                        count: 1,
                      });
                    }}
                  >
                    Add to Cart
                  </Button>

                  <Button
                    variant="outlined"
                    sx={{ flex: 1, py: 1.2, borderRadius: 2 }}
                    component={Link}
                    to="/cart"
                  >
                    Go to Cart
                  </Button>
                </Stack>
              </Stack>
            </CardContent>
          </Grid>
        </Grid>
      </Card>

      <Box sx={{ display: "flex", flexDirection: "column", mt: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          Add Review
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit(onSubmitReview)} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography component="legend">Rating</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          
          <TextField
            id="outlined-basic"
            label="Add your review"
            variant="outlined"
            {...register("Comment", { required: "Please enter your review" })}
            error={!!errors.Comment}
            helperText={errors.Comment?.message}
          />
          
          <Button type="submit" variant="contained" disabled={PendingRating} sx={{ width: "fit-content", alignItems: "center" }}>
            {PendingRating ? "Submitting..." : "Submit"}
          </Button>
          {errorRating && (
    <Alert severity="error" sx={{ mb: 2 }}>
      {errorType?.response?.data?.message || "An error occurred while adding the review"}
    </Alert>
  )}
        </Box>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          Reviews
        </Typography>

        {reviews.length === 0 ? (
          <Alert severity="info">No reviews yet.</Alert>
        ) : (
          <Stack spacing={2}>
            {reviews.map((review, index) => (
              <Card key={index} sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Stack spacing={1.5}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar>
                        {review.userName?.charAt(0)?.toUpperCase()}
                      </Avatar>

                      <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                          {review.userName}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                          {new Date(review.createdAt).toLocaleDateString()}
                        </Typography>
                      </Box>

                      <Rating value={review.rating} readOnly />
                    </Stack>

                    <Typography variant="body1" color="text.secondary">
                      {review.comment}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Stack>
        )}
      </Box>
    </Container>
  );
}