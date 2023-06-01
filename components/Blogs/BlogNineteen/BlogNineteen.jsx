import ProductTwentyThree from '../../ProductCard/ProductTwentyThree/ProductTwentyThree';
import SaleThirtyNine from '../../Sale/SaleThirtyNine/SaleThirtyNine';

import Grid from '@mui/material/Grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './blogNineteen.module.scss';

const BlogNineteen = () => {
  const { i18n } = useTranslation('common');

  const array = [...Array(6)];

  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  const breakpoints = {
    300: {
      slidesPerView: 1
    },
    500: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 4
    },
  }

  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <div>
          <h4>Latest News & Events</h4>
          <p>Latest News & Events From our blog, forum</p>
        </div>
        <div>
          <button className='custom-swiper-prev'><i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'right' : 'left'} fa-sm`}></i></button>
          <button className='custom-swiper-next'><i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'} fa-sm`}></i></button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={navigation}
        slidesPerView={1}
        loop={false}
        breakpoints={breakpoints}
        spaceBetween={10}>
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <div className={cls.blog}>
              <img src="/imgs/2.jpg" alt="blog image" />
              <ul>
                <li>Gaming</li>
              </ul>

              <h3>How can web 3.0 bring changes to the gaming?</h3>
              <p>
                <span>August 30, 2022</span>
                <span>5 Mins read</span>
              </p>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default BlogNineteen;
