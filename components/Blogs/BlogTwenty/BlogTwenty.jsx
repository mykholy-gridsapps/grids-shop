import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './blogTwenty.module.scss';

const BlogTwenty = () => {
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
    1200: {
      slidesPerView: 5
    },
  }

  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <div>
          <h4>Most Popular Categories</h4>
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
              <h3>Decorations</h3>
              <span>156 products</span>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default BlogTwenty;
