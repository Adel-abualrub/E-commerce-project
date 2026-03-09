import React from "react";
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
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import useUpdateQuantity from "../../hook/useUpdateQuantity";



export default function Cart() {
  const { data, isLoading, isError, error } = useCart();
  const { mutate: DeleteItem, isPending: DeleteItemPending } = useDeleteFromCart();
  const {mutate:ClearCart,isPending:ClearCartPending}=useClearCart();
  const {mutate:UpdateItemQuantity,isPending:PendingUpdateItemQuantity}=useUpdateQuantity();



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
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {items.map((item) => (
              <TableRow key={item.productId}>
                <TableCell>{item.productName}</TableCell>
                <TableCell>
                  <Box>
<IconButton disabled={PendingUpdateItemQuantity} onClick={() =>
  UpdateItemQuantity({
  ProductId: item.productId,
  NewCount: item.count - 1,
  })
}>
<RemoveIcon/>
</IconButton>
{item.count}
<IconButton disabled={PendingUpdateItemQuantity} onClick={() =>
  UpdateItemQuantity({
    ProductId: item.productId,
  NewCount: item.count + 1,
  })
}>
<AddIcon/>
</IconButton>

                  </Box>
                  
                  
                  </TableCell>
                <TableCell>{item.price}$</TableCell>
                <TableCell>{item.totalPrice}$</TableCell>
                <TableCell>
                  <Button
                    disabled={DeleteItemPending}
                    color="error"
                    variant="contained"
                    onClick={() => DeleteItem(item.productId)}
                  >
                    Delete product
                  </Button>
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell colSpan={5}>Total Cart {data.cartTotal}$</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
<Button disabled={ClearCartPending} color="error" variant="contained"sx={{mt:1}} onClick={()=>ClearCart()}> Clear cart</Button>


    </Box>
  );
}