import ProductThirtySeven from '../../ProductCard/ProductThirtySeven/ProductThirtySeven';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import "swiper/css/navigation";
import cls from './collectionEightyNine.module.scss';

const CollectionEightyNine = () => {
  const { i18n } = useTranslation('common');

  const array = [...Array(5)];

  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  return (
    <div className={cls.categories}>
      <div className={cls.head}>
        <span>WELCOME TO TRIPPLE SHOP</span>
        <h2>OUR BESTSELLERS</h2>
        <p>Visit our shop to see amazing creations from our designers.</p>
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
            768: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}>
          {array.map((_, idx) =>
            <SwiperSlide key={idx}>
              <ProductThirtySeven />
            </SwiperSlide>
          )}
        </Swiper>
        <button className='custom-swiper-prev'><i className={`fa-sharp fa-light fa-angle-left`}></i></button>
        <button className='custom-swiper-next'><i className={`fa-sharp fa-light fa-angle-right`}></i></button>
      </div>
    </div>
  )
}

export default CollectionEightyNine;
