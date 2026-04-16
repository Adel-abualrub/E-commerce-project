import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import useAddToCart from "../../hook/useAddToCart";
import useAddRating from "../../hook/useAddRating";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import Quantity from "../../components/Quantity/Quantity";
import useAuthStore from "../../store/useAuthStore";
import { toast } from "react-toastify";

export default function ProductDetails() {
  const [value, setValue] = React.useState(0);
  const { id } = useParams();
  const { data, isLoading, isError, error } = useProductDetails(id);
  const { register, handleSubmit, formState: { errors } } = useForm({});
  const { mutate, isPending } = useAddToCart();
  const { mutate: AddRating, isPending: PendingRating, isError: errorRating, error: errorType } = useAddRating();
const Navigate=useNavigate();
const token=useAuthStore((state)=>state.token);
  const onSubmitReview = (formData) => {
    AddRating({ Rating: value, Comment: formData.Comment, id });
  };

  if (isLoading) return (
    <Box sx={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  );

  if (isError) return (
    <Container sx={{ py: 3 }}>
      <Alert severity="error">{error?.message || "Something went wrong"}</Alert>
    </Container>
  );

  const product = data?.response;
  if (!product) return (
    <Container sx={{ py: 3 }}>
      <Alert severity="warning">Product not found.</Alert>
    </Container>
  );

  const inStock = Number(product.quantity) > 0;
  const reviews = product.reviews || [];

  return (
    <Container sx={{ py: 4 }}>
 
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" fontWeight={700}>Product Details</Typography>
        <Button component={Link} to="/home" variant="outlined" startIcon={<ArrowBackIcon />}>
          Back
        </Button>
      </Stack>

      
      <Card sx={{ borderRadius: 4, overflow: "hidden", boxShadow: 4 }}>
        <Grid container>

          
          <Grid size={{ xs: 12, md: 6 }} sx={{ bgcolor: "background.default" }}>
            <Box sx={{ p: 4, display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{ maxHeight: 420, objectFit: "contain", borderRadius: 3 }}
              />
            </Box>
          </Grid>

        
          <Grid size={{ xs: 12, md: 6 }}>
            <CardContent sx={{ p: 4 }}>
              <Stack spacing={2.5}>

                <Typography variant="h5" fontWeight={700}>{product.name}</Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap">
                  <Chip label={inStock ? "In Stock" : "Out of Stock"} color={inStock ? "success" : "error"} />
                  <Chip label={`Qty: ${product.quantity}`} variant="outlined" />
                </Stack>

                <Divider />

                <Stack direction="row" alignItems="baseline" spacing={1}>
                  <Typography variant="h4" fontWeight={800} color="error">
                    ${product.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">taxes excluded</Typography>
                </Stack>

                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.9 }}>
                  {product.description}
                </Typography>

                <Divider />

                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                  <Button
                    variant="contained"
                    color="error"
                    disabled={!inStock || isPending}
                    startIcon={<ShoppingCartIcon />}
                    sx={{ flex: 1, py: 1.3, borderRadius: 2 }}
                 onClick={() => {
  if (!!token) {
    mutate({ pId: product.id, count: 1 });
  }
  else{
    
    
Navigate('/Login')

  }
}}
                  >
                   {t('AddToCart')}
                  </Button>

                   
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{ flex: 1, py: 1.3, borderRadius: 2 }}
                    component={Link}
                    to="/cart"
                  >
                    {t('GoToCart')}
                  </Button>
                </Stack>

              </Stack>
            </CardContent>
          </Grid>

        </Grid>
      </Card>

      {/* Add Review */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" fontWeight={700} mb={2}>Add Review</Typography>

        <Card sx={{ borderRadius: 3, p: 3, boxShadow: 2 }}>
          <Box component="form" onSubmit={handleSubmit(onSubmitReview)}>
            <Stack spacing={2}>

              <Box>
                <Typography variant="body1" fontWeight={600} mb={0.5}>Your Rating</Typography>
                <Rating
                  value={value}
                  onChange={(e, newValue) => setValue(newValue)}
                  icon={<StarIcon fontSize="inherit" />}
                  size="large"
                />
              </Box>

              <TextField
                label="Write your review"
                variant="outlined"
                multiline
                rows={3}
                fullWidth
                {...register("Comment", { required: "Please enter your review" })}
                error={!!errors.Comment}
                helperText={errors.Comment?.message}
              />

              {errorRating && (
                <Alert severity="error">
                  {errorType?.response?.data?.message || "An error occurred"}
                </Alert>
              )}

              <Button
                type="submit"
                variant="contained"
                color="error"
                disabled={PendingRating}
                sx={{ width: "fit-content", borderRadius: 2, px: 4 }}
              >
                {PendingRating ? "Submitting..." : "Submit Review"}
              </Button>

            </Stack>
          </Box>
        </Card>
      </Box>

     
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" fontWeight={700} mb={2}>
          Reviews ({reviews.length})
        </Typography>

        {reviews.length === 0 ? (
          <Alert severity="info">No reviews yet. Be the first to review!</Alert>
        ) : (
          <Stack spacing={2}>
            {reviews.map((review, index) => (
              <Card key={index} sx={{ borderRadius: 3, boxShadow: 1 }}>
                <CardContent>
                  <Stack spacing={1.5}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar sx={{ bgcolor: 'error.main', fontWeight: 700 }}>
                        {review.userName?.charAt(0)?.toUpperCase()}
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="subtitle1" fontWeight={700}>
                          {review.userName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {new Date(review.createdAt).toLocaleDateString()}
                        </Typography>
                      </Box>
                      <Rating value={review.rating} readOnly size="small" />
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