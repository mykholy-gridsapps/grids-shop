import ProductTwentyFive from '../../ProductCard/ProductTwentyFive/ProductTwentyFive';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import cls from './priefCollectionOne.module.scss';

const PriefCollectionOne = () => {
  const array = [...Array(3)];

  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  const navigation2 = {
    nextEl: '.custom-swiper-next2',
    prevEl: '.custom-swiper-prev2',
  };

  const navigation3 = {
    nextEl: '.custom-swiper-next3',
    prevEl: '.custom-swiper-prev3',
  };

  return (
    <div className={cls.priefCollection}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={4}>
          <div className={cls.part}>
            <div className={cls.head}>
              <h5>Best Selling</h5>
              <div>
                <button className='custom-swiper-prev'><i className="fa-sharp fa-light fa-arrow-left fa-sm"></i></button>
                <button className='custom-swiper-next'><i className="fa-sharp fa-light fa-arrow-right fa-sm"></i></button>
              </div>
            </div>
            <Swiper
              slidesPerView={1}
              loop={false}
              modules={[Navigation]}
              navigation={navigation}
              spaceBetween={10}>
              {array.map((_, idx) =>
                <SwiperSlide key={idx}>
                  <ProductTwentyFive />
                  <ProductTwentyFive />
                  <ProductTwentyFive />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <div className={cls.part}>
            <div className={cls.head}>
              <h5>Featured products</h5>
              <div>
                <button className='custom-swiper-prev2'><i className="fa-sharp fa-light fa-arrow-left fa-sm"></i></button>
                <button className='custom-swiper-next2'><i className="fa-sharp fa-light fa-arrow-right fa-sm"></i></button>
              </div>
            </div>
            <Swiper
              slidesPerView={1}
              loop={false}
              modules={[Navigation]}
              navigation={navigation2}
              spaceBetween={10}>
              {array.map((_, idx) =>
                <SwiperSlide key={idx}>
                  <ProductTwentyFive />
                  <ProductTwentyFive />
                  <ProductTwentyFive />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <div className={cls.part}>
            <div className={cls.head}>
              <h5>Trending</h5>
              <div>
                <button className='custom-swiper-prev3'><i className="fa-sharp fa-light fa-arrow-left fa-sm"></i></button>
                <button className='custom-swiper-next3'><i className="fa-sharp fa-light fa-arrow-right fa-sm"></i></button>
              </div>
            </div>
            <Swiper
              slidesPerView={1}
              loop={false}
              modules={[Navigation]}
              navigation={navigation3}
              spaceBetween={10}>
              {array.map((_, idx) =>
                <SwiperSlide key={idx}>
                  <ProductTwentyFive />
                  <ProductTwentyFive />
                  <ProductTwentyFive />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default PriefCollectionOne
