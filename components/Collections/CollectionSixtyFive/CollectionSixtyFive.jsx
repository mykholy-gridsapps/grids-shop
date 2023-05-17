import ProductThirtyOne from '../../ProductCard/ProductThirtyOne/ProductThirtyOne';
import SaleFourtyTwo from '../../Sale/SaleFourtyFour/SaleFourtyFour';
import SaleFourtyEight from '../../Sale/SaleFourtyEight/SaleFourtyEight';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import cls from './collectionSixtyFive.module.scss';

const CollectionSixtyFive = () => {
  const array = [...Array(3)];

  return (
    <div className={cls.collection}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className={cls.image}>
            <h5>Projects & Ideas</h5>
            <SaleFourtyEight />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={cls.products}>
            <h5>Similar Products</h5>
            <Swiper
              slidesPerView={1}
              loop={false}
              spaceBetween={10}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                },
                500: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 2,
                },
              }}>
              {array.map((_, idx) =>
                <SwiperSlide key={idx}>
                  <ProductThirtyOne />
                </SwiperSlide>
              )}
            </Swiper>
            <div className={cls.sale}>
              <SaleFourtyTwo />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionSixtyFive;
