import ProductTwentyThree from '../../ProductCard/ProductTwentyThree/ProductTwentyThree';
import SaleThirtyNine from '../../Sale/SaleThirtyNine/SaleThirtyNine';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import cls from './collectionThirtySeven.module.scss';

const CollectionThirtySeven = () => {
  const array = [...Array(3)];

  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  return (
    <div className={cls.collection}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={9}>
          <div className={cls.head}>
            <div>
              <h4>Top Selling Products</h4>
              <p>Special products in this month.</p>
            </div>
            <div>
              <button className='custom-swiper-prev'><i className="fa-sharp fa-light fa-arrow-left fa-sm"></i></button>
              <button className='custom-swiper-next'><i className="fa-sharp fa-light fa-arrow-right fa-sm"></i></button>
            </div>
          </div>
          <Swiper
            modules={[Navigation]}
            navigation={navigation}
            slidesPerView={1}
            loop={false}
            spaceBetween={10}>
            {array.map((_, idx) =>
              <SwiperSlide key={idx}>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={6}>
                    <ProductTwentyThree />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ProductTwentyThree />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ProductTwentyThree />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ProductTwentyThree />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ProductTwentyThree />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ProductTwentyThree />
                  </Grid>
                </Grid>
              </SwiperSlide>
            )}
          </Swiper>
        </Grid>
        <Grid item xs={12} lg={3}>
          <SaleThirtyNine />
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionThirtySeven
