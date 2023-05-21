import SaleFourtyEight from '../../Sale/SaleFourtyEight/SaleFourtyEight';
import ProductThirtyFour from '../../ProductCard/ProductThirtyFour/ProductThirtyFour';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import cls from './collectionSeventyOne.module.scss';

const CollectionSeventyOne = ({ reverse }) => {
  const array = [...Array(3)];
  const pagination = {
    clickable: true,
  };

  return (
    <div className={cls.collection}>
      <Grid container flexDirection={reverse ? "row-reverse" : ""}>
        <Grid item xs={12} md={8}>
          <div className={cls.image}>
            <SaleFourtyEight />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={cls.products}>
            <div className={cls.head}>
              <h5>MOST POPULAR</h5>
              <p>Cum cubilia ac fringilla lorem
                quis himenaeos velit.</p>
            </div>
            <Swiper
              modules={[Pagination]}
              pagination={pagination}
              slidesPerView={1}
              loop={false}
              spaceBetween={10}
              className={`${cls.swiper} centerBullets`}>
              {array.map((_, idx) =>
                <SwiperSlide key={idx}>
                  <ProductThirtyFour />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionSeventyOne
