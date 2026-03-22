import React, { useState } from 'react';
import { 

  Box, 
  Typography, 
  TextField, 
  Button, 
  MenuItem, 
  Stack 
} from '@mui/material';

import useChangeFilterValue from './../../store/useChangeFilterValue';

export default function FilterComponent() {
  useChangeFilterValue

  const sortBy = useChangeFilterValue((state) => state.sortBy);
  const ascending = useChangeFilterValue((state) => state.ascending);
  const minPrice = useChangeFilterValue((state) => state.minPrice);
  const maxPrice = useChangeFilterValue((state) => state.maxPrice);


  const setSortBy = useChangeFilterValue((state) => state.setSortBy);
  const setAscending = useChangeFilterValue((state) => state.setAscending);
  const setMinPrice = useChangeFilterValue((state) => state.setMinPrice);
  const setMaxPrice = useChangeFilterValue((state) => state.setMaxPrice);

 
  const [localMin, setLocalMin] = useState(minPrice || '');
  const [localMax, setLocalMax] = useState(maxPrice || '');

  const handleApply = () => {

    setMinPrice(localMin === '' ? null : localMin);
    setMaxPrice(localMax === '' ? null : localMax);

  };

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper', 
        p: 3,
        borderRadius: 2,
        width: '100%',
        maxWidth: '350px',
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
        Filters
      </Typography>

      <Stack spacing={3}>
   
        <Stack direction="row" spacing={1}>
          <TextField
            fullWidth
            label="Min Price"
            variant="outlined"
            type="number"
            value={localMin}
            onChange={(e) => setLocalMin(e.target.value)}
          />
          <TextField
            fullWidth
            label="Max Price"
            variant="outlined"
            type="number"
            value={localMax}
            onChange={(e) => setLocalMax(e.target.value)}
          />
        </Stack>

       
        <TextField
          select
          fullWidth
          label="Sort By"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          variant="outlined"
        >
          <MenuItem value="price">Price</MenuItem>
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
        </TextField>

      
        <TextField
          select
          fullWidth
          label="Order"
          value={String(ascending)} 
          onChange={(e) => setAscending(e.target.value === 'true')}
          variant="outlined"
        >
          <MenuItem value="false">Descending</MenuItem>
          <MenuItem value="true">Ascending</MenuItem>
        </TextField>

 
        <Button
          fullWidth
          variant="contained"
          size="large"
          onClick={handleApply}
          sx={{
            backgroundColor: '#D64545',
            '&:hover': { backgroundColor: '#b53a3a' },
            fontWeight: 'bold',
            py: 1.5
          }}
        >
          APPLY FILTER
        </Button>
      </Stack>
    </Box>
  );
}