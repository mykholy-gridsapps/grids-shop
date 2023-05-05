import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './categoriesTwentyNine.module.scss';

const CategoriesTwentyNine = () => {
  const { i18n } = useTranslation('common');

  const array = [...Array(10)];
  const arr = [...Array(8)];
  const breakpoints = {
    250: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  }

  return (
    <div className={cls.categories}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={4}>
          <div className={cls.title}>
            <h2>Featured Categories</h2>
            <p>Choose your necessary products from this feature categories.</p>
          </div>
        </Grid>
        <Grid item xs={12} lg={8}>
          <div className={cls.brands}>
            <Swiper
              slidesPerView={1}
              loop={false}
              spaceBetween={20}
              breakpoints={breakpoints}>
              {array.map((_, idx) =>
                <SwiperSlide key={idx}>
                  <img src="/imgs/casio.png" alt="brand" />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </Grid>
      </Grid>

      <div className={cls.list}>
        <Grid container spacing={2}>
          {arr.map((_, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
              <div className={cls.item}>
                <div className={`${cls.image} ${cls[i18n.language]}`}>
                  <img src="/imgs/sh.png" alt="product" />
                  <button>view all</button>
                </div>
                <div>
                  <h6>Smart Phone</h6>
                  <ul className={cls[i18n.language]}>
                    <li><i className={`fa-light fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Phone Accessories</li>
                    <li><i className={`fa-light fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Phone Cases</li>
                    <li><i className={`fa-light fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Postpaid Phones</li>
                    <li><i className={`fa-light fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Refurbished Phones</li>
                  </ul>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default CategoriesTwentyNine
