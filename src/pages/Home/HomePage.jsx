import React from 'react'
import Categores from '../../components/categores/Categores'
import { useCustomersCount } from '../../store/useCustomersCount'
import Typography from '@mui/material/Typography';
import useProducts from './../../hook/useProducts';
import Products from '../../components/products/products';

export default function HomePage() {

  return (
    <div>
      this is home page
      <Categores/>
      <Products/>
    </div>

  )
}
