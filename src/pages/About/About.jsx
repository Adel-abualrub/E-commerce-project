import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Typography, Grid, Card } from '@mui/material';

import FirstAboutImg from './../../imgs/About/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png';

// Icons
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { id: 1, icon: <StorefrontOutlinedIcon sx={{ fontSize: 24 }} />, value: '10.5k', label: t('StatSellers') },
    { id: 2, icon: <AttachMoneyOutlinedIcon sx={{ fontSize: 24 }} />, value: '33k', label: t('StatMonthlySale') },
    { id: 3, icon: <LocalMallOutlinedIcon sx={{ fontSize: 24 }} />, value: '45.5k', label: t('StatCustomer') },
    { id: 4, icon: <PaidOutlinedIcon sx={{ fontSize: 24 }} />, value: '25k', label: t('StatAnnualSale') },
  ];

  const services = [
    { id: 1, icon: <LocalShippingOutlinedIcon sx={{ fontSize: 24 }} />, title: t('ServiceDeliveryTitle'), desc: t('ServiceDeliveryDesc') },
    { id: 2, icon: <HeadsetMicOutlinedIcon sx={{ fontSize: 24 }} />, title: t('ServiceSupportTitle'), desc: t('ServiceSupportDesc') },
    { id: 3, icon: <VerifiedOutlinedIcon sx={{ fontSize: 24 }} />, title: t('ServiceMoneyBackTitle'), desc: t('ServiceMoneyBackDesc') },
  ];

  return (
    <Box sx={{ minHeight: '100vh', pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">

        {/* Top Section */}
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center" sx={{ mb: { xs: 6, md: 10 } }}>

          {/* Text */}
          <Grid item xs={12} md={5}>
            <Box sx={{ maxWidth: 420, mx: 'auto', textAlign: 'center' }}>
              <Typography sx={{ fontSize: { xs: '2.2rem', md: '3rem' }, fontWeight: 700, mb: 4 }}>
                {t('StoryTitle')}
              </Typography>

              <Typography sx={{ fontSize: '15px', lineHeight: 1.9, mb: 3 }}>
                {t('StoryParagraph1')}
              </Typography>

              <Typography sx={{ fontSize: '15px', lineHeight: 1.9 }}>
                {t('StoryParagraph2')}
              </Typography>
            </Box>
          </Grid>

          {/* Image */}
          <Grid item xs={12} md={7}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                component="img"
                src={FirstAboutImg}
                alt="about"
                sx={{
                  width: '100%',
                  maxWidth: '1100px', // 👈 التعديل
                  display: 'block',
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Stats */}
        <Box sx={{ maxWidth: '1100px', mx: 'auto' }}>
          <Grid container spacing={4} justifyContent="center">
            {stats.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.id}>
                <Card
                  elevation={0}
                  sx={{
                    height: 260,
                    borderRadius: '6px',
                    border: '1px solid #eaeaea',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    cursor: 'pointer',
                    px: 2.5,
                    py: 3,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',

                    '&:hover': {
                      backgroundColor: '#DB4444',
                      borderColor: '#DB4444',
                      transform: 'translateY(-6px)',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.12)',

                      '& .icon-outer': {
                        backgroundColor: 'rgba(255,255,255,0.25)',
                      },

                      '& .icon-inner': {
                        backgroundColor: '#fff',
                        color: '#000',
                      },
                    },
                  }}
                >
                  <Box className="icon-outer" sx={{ width: 85, height: 85, borderRadius: '50%', backgroundColor: '#f1f1f1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box className="icon-inner" sx={{ width: 55, height: 55, borderRadius: '50%', backgroundColor: '#000', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {item.icon}
                    </Box>
                  </Box>

                  <Typography sx={{ fontSize: '2.2rem', fontWeight: 700 }}>
                    {item.value}
                  </Typography>

                  <Typography sx={{ fontSize: '14px', minHeight: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Services */}
        <Grid container spacing={{ xs: 5, md: 8 }} justifyContent="center" sx={{ mt: { xs: 8, md: 12 } }}>
          {services.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderRadius: '6px', border: '1px solid #eaeaea', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', p: 2 }}>
                <Box sx={{ width: 80, height: 80, borderRadius: '50%', backgroundColor: '#d9d9d9', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                  <Box sx={{ width: 50, height: 50, borderRadius: '50%', backgroundColor: '#000', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </Box>
                </Box>

                <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, mb: 1 }}>
                  {item.title}
                </Typography>

                <Typography sx={{ fontSize: '14px' }}>
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}