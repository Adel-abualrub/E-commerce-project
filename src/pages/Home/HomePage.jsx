import React from 'react';
import { Container, Box, Typography, Stack, Button, useTheme, useMediaQuery, Grid, Paper } from '@mui/material';
import Categores from '../../components/categores/Categores';
import Products from '../../components/products/Products';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const bannerImages = [
  "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2099&auto=format&fit=crop"
];

export default function HomePage() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const SectionHeader = ({ title, subtitle, center = false }) => (
    <Box sx={{ mb: isMobile ? 3 : 5, textAlign: center ? 'center' : 'left' }}>
      <Stack 
        direction="row" 
        alignItems="center" 
        spacing={2} 
        sx={{ mb: 1, justifyContent: center ? 'center' : 'flex-start' }}
      >
        <Box sx={{ width: isMobile ? 12 : 20, height: isMobile ? 24 : 40, bgcolor: '#db4444', borderRadius: 1 }} />
        <Typography variant="subtitle1" sx={{ color: '#db4444', fontWeight: 'bold' }}>{t(subtitle)}</Typography>
      </Stack>
      <Typography variant={isMobile ? "h5" : "h4"} fontWeight="bold">{t(title)}</Typography>
    </Box>
  );

  return (
    <Box component="main" sx={{ pb: 5, overflowX: 'hidden' }}>
      
      {/* 1. Hero Slider with Padding */}
      <Box sx={{ 
        mb: isMobile ? 4 : 8, 
        px: { xs: 2, md: 5 }, // إضافة Padding جانبي للهيرو
        pt: { xs: 2, md: 4 }  // إضافة Padding علوي للهيرو
      }}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation={!isMobile}
          autoplay={{ delay: 5000 }}
          loop={true}
          style={{ 
            borderRadius: '16px', // جعل الزوايا دائرية أكثر ليتناسب مع البادنج
            height: isMobile ? '350px' : '550px',
            width: '100%'
          }}
        >
          {bannerImages.map((img, index) => (
            <SwiperSlide key={index}>
              <Box sx={{
                width: '100%', height: '100%',
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url(${img})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                display: 'flex', alignItems: 'center', 
                justifyContent: isMobile ? 'center' : 'flex-start',
                px: { xs: 2, md: 10 }
              }}>
                <Box sx={{ 
                    color: 'white', 
                    maxWidth: '600px', 
                    textAlign: isMobile ? 'center' : 'left' 
                }}>
                  <Typography variant={isMobile ? "h4" : "h2"} fontWeight="bold" gutterBottom>
                    {index === 0 ? t('NewSeason') : index === 1 ? t('SmartTech') : t('Exclusive')}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, fontWeight: 400 }}>
                    {t('BannerSubtitle')}
                  </Typography>
                  <Button component={Link} to="/products" variant="contained" 
                    sx={{ bgcolor: '#db4444', color: 'white', px: 5, py: 1.5, fontSize: '1.1rem', fontWeight: 'bold' }}>
                    {t('ShopNow')}
                  </Button>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Container maxWidth="lg">
        
        {/* 2. Categories */}
        <Box sx={{ mb: isMobile ? 6 : 10 }}>
          <SectionHeader title="Categories" subtitle="TodaySubtitle" />
          <Categores />
        </Box>

        {/* 3. Products Section - Centered */}
        <Box sx={{ mb: isMobile ? 6 : 10 }}>
          <SectionHeader title="ExploreProducts" subtitle="OurProductsSubtitle" center />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Products />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button component={Link} to='/products' variant="contained"
              sx={{ bgcolor: '#db4444', color: 'white', px: 6, py: 1.5, fontWeight: 'bold' }}>
              {t('AllProducts')}
            </Button>
          </Box>
        </Box>

        {/* 4. Promotional Banner */}
        <Paper sx={{ 
          bgcolor: '#1A1A1A', color: 'white', 
          p: { xs: 4, md: 8 }, mb: isMobile ? 6 : 10,
          display: 'flex', 
          flexDirection: isTablet ? 'column' : 'row', 
          alignItems: 'center', borderRadius: 4, gap: 4,
          textAlign: isTablet ? 'center' : 'left',
          position: 'relative', overflow: 'hidden'
        }}>
          <Box sx={{ flex: 1, zIndex: 2 }}>
            <Typography color="error.main" fontWeight="bold" sx={{ mb: 2, textTransform: 'uppercase', letterSpacing: 1.5 }}>
              {t('SpecialOffer')}
            </Typography>
            <Typography variant={isMobile ? "h4" : "h3"} fontWeight="900" sx={{ mb: 4, lineHeight: 1.2 }}>
              {t('BigSaleTitle')}
            </Typography>
            <Button component={Link} to="/products" variant="contained" color="error" size="large" sx={{ px: 5, py: 1.5, fontWeight: 'bold' }}>
              {t('ShopNow')}
            </Button>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', zIndex: 2 }}>
            <Box component="img" 
              src="https://purepng.com/public/uploads/large/purepng.com-shopping-bagshoppingbagshoppingshop-14215265481745v6z3.png"
              sx={{ 
                width: '100%', 
                maxWidth: isMobile ? '220px' : '380px', 
                height: 'auto',
                filter: 'drop-shadow(0 10px 30px rgba(219, 68, 68, 0.4))',
                transform: isMobile ? 'none' : 'perspective(1000px) rotateY(-10deg)'
              }} 
            />
          </Box>
          <Box sx={{
            position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px',
            bgcolor: 'rgba(219, 68, 68, 0.15)', filter: 'blur(100px)', borderRadius: '50%'
          }} />
        </Paper>

        {/* 5. Trust Bar */}
        <Grid 
          container 
          spacing={4} 
          sx={{ py: 8 }} 
          justifyContent="center" 
          alignItems="center"
        >
          {[
            { icon: <LocalShippingIcon />, title: 'FreeDelivery', desc: 'FreeDeliveryDesc' },
            { icon: <SupportAgentIcon />, title: 'CustomerService', desc: 'CustomerServiceDesc' },
            { icon: <VerifiedUserIcon />, title: 'MoneyBack', desc: 'MoneyBackDesc' },
          ].map((feature, i) => (
            <Grid item xs={12} sm={6} md={4} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Stack alignItems="center" spacing={2} sx={{ width: '100%', maxWidth: '300px' }}>
                <Box sx={{ 
                  p: 2, borderRadius: '50%', bgcolor: 'grey.300',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: '0.3s', 
                  '&:hover': { bgcolor: '#db4444', '& svg': { color: 'white' } }
                }}>
                  <Box sx={{ bgcolor: 'black', color: 'white', p: 1.5, borderRadius: '50%', display: 'flex' }}>
                    {React.cloneElement(feature.icon, { sx: { fontSize: 35 } })}
                  </Box>
                </Box>
                <Typography variant="h6" fontWeight="bold" align="center">
                  {t(feature.title)}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  {t(feature.desc)}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}