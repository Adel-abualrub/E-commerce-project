import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Category from "../../ui/category/Category";
import useCategores from "../../hook/useCategores";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Categories() {
  const { data, isLoading, isError, error } = useCategores(100);

  if (isLoading) return <CircularProgress />;
  if (isError) return <Box color="red">{error.message}</Box>;

  return (
    <Box py={3}>
  

      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={16}
        loop={true}
        speed={800} 
        breakpoints={{
          0:    { slidesPerView: 2 },
          600:  { slidesPerView: 3 },
          900:  { slidesPerView: 5 },
          1200: { slidesPerView: 7 },
        }}
        style={{ paddingBottom: '40px', overflow: 'visible' }}
        
      >
        {data.response.data.map((category, index) => (
          <SwiperSlide key={category.id}>
            <Category category={category} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}