import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useProducts from "../../hook/useProducts";
import Product from "../../ui/product/Product";
import FilterComponent from "../FilterComponent/FilterComponent";
import { useLocation } from 'react-router-dom';

export default function Products() {
  const { data, isLoading, isError, error } = useProducts();
const location =useLocation();

  if (isError) return (
    <Box color="red" p={4}>{error.message}</Box>
  );

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography component="h3" variant="h4" color="error" fontWeight="bold" mb={4}>
        Our Products
      </Typography>

      <Grid container spacing={3}>
        {location.pathname==='/products'&& <Grid item xs={12} md={3}>
          <FilterComponent />
        </Grid>}
       

        <Grid item xs={12} md={9}>
          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 5 }}>
              <CircularProgress color="error" />
            </Box>
          ) : (
            <>
              <Grid container spacing={2}>
                {data?.response?.data?.map((product) => (
                  <Grid item xs={12} sm={6} lg={4} key={product.id}>
                    <Product product={product} />
                  </Grid>
                ))}
              </Grid>

              {data?.response?.data?.length === 0 && (
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 5 }}>
                  <Typography variant="h6" color="text.secondary">
                    No products found matching these filters.
                  </Typography>
                </Box>
              )}
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}