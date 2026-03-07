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

export default function Cart() {
  const { data, isLoading, isError, error } = useCart();
  const { mutate: DeleteItem, isPending: DeleteItemPending } = useDeleteFromCart();

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
                <TableCell>{item.count}</TableCell>
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
    </Box>
  );
}