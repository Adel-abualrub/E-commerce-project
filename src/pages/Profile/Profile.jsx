import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Profile() {
  return (<>
  <Box sx={{display:"flex",flexDirection:"column",gap:1}}>
            <Typography component={Link} to={""}>
Account Info
    </Typography>
    <Typography component={Link} to={"orders"}>
My Orders
    </Typography>

    <Typography component={Link} to={"settings"}>
Settings
    </Typography>

  </Box>
  <Box>
    <Outlet/>
  </Box>
  </>
  

  )
}
