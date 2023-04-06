import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import Grid from '@mui/material/Grid';
import Container from '@mui/system/Container';

import cls from './sliderFourteen.module.scss';

const SliderFourteen = () => {
  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  return (
    <div className={[cls.sliderFourteen, 'customSliderArrows'].join(' ')}>
      <Swiper slidesPerView={1} loop={true} spaceBetween={0} navigation={navigation} modules={[Navigation]}>
        <SwiperSlide>
          <div className={cls.slide1}>
            <Container maxWidth="xl" className={cls.container}>
              <Grid container alignItems="center">
                <Grid item xs={12} lg={6}>
                  <div>
                    <span>From Online Store</span>
                    <h2>
                      Original Comper
                      <br />
                      Star Shoes
                    </h2>
                    <h4>F O R - M E N</h4>
                    <p>PROODUCT IDENTFIER: DD11160</p>
                  </div>
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
                    <span>From Online Store</span>
                    <h2>
                      Original Comper
                      <br />
                      Star Shoes
                    </h2>
                    <h4>F O R - M E N</h4>
                    <button>SHOP NOW</button>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </SwiperSlide>
        <button className='custom-swiper-next'><i className="fa-sharp fa-light fa-arrow-right fa-sm"></i></button>
        <button className='custom-swiper-prev'><i className="fa-sharp fa-light fa-arrow-left fa-sm"></i></button>
      </Swiper>
    </div>
  )
}

export default SliderFourteen
