import React from 'react';
import { 
  Box, 
  Typography, 
  InputBase 
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import useChangeFilterValue from './../../store/useChangeFilterValue';
import { useTranslation } from "react-i18next";


const SearchContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '8px',
  backgroundColor: theme.palette.mode === 'light' 
    ? '#f5f5f5' 
    : alpha(theme.palette.common.white, 0.15), 
  border: `1px solid ${theme.palette.mode === 'light' ? '#e0e0e0' : 'transparent'}`,
  transition: 'all 0.3s ease', 
  '&:hover': {
    backgroundColor: theme.palette.mode === 'light' 
      ? '#eeeeee' 
      : alpha(theme.palette.common.white, 0.25),
    borderColor: theme.palette.mode === 'light' ? '#bdbdbd' : 'transparent',
  },
  width: '100%',
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.mode === 'light' ? '#757575' : alpha(theme.palette.common.white, 0.7),
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.2, 1, 1.2, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
    color: theme.palette.mode === 'light' ? '#212121' : 'white',
    '&::placeholder': {
      color: theme.palette.mode === 'light' ? '#9e9e9e' : alpha(theme.palette.common.white, 0.5),
      opacity: 1, 
    },
  },
}));

export default function SearchBar({ hideTitle = false }) {
  const searchValue = useChangeFilterValue((state) => state.search);
  const setSearch = useChangeFilterValue((state) => state.setSearch);
  const { t } = useTranslation();

  return (
    <Box sx={{ width: '100%' }}>
      {!hideTitle && (
        <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 'bold' }}>
          {t("SearchProducts")}
        </Typography>
      )}
      <SearchContainer>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={t("SearchPlaceholder")}
          value={searchValue || ''}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchContainer>
    </Box>
  );
}