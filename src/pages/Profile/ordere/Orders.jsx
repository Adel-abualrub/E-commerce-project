import React from 'react';
import { 
  Box, Typography, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, Chip, CircularProgress, Alert, Stack 
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import useProfile from '../../../hook/useProfile';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function Orders() {
  const { t } = useTranslation();
  const { data, isLoading, isError, error } = useProfile();

  if (isLoading) return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
      <CircularProgress />
    </Box>
  );

  if (isError) return (
    <Alert severity="error" sx={{ borderRadius: 2 }}>
      {error?.message || t('errorOcured')}
    </Alert>
  );

  const orders = data?.data?.orders || [];

  return (
    <Box>
      <Stack direction="row" alignItems="center" spacing={2} mb={4}>
        <ShoppingBagIcon color="primary" sx={{ fontSize: 30 }} />
        <Typography variant="h5" fontWeight="900">
          {t('Orders')}
        </Typography>
      </Stack>

      <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 3 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead >
            <TableRow>
              <TableCell sx={{ fontWeight: '800' }}>{t('OrderId')}</TableCell>
              <TableCell sx={{ fontWeight: '800' }}>{t('OrderDate')}</TableCell>
              <TableCell sx={{ fontWeight: '800' }}>{t('AmountPaid')}</TableCell>
              <TableCell sx={{ fontWeight: '800' }}>{t('PaymentStatus')}</TableCell>
              <TableCell sx={{ fontWeight: '800' }}>{t('Status')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <TableRow key={order.id} sx={{ '&:hover': { bgcolor: 'grey.50' }, transition: '0.2s' }}>
                  <TableCell sx={{ fontWeight: '700' }}>#{order.id}</TableCell>
                  <TableCell>
                    {new Date(order.orderDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell sx={{ fontWeight: '900', color: 'primary.main' }}>
                    ${order.amountPaid}
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={order.paymentStatus ? t(order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)) : "---"} 
                      size="small" 
                      color={order.paymentStatus === 'paid' ? 'success' : 'warning'}
                      sx={{ fontWeight: '700' }}
                    />
                  </TableCell>
                  <TableCell>
                     <Typography variant="body2" sx={{ fontWeight: '600' }}>
                        {order.status}
                     </Typography>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ py: 10 }}>
                  <Typography variant="body1" color="text.secondary">
                    {t('EmptyCart')}
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}