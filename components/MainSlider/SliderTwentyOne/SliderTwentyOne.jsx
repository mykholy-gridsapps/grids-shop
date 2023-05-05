import Link from 'next/link';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import "swiper/css/pagination";
import cls from './sliderTwentyOne.module.scss';

const SliderTwentyOne = () => {
  const { i18n } = useTranslation('common');

  const arr = [...Array(9)];
  const array = [...Array(3)];
  const pagination = {
    clickable: true,
  };

  return (
    <div className={cls.slider}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} lg={9}>
          <div className={cls.main}>
            <Swiper
              slidesPerView={1}
              loop={true}
              spaceBetween={20}
              pagination={pagination}
              modules={[Pagination]}
              className='bottomBullets'>
              {array.map((_, idx) =>
                <SwiperSlide key={idx}>
                  <div className={cls.slide}>
                    <Grid container>
                      <Grid item xs={12} md={8}>
                        <span>HOT RIGHT NOW</span>
                        <p>Sale Up to 50% Off</p>
                        <h2>Mobile Devices</h2>
                        <p className={cls.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi quis consequatur in magnam aut explicabo ad repellat, rem, minus voluptatum blanditiis necessitatibus aspernatur omnis et nemo voluptatibus voluptate quidem.</p>
                        <div className={cls.btns}>
                          <button>Shop Now</button>
                          <Link href='/'>Learn More</Link>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <div className={`${cls.categories} ${cls[i18n.language]}`}>
            <h4>Product Categories</h4>
            <ul>
              {arr.map((_, idx) => (
                <li key={idx}>
                  <span>
                    <i className={`fa-light fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i>
                    Mobile Phones
                  </span>
                  <p>
                    34
                  </p>
                </li>
              ))}
            </ul>
            <Link href='/'>
              View More <i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'}`}></i>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default SliderTwentyOne
