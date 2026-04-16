import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import useAddToCart from '../../hook/useAddToCart';
import useAuthStore from '../../store/useAuthStore';
import Login from './../../pages/Login/Login';
import { useTranslation } from 'react-i18next';

export default function Product({ product }) {
 const { t } = useTranslation();
  const { mutate:AddToCart, isPending } = useAddToCart();
  const Navigate=useNavigate();
  const token=useAuthStore((state)=>state.token)
  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
      <Card sx={{
        borderRadius: 4,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: 10,
        }
      }}>

        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            height: 280,
            objectFit: 'contain',
            p: 3,
            bgcolor: 'background.default',
          }}
        />

        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, p: 2 }}>

          <Typography variant="body1" fontWeight="bold" noWrap>
            {product.name}
          </Typography>

          <Typography variant="h6" color="error" fontWeight="bold">
            ${product.price}
          </Typography>

          <Button
            variant="contained"
            color="error"
            startIcon={<ShoppingCartIcon />}
            fullWidth
            onClick={(e)=>{
            
 if (!!token) {
      e.preventDefault();
      AddToCart({ pId: product.id, count: 1 });
    }
    else{
      e.preventDefault();
      Navigate(`/Login`);
    }
            }}
            
          >
            {t('AddToCart')}
          </Button>

        </CardContent>
      </Card>
    </Link>
  );
}