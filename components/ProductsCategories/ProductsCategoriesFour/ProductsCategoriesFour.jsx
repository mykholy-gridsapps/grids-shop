/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import ProductOne from './../../ProductCard/ProductOne/ProductOne';
import Offer from './Offer/Offer';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import 'swiper/css/navigation';
import cls from './productsCategoriesFour.module.scss';

const HomeCategory = () => {
  const [currentCategory, setCurrentCategory] = useState(1)
  const { t, i18n } = useTranslation();

  return (
    <div className={`${cls.homeCategory}`}>
      <div className={cls.homeCategory__wrapper}>
        <div className={`${cls.homeCategory__head} ${cls[i18n.language]}`}>
          <div>
            <span className={currentCategory === 1 ? cls.active : ''} onClick={() => setCurrentCategory(1)}>Labtops</span>
            <span className={currentCategory === 2 ? cls.active : ''} onClick={() => setCurrentCategory(2)}>Memory Cards</span>
            <span className={currentCategory === 3 ? cls.active : ''} onClick={() => setCurrentCategory(3)}>External Hard Drives</span>
            <span className={currentCategory === 4 ? cls.active : ''} onClick={() => setCurrentCategory(4)}>SSDs</span>
          </div>
        </div>
        <div className={`${cls.homeCategory__products} ${cls[i18n.language]}`}>
          <div className={cls.side}>
            <ProductOne />
          </div>
          <div className={cls.side}>
            <ProductOne />
          </div>
          {/* OFFER COMPONENT */}
          <Offer />
          {/* OFFER COMPONENT */}
          <div className={cls.side}>
            <ProductOne />
          </div>
          <div className={cls.side}>
            <ProductOne />
          </div>
          <div className={cls.side}>
            <ProductOne />
          </div>
          <div className={cls.side}>
            <ProductOne />
          </div>
          <div className={cls.side}>
            <ProductOne />
          </div>
          <div className={cls.side}>
            <ProductOne />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCategory