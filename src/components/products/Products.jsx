import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useProducts from "../../hook/useProducts";
import Product from "../../ui/product/Product";
import FilterComponent from "../FilterComponent/FilterComponent";

export default function Products() {
  // الـ Hook الآن يقرأ الفلاتر من Zustand تلقائياً
  const { data, isLoading, isError, error } = useProducts();

  if (isError) return <Box color={"red"} p={4}>{error.message}</Box>;

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography component={"h3"} variant="h4" color="error" sx={{ mb: 4, fontWeight: 'bold' }}>
        Our Products
      </Typography>

      <Grid container spacing={3}>
        {/* قسم الفلاتر (يأخذ 3 أعمدة من أصل 12 في الشاشات الكبيرة) */}
        <Grid item xs={12} md={3}>
          <FilterComponent />
        </Grid>

        {/* قسم المنتجات (يأخذ 9 أعمدة) */}
        <Grid item xs={12} md={9}>
          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 5 }}>
              <CircularProgress color="error" />
            </Box>
          ) : (
            <Grid container spacing={2}>
              {data?.response?.data?.map((product) => (
                <Grid item xs={12} sm={6} lg={4} key={product.id}>
                  <Product product={product} />
                </Grid>
              ))}
              
              {/* رسالة في حال عدم وجود منتجات تطابق الفلتر */}
              {data?.response?.data?.length === 0 && (
                <Typography sx={{ mt: 4, ml: 2 }}>
                  No products found matching these filters.
                </Typography>
              )}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}