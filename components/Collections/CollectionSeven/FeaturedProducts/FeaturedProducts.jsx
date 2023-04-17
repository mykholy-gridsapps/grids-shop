import ProductOne from "../../../ProductCard/ProductOne/ProductOne";

import { Swiper, SwiperSlide } from 'swiper/react';

import Grid from "@mui/material/Grid";

import cls from "./featuredProducts.module.scss";

const FeaturedProducts = () => {
  const myArr = [0, 1, 2, 3, 4, 5];
  const breakpoints = {
    400: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    },
  }

  return (
    <div className={cls.featuredProducts}>
      <Grid container columnSpacing={1}>
        <Swiper breakpoints={breakpoints} loop={false} spaceBetween={10}>
          {myArr.map((_, idx) =>
            <SwiperSlide key={idx}>
              <ProductOne />
            </SwiperSlide>
          )}
        </Swiper>
      </Grid>
    </div>
  );
};

export default FeaturedProducts;
