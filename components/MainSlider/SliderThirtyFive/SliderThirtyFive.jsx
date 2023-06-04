import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import Grid from '@mui/material/Grid';
import Container from '@mui/system/Container';

import { useTranslation } from 'next-i18next';

import cls from './sliderThirtyFive.module.scss';

const SliderThirtyFive = () => {
  const { i18n } = useTranslation('common');

  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  return (
    <div className={[cls.sliderFourteen, 'customSliderArrows'].join(' ')}>
      <Swiper slidesPerView={1} loop={true} spaceBetween={0} navigation={navigation} modules={[Navigation]}>
        <SwiperSlide>
          <div className={cls.slide1}>
            <Container maxWidth="xxl" className={cls.container}>
              <Grid container alignItems="center">
                <Grid item xs={12} lg={6}>
                  <div>
                    <span>NEW ARRIVAL</span>
                    <h2>
                      Pre-Order
                      <br />
                      Home Appliances
                    </h2>
                    <ul>
                      <li>Free Shipping. Secure Payment</li>
                      <li>Contact us 24hrs a day</li>
                      <li>Support gift service</li>
                    </ul>
                    <div className={cls.actions}>
                      <button>Shop Now</button>
                      <Link href="/">
                        Learn more
                      </Link>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} lg={6}>
                </Grid>
              </Grid>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cls.slide2}>
            <Container maxWidth="xl" className={cls.container}>
              <Grid container alignItems="center">
                <Grid item xs={12} lg={6}></Grid>
                <Grid item xs={12} lg={6}>
                  <div>
                    <span>NEW ARRIVAL</span>
                    <h2>
                      Pre-Order
                      <br />
                      Home Appliances
                    </h2>
                    <ul>
                      <li>Free Shipping. Secure Payment</li>
                      <li>Contact us 24hrs a day</li>
                      <li>Support gift service</li>
                    </ul>
                    <div className={cls.actions}>
                      <button>Shop Now</button>
                      <Link href="/">
                        Learn more
                      </Link>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </SwiperSlide>
        <button className='custom-swiper-prev'><i className={`fa-sharp fa-light fa-arrow-left fa-sm`}></i></button>
        <button className='custom-swiper-next'><i className={`fa-sharp fa-light fa-arrow-right fa-sm`}></i></button>
      </Swiper>
    </div>
  )
}

export default SliderThirtyFive
