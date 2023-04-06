import Link from 'next/link';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";

import { useTranslation } from 'next-i18next';

import cls from './saleFourtyThree.module.scss';

const SaleFourtyThree = () => {
  const { i18n } = useTranslation('common');

  const navigation = {};

  return (
    <div className={cls.sale}>
      <div className={cls.details}>
        <h2>GET OUR PERFECT GIFT</h2>
        <p>Special Offer Collection</p>
        <Link href='/'>
          VIEW ALL COLLECTION <i className={`fa-solid fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'}-long`}></i>
          <span></span>
        </Link>
      </div>
      <div className={cls.offer}>
        <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={30}
          navigation={navigation}
          modules={[Navigation]}
          className='plainArrows'
        >
          <SwiperSlide>
            <div className={cls.singleSale}>
              <span>ON SHOES</span>
              <h3>Up to 20% off</h3>
              <Link href='/'>
                SHOP NOW <i className={`fa-solid fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'}-long`}></i>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default SaleFourtyThree
