import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import {
  Box, Typography, Button, CircularProgress, Grid, Divider,
  Container, Paper, Stack, Card, CardContent, TextField, alpha
} from "@mui/material";

// Icons
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaymentsIcon from '@mui/icons-material/Payments';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

// Hooks
import useCart from "./../../hook/useCart";
import useCheckOut from "../../hook/useCheckOut";

export default function CheckOut() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const [paymentMethod, setPaymentMethod] = React.useState('Cash');

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: { fullName: '', city: '', address: '', phone: '' }
  });

  const { data, isLoading, isError, error } = useCart();
  const { mutate: payment, isPending: paymentPending } = useCheckOut();


  useEffect(() => {
    const savedInfo = JSON.parse(localStorage.getItem('shipping_info'));
    if (savedInfo) {
      Object.keys(savedInfo).forEach(key => setValue(key, savedInfo[key]));
    }
  }, [setValue]);

  const onSubmit = (formData) => {
    localStorage.setItem('shipping_info', JSON.stringify(formData));
    payment(paymentMethod);
  };

  if (isLoading) return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
      <CircularProgress thickness={5} size={50} />
    </Box>
  );

  const items = data?.items || [];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, direction: isRtl ? 'rtl' : 'ltr' }}>
      <Typography variant="h4" fontWeight="900" mb={4} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {t('Checkout')} <CheckCircleOutlineIcon color="primary" fontSize="large" />
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={4}>
         
          <Grid item xs={12} md={7}>
            <Stack spacing={4}>
              <Paper elevation={0} sx={{ p: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
                <Typography variant="h6" fontWeight="800" mb={3} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocalShippingIcon color="primary" /> {t('ShippingInformation')}
                </Typography>
                
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label={t('FullName')} {...register("fullName", { required: t('FieldRequired') })} error={!!errors.fullName} helperText={errors.fullName?.message} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label={t('Phone')} {...register("phone", { required: t('FieldRequired') })} error={!!errors.phone} helperText={errors.phone?.message} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label={t('City')} {...register("city", { required: t('FieldRequired') })} error={!!errors.city} helperText={errors.city?.message} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label={t('Address')} {...register("address", { required: t('FieldRequired') })} error={!!errors.address} helperText={errors.address?.message} />
                  </Grid>
                </Grid>
              </Paper>

              <Box>
                <Typography variant="h6" fontWeight="800" mb={2} color="text.secondary">{t('Products')} ({items.length})</Typography>
                <Stack spacing={2}>
                  {items.map((item) => (
                    <Card key={item.productId} elevation={0} sx={{ borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
                      <CardContent sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                          <Typography variant="subtitle1" fontWeight="800">{item.productName}</Typography>
                          <Typography variant="body2" color="text.secondary">{item.count} × {item.price}$</Typography>
                        </Box>
                        <Typography variant="h6" fontWeight="900" color="primary.main">{item.totalPrice}$</Typography>
                      </CardContent>
                    </Card>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Grid>

       
          <Grid item xs={12} md={5}>
            <Paper elevation={0} sx={{ p: 4, borderRadius: 5, border: '1px solid', borderColor: 'divider', position: 'sticky', top: 20 }}>
              <Typography variant="h6" fontWeight="800" mb={3}>{t('PaymentMethod')}</Typography>
              <Stack spacing={2} mb={4}>
                {['Visa', 'Cash'].map((method) => (
                  <Box
                    key={method} onClick={() => setPaymentMethod(method)}
                    sx={{
                      p: 2.5, borderRadius: 4, cursor: 'pointer', border: '2px solid',
                      borderColor: paymentMethod === method ? 'primary.main' : 'divider',
                      bgcolor: paymentMethod === method ? (theme) => alpha(theme.palette.primary.main, 0.08) : 'transparent',
                      display: 'flex', alignItems: 'center', gap: 2, transition: '0.3s'
                    }}
                  >
                    {method === 'Visa' ? <CreditCardIcon color={paymentMethod === method ? 'primary' : 'action'} /> : <PaymentsIcon color={paymentMethod === method ? 'primary' : 'action'} />}
                    <Typography fontWeight="800">{t(method)}</Typography>
                  </Box>
                ))}
              </Stack>
              <Divider sx={{ my: 3, borderStyle: 'dashed' }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                <Typography variant="h5" fontWeight="900">{t('Total')}</Typography>
                <Typography variant="h5" fontWeight="900" color="success.main">{data.cartTotal}$</Typography>
              </Box>
              <Button fullWidth size="large" variant="contained" type="submit" disabled={paymentPending} sx={{ py: 2, borderRadius: 4, fontWeight: '900' }}>
                {paymentPending ? t('Processing') : t('PayNow')}
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}