import ProductFourtyNine from '../../ProductCard/ProductFourtyNine/ProductFourtyNine';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import "swiper/css/navigation";
import cls from './collection117.module.scss';

const Collection117 = () => {
  const { i18n } = useTranslation('common');
  const array = [...Array(3)];

  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  return (
    <div className={cls.collection}>
      <Container maxWidth="xxl">
        <Grid container alignItems="center">
          <Grid item xs={12} lg={6}>
            <img src="/imgs/screen.png" alt="product" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className={cls.products}>
              <div className={cls.head}>
                <h4>
                  Televison Entertainment
                  <span></span>
                </h4>
                <div>
                  <button className='custom-swiper-prev'><i className={`fa-sharp fa-light fa-angle-${i18n.language === 'ar' ? 'right' : 'left'}`}></i></button>
                  <button className='custom-swiper-next'><i className={`fa-sharp fa-light fa-angle-${i18n.language === 'ar' ? 'left' : 'right'}`}></i></button>
                </div>
              </div>
            </div>
            <Swiper
              modules={[Navigation]}
              navigation={navigation}
              slidesPerView={1}
              loop={false}
              spaceBetween={20}
              className={cls.swiper}>
              {array.map((_, idx) =>
                <SwiperSlide key={idx}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                      <ProductFourtyNine />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <ProductFourtyNine />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <ProductFourtyNine />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <ProductFourtyNine />
                    </Grid>
                  </Grid>
                </SwiperSlide>
              )}
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Collection117;