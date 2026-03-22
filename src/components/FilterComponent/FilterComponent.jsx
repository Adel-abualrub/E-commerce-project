import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  MenuItem, 
  Stack,
  InputBase 
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import useChangeFilterValue from './../../store/useChangeFilterValue';


const SearchContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.08),
  },
  width: '100%',
  border: '1px solid #ccc',
  marginBottom: theme.spacing(1),
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.secondary,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
  },
}));

export default function FilterComponent() {

  const sortBy = useChangeFilterValue((state) => state.sortBy);
  const ascending = useChangeFilterValue((state) => state.ascending);
  const minPriceValue = useChangeFilterValue((state) => state.minPrice);
  const maxPriceValue = useChangeFilterValue((state) => state.maxPrice);
  const searchValue = useChangeFilterValue((state) => state.search);


  const setSortBy = useChangeFilterValue((state) => state.setSortBy);
  const setAscending = useChangeFilterValue((state) => state.setAscending);
  const setMinPrice = useChangeFilterValue((state) => state.setMinPrice);
  const setMaxPrice = useChangeFilterValue((state) => state.setMaxPrice);
  const setSearch = useChangeFilterValue((state) => state.setSearch);


  const [localMin, setLocalMin] = useState(minPriceValue || '');
  const [localMax, setLocalMax] = useState(maxPriceValue || '');

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
        boxShadow: '0px 4px 10px rgba(0,0,0,0.05)'
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
        Filters
      </Typography>

      <Stack spacing={3}>
        
    
        <Box>
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold' }}>
            Search Products
          </Typography>
          <SearchContainer>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="What are you looking for?"
              value={searchValue || ''}
              onChange={(e) => setSearch(e.target.value)}
            />
          </SearchContainer>
        </Box>

        <Box>
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold' }}>
            Price Range
          </Typography>
          <Stack direction="row" spacing={1}>
            <TextField
              fullWidth
              label="Min"
              variant="outlined"
              type="number"
              size="small"
              value={localMin}
              onChange={(e) => setLocalMin(e.target.value)}
            />
            <TextField
              fullWidth
              label="Max"
              variant="outlined"
              type="number"
              size="small"
              value={localMax}
              onChange={(e) => setLocalMax(e.target.value)}
            />
          </Stack>
        </Box>

        <Box>
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold' }}>
            Sort By
          </Typography>
          <TextField
            select
            fullWidth
            size="small"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            variant="outlined"
          >
            <MenuItem value="price">Price</MenuItem>
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="rating">Rating</MenuItem>
          </TextField>
        </Box>

    
        <TextField
          select
          fullWidth
          size="small"
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
            py: 1.5,
            mt: 1
          }}
        >
          APPLY FILTERS
        </Button>
      </Stack>
    </Box>
  );
}