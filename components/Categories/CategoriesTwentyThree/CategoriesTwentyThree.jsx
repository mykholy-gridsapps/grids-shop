import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { useTranslation } from 'next-i18next';

import cls from './categoriesTwentyThree.module.scss';

const CategoriesTwentyThree = () => {
  const { i18n } = useTranslation('common');

  const array = [...Array(5)];
  const breakpoints = {
    350: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    }
  }

  return (
    <div className={cls.categories}>
      <Swiper
        loop={false}
        spaceBetween={20}
        breakpoints={breakpoints}>
        {array.map((_, idx) =>
          <SwiperSlide key={idx} className={cls.categoryWrapper}>
            <div className={cls.category}>
              <h4>Headphones</h4>
              <ul>
                <li>
                  <Link href='/'>
                    <i className={`fa-regular fa-angle-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Men's
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <i className={`fa-regular fa-angle-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Women's
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <i className={`fa-regular fa-angle-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Watch
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <i className={`fa-regular fa-angle-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Shoes
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <i className={`fa-regular fa-angle-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Accessories
                  </Link>
                </li>
              </ul>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

export default CategoriesTwentyThree
