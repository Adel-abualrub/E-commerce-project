import { Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Category({ category, index }) {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate(`/categoryProducts/${category.id}`)}
      sx={{
        cursor: 'pointer',
        textAlign: 'center',
        borderRadius: 4,
        padding: '20px 12px',
        transition: 'all 0.3s ease',
        boxShadow: 3,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        '&:hover': {
          transform: 'scale(1.08)',
          boxShadow: 8,
          borderColor: 'primary.main',
        }
      }}
    >
      <Typography component="h3" variant="body1" fontWeight="bold"
        sx={{ color: 'text.primary' }}>
        {category.name}
      </Typography>
    </Box>
  );
}