import FeaturesTwelve from '../../Features/FeaturesTwelve/FeaturesTwelve';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import Grid from '@mui/material/Grid';

import 'swiper/css';
import cls from './sliderTwentyFive.module.scss';

const SliderTwentyFive = () => {
  const array = [...Array(3)];

  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  return (
    <>
      <FeaturesTwelve />
      <div className={`${cls.slider} smallCustomSliderArrows`}>
        <Swiper
          slidesPerView={1}
          loop={false}
          navigation={navigation}
          modules={[Navigation]}
          spaceBetween={0}>
          {array.map((_, idx) =>
            <SwiperSlide key={idx}>
              <div className={cls.slide}>
                <Grid container>
                  <Grid item xs={12} md={4}>
                    <div className={cls.product}>
                      <h2>Ball-Shaepd Table Night Lamp</h2>
                      <img src="/imgs/shoes.png" alt="product" />
                      <p>$200.00</p>
                      <button>Add To Cart</button>
                    </div>
                  </Grid>
                  <Grid item md={8} className={cls.imageSide}>
                    <div className={cls.image}>
                      <img src="/imgs/sli2.jpg" alt="product" />
                    </div>
                  </Grid>
                </Grid>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
        <button className='custom-swiper-next'><i className="fa-sharp fa-light fa-arrow-right fa-sm"></i></button>
        <button className='custom-swiper-prev'><i className="fa-sharp fa-light fa-arrow-left fa-sm"></i></button>
      </div>
    </>
  )
}

export default SliderTwentyFive
