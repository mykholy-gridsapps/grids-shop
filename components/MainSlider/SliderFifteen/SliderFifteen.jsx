import Link from 'next/link';

import SideMenuTwo from '../../SideMenus/SideMenuTwo/SideMenuTwo';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from "swiper";
import 'swiper/css';
import "swiper/css/effect-fade";

import Grid from '@mui/material/Grid';
import Container from '@mui/system/Container';

import { useTranslation } from 'next-i18next';

import cls from './sliderFifteen.module.scss';

const SliderFifteen = () => {
  const { i18n } = useTranslation('common');

  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  return (
    <div className={[cls.sliderFifteen, 'customSliderArrows'].join(' ')}>
      <div className={cls.sideMenu}>
        <SideMenuTwo />
      </div>
      <Swiper slidesPerView={1} loop={true} spaceBetween={0} navigation={navigation} speed={800} modules={[Navigation, EffectFade]} effect="fade">
        <SwiperSlide>
          <div className={cls.slide1}>
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
                    <p>PROODUCT IDENTFIER: DD11160</p>
                    <Link href='/'>
                      <button>SHOP NOW <i className={`fa-solid fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'}-long`}></i></button>
                    </Link>
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
                    <Link href='/'>
                      <button>SHOP NOW <i className={`fa-solid fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'}-long`}></i></button>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </SwiperSlide>
        <button className='custom-swiper-prev'><i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'right' : 'left'} fa-sm`}></i></button>
        <button className='custom-swiper-next'><i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'} fa-sm`}></i></button>
      </Swiper>
    </div>
  )
}

export default SliderFifteen;
