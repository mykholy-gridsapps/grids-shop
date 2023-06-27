import Rating from '@mui/material/Rating';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './blogTwentyOne.module.scss';

const BlogTwentyOne = () => {
  const { i18n } = useTranslation('common');

  const array = [...Array(3)];
  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  return (
    <div className={cls.productCard}>
      <div className={cls.head}>
        <h4>
          From The Blog
          <span></span>
        </h4>
        <div>
          <button className='custom-swiper-prev'><i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'right' : 'left'} fa-sm`}></i></button>
          <button className='custom-swiper-next'><i className={`fa-sharp fa-light fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'} fa-sm`}></i></button>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        loop={false}
        className={cls.swiper}
        modules={[Navigation]}
        navigation={navigation}
        spaceBetween={20}>
        {array.map((_, idx) =>
          <SwiperSlide key={idx}>
            <div className={cls.images}>
              <img className={cls.main} src="/imgs/2.jpg" alt="product" loading='lazy' />
            </div>
            <span className={cls.brand}>Uncategorized, Uncategorized, Uncategorized</span>
            <h6>Robot Wars – Post with Gallery</h6>
            <div className={cls.comments}>
              3 <i className="fa-regular fa-comments"></i>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default BlogTwentyOne;