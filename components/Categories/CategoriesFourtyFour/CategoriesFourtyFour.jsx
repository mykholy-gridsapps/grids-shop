import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import "swiper/css/navigation";
import cls from './categoriesFourtyFour.module.scss';

const CategoriesFourtyFour = () => {
  const { i18n } = useTranslation('common');

  const array = [...Array(5)];

  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  return (
    <div className={cls.categories}>

      <div className={cls.head}>
        <h3>Popular Categories</h3>
      </div>

      <div className={`${cls.products} darkSmallCustomSliderArrows ${i18n.language} ${i18n.language}`}>
        <Swiper
          modules={[Navigation]}
          navigation={navigation}
          slidesPerView={1}
          loop={false}
          spaceBetween={20}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}>
          {array.map((_, idx) =>
            <SwiperSlide key={idx}>
              <div className={cls.category}>
                <img src="/imgs/lastBack.jpg" alt="category" />
                <div className={cls.content}>
                  <h5>Smart Electronic</h5>
                  <span>12 Products</span>
                </div>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
        <button className='custom-swiper-prev'><i className={`fa-sharp fa-light fa-angle-left`}></i></button>
        <button className='custom-swiper-next'><i className={`fa-sharp fa-light fa-angle-right`}></i></button>
      </div>
    </div>
  )
}

export default CategoriesFourtyFour;
