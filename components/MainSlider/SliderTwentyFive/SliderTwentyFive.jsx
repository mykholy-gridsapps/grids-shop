import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import Grid from '@mui/material/Grid';

import 'swiper/css';
import cls from './sliderTwentyFive.module.scss';

const SliderTwentyFive = () => {
  const array = [...Array(3)];
  const array2 = [...Array(10)];
  const breakpoints = {
    250: {
      slidesPerView: 1
    },
    400: {
      slidesPerView: 2
    },
    500: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 4
    },
    1200: {
      slidesPerView: 5
    },
  }
  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  return (
    <>
      <div className={cls.features}>
        <Swiper
          slidesPerView={1}
          loop={false}
          spaceBetween={10}
          breakpoints={breakpoints}>
          {array2.map((_, idx) =>
            <SwiperSlide key={idx}>
              <div className={cls.topSlide}>
                <i className="fa-light fa-wreath"></i>
                <div>
                  <h6>Home Decor</h6>
                  <p>But i must plain</p>
                </div>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
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
