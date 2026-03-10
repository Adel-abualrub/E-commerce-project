import React from "react";
import useUpdateQuantity from "../../hook/useUpdateQuantity";
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Box from "@mui/material/Box";


export default function Quantity({productId,count}) {
  const { mutate: UpdateItemQuantity, isPending: PendingUpdateItemQuantity } =
    useUpdateQuantity();
  return (
   
    <Box>
      <IconButton
        disabled={PendingUpdateItemQuantity}
        onClick={() =>
          UpdateItemQuantity({
            ProductId: productId,
            NewCount: count - 1,
          })
        }
      >
        <RemoveIcon />
      </IconButton>
      {count}
      <IconButton
        disabled={PendingUpdateItemQuantity}
        onClick={() =>
          UpdateItemQuantity({
            ProductId: productId,
            NewCount: count + 1,
          })
        }
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
}
