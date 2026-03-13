import React, { useState } from "react";
import useCart from "./../../hook/useCart";
import useDeleteFromCart from "./../../hook/useDeleteFromCart";
import Box from "@mui/material/Box";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import useClearCart from "../../hook/useClearCart";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import useUpdateQuantity from "../../hook/useUpdateQuantity";
import Quantity from "./../../components/Quantity/Quantity";

import { Link } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import useCheckOut from "../../hook/useCheckOut";
import { useMutation } from '@tanstack/react-query';

export default function CheckOut() {
  const { data, isLoading, isError, error } = useCart();
const [PaymentMethod,setPaymentMethod]=useState('Cash');
const {mutate:Payment,isPending:PaymentPending}=useCheckOut();
  if (isLoading) return <CircularProgress />;
  if (isError) return <Box color="red">{error.message}</Box>;

  const items = data.items;

  return (
    <Box component="section">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Total Count</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Total Price</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {items.map((item) => (
              <TableRow key={item.productId}>
                <TableCell>{item.productName}</TableCell>
                <TableCell>{item.count}</TableCell>
                <TableCell>{item.price}$</TableCell>
                <TableCell>{item.totalPrice}$</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell colSpan={5}>Total Cart {data.cartTotal}$</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      
      <Box>

<FormControl fullWidth>
  <InputLabel id="PaymentMethod">Payment Method</InputLabel>
  <Select
    labelId="PaymentMethod"
    id="PaymentMethod"
    value={PaymentMethod}
    onChange={(e)=>{setPaymentMethod(e.target.value);
        console.log(PaymentMethod);

    }}
  >
    <MenuItem value={'Visa'}>Visa</MenuItem>
    <MenuItem value={'Cash'}>Cash</MenuItem>
  
  </Select>
</FormControl>



  <Button
          component={Link}
          to="/checkout"
          color="success"
          variant="contained"
          sx={{ mt: 1 }}
         onClick={()=>Payment(PaymentMethod)} 
        >
          Pay Now
        </Button>

      </Box>
    </Box>
  );
}
