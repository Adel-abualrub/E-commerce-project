import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  IconButton,
  Grid,
  Card,
  CardContent,
  Divider,
  Container,
  Paper,
  Stack
} from "@mui/material";


import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


import useCart from "./../../hook/useCart";
import useDeleteFromCart from "./../../hook/useDeleteFromCart";
import useClearCart from "../../hook/useClearCart";
import Quantity from './../../components/Quantity/Quantity';

export default function Cart() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const { data, isLoading, isError, error } = useCart();
  const { mutate: DeleteItem, isPending: DeleteItemPending } = useDeleteFromCart();
  const { mutate: ClearCart, isPending: ClearCartPending } = useClearCart();

  if (isLoading) return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
      <CircularProgress thickness={5} size={50} />
    </Box>
  );

  if (isError) return (
    <Container sx={{ py: 5 }}>
      <Paper sx={{ p: 3, textAlign: 'center', border: '1px solid', borderColor: 'error.main', bgcolor: 'background.paper' }}>
        <Typography color="error">{t('errorOcured')}: {error.message}</Typography>
      </Paper>
    </Container>
  );

  const items = data?.items || [];

  if (items.length === 0) {
    return (
      <Container maxWidth="sm" sx={{ textAlign: 'center', py: 12 }}>
        <ShoppingBagIcon sx={{ fontSize: 80, color: 'text.disabled', mb: 2 }} />
        <Typography variant="h4" fontWeight="900" gutterBottom color="text.primary">{t('EmptyCart')}</Typography>
        <Button 
          variant="contained" 
          component={Link} 
          to='/' 
          startIcon={isRtl ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
          sx={{ mt: 3, borderRadius: 2, px: 4, py: 1.5, fontWeight: 'bold' }}
        >
          {t('BackToStore')}
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Typography variant="h3" fontWeight="900" mb={5} sx={{ display: 'flex', alignItems: 'center', gap: 2 }} color="text.primary">
        {t('Cart')} 🛍️
      </Typography>

      <Grid container spacing={4}>
     
        <Grid item xs={12} md={8}>
          <Stack spacing={2}>
            {items.map((item) => (
              <Card 
                key={item.productId} 
                elevation={0} 
                sx={{ 
                  borderRadius: 4, 
                  border: '1px solid', 
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                  transition: '0.3s',
                  '&:hover': { boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 8px 25px rgba(0,0,0,0.5)' : '0 8px 25px rgba(0,0,0,0.08)' }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={5}>
                      <Typography variant="subtitle1" fontWeight="800" noWrap color="text.primary">
                        {item.productName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t('Price')}: {item.price}$
                      </Typography>
                    </Grid>
                    
                    <Grid item xs={6} sm={3}>
                      <Quantity productId={item.productId} count={item.count} />
                    </Grid>

                    <Grid item xs={6} sm={2} sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" fontWeight="900" color="primary.main">
                        {item.totalPrice}$
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={2} sx={{ textAlign: isRtl ? 'left' : 'right' }}>
                      <IconButton 
                        onClick={() => DeleteItem(item.productId)}
                        disabled={DeleteItemPending}
                        color="error"
                        sx={{ 
                          bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(211, 47, 47, 0.1)' : '#fff1f1', 
                          '&:hover': { bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(211, 47, 47, 0.2)' : '#ffe2e2' } 
                        }}
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Stack>

          <Button 
            onClick={() => ClearCart()} 
            disabled={ClearCartPending}
            variant="text"
            color="inherit"
            startIcon={<DeleteOutlineIcon />}
            sx={{ mt: 3, opacity: 0.6, '&:hover': { opacity: 1, color: 'error.main' }, fontWeight: 'bold', color: 'text.primary' }}
          >
            {t('ClearCart')}
          </Button>
        </Grid>

  
        <Grid item xs={12} md={4}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 4, 
              borderRadius: 5, 
              bgcolor: 'background.paper', 
              border: '1px solid', 
              borderColor: 'divider',
              position: 'sticky',
              top: 20,
              boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 10px 40px rgba(0,0,0,0.4)' : '0 10px 40px rgba(0,0,0,0.03)'
            }}
          >
            <Typography variant="h6" fontWeight="800" mb={3} color="text.primary">
              {t('OrderSummary')}
            </Typography>
            
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography color="text.secondary">{t('Products')}</Typography>
                <Typography fontWeight="700" color="text.primary">{items.length}</Typography>
              </Box>
              
           

              <Divider sx={{ borderStyle: 'dashed', my: 1, borderColor: 'divider' }} />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h5" fontWeight="900" color="text.primary">{t('Total')}</Typography>
                <Typography variant="h5" fontWeight="900" color="primary.main">
                  {data.cartTotal}$
                </Typography>
              </Box>
            </Stack>

            <Button 
              component={Link}
              to="/checkout" 
              variant="contained" 
              fullWidth 
              size="large"
              sx={{ 
                mt: 4, 
                py: 2, 
                borderRadius: 3, 
                fontWeight: '900',
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                boxShadow: '0 12px 24px rgba(25, 118, 210, 0.3)'
              }}
            >
              {t('Checkout')}
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}