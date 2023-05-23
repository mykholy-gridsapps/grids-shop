import ProductAvailability from '../../Common/ProductAvailability/ProductAvailability';

import Rating from '@mui/material/Rating';
import Tooltip from "@mui/material/Tooltip";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './offerCardEight.module.scss';

const OfferCardEight = () => {
  const { i18n } = useTranslation('common');

  const array = [...Array(3)];
  const navigation = {
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  };

  return (
    <div className={cls.productCard}>
      <div className={cls.head}>
        <h3>Sale Products</h3>
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
            <div className={cls.offer}>
              -20%
            </div>
            <div className={cls.images}>
              <div className={`${cls.actions} ${cls[i18n.language]}`}>
                <Tooltip title="add to cart" placement="top">
                  <i className="fa-light fa-bag-shopping"></i>
                </Tooltip>
                <Tooltip title="add to wishlist" placement="top">
                  <i className="fa-light fa-heart"></i>
                </Tooltip>
                <Tooltip title="add to compare" placement="top">
                  <i className="fa-light fa-code-compare"></i>
                </Tooltip>
              </div>
              <img className={cls.main} src="/imgs/shoes.png" alt="product" loading='lazy' />
            </div>
            <span className={cls.brand}>Apple</span>
            <h6>2022 Apple iMac with Retina 5K</h6>
            <div className={cls.price}>
              <span>$164.47</span>
              <span className={cls.prev}>$183.47</span>
            </div>
            <ProductAvailability />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default OfferCardEight;