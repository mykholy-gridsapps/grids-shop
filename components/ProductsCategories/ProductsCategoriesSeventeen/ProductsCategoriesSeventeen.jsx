import ProductEleven from './../../ProductCard/ProductEleven/ProductEleven';
import ProductFourteen from './../../ProductCard/ProductFourteen/ProductFourteen';
import ProductSixteen from './../../ProductCard/ProductSixteen/ProductSixteen';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import cls from './productsCategoriesSeventeen.module.scss';

const ProductsCategoriesSeventeen = () => {
  const pagination = {
      clickable: true,
  };
  const myArr = [0, 1, 2, 3, 4];
  const myArr2 = [0, 1, 2];
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
    <div className={cls.collecton}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <div className={cls.head}>
            <h6>
              Hot Products
              <span></span>
            </h6>
          </div>
          <Swiper loop={false} spaceBetween={10} className={cls.swiper} pagination={pagination} modules={[Pagination]}>
            {myArr2.map((_, idx) =>
              <SwiperSlide key={idx}>
                <ProductSixteen />
              </SwiperSlide>
            )}
          </Swiper>
        </Grid>
        <Grid item xs={12} sm={6} md={9}>
          <div className={cls.head}>
            <h6>
              Best Selling Products
              <span></span>
            </h6>
          </div>
          <Grid container>
            <Swiper breakpoints={breakpoints} loop={false} spaceBetween={10}>
              {myArr.map((_, idx) =>
                <SwiperSlide key={idx}>
                  <ProductEleven />
                </SwiperSlide>
              )}
            </Swiper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductsCategoriesSeventeen;