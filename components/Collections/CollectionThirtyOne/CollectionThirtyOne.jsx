/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Link from 'next/link';

import ProductEighteen from './../../ProductCard/ProductEighteen/ProductEighteen';
import SmallCountDown from '../../UIs/SmallCountDown/SmallCountDown';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import 'swiper/css/navigation';
import cls from './collectionThirtyOne.module.scss';

const CollectionThirtyOne = () => {
  const [currentCategory, setCurrentCategory] = useState(1);
  const { t, i18n } = useTranslation();

  return (
    <div className={`${cls.homeCategory}`}>
      <div className={cls.homeCategory__wrapper}>
        <div className={`${cls.homeCategory__head} ${cls[i18n.language]}`}>

          <div className={cls.title}>
            <h3>Smart phones & tablets</h3>
            <div className={cls.countDown}>
              <span>Offer Ends In:</span>
              <SmallCountDown daysCount={2} />
            </div>
          </div>

          <div>
            <Link href="/">
              More Products <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>

        </div>
        <div className={`${cls.homeCategory__products} ${cls[i18n.language]}`}>
          <div className={cls.side}>
            <ProductEighteen />
          </div>
          <div className={cls.side}>
            <ProductEighteen />
          </div>
          {/* OFFER COMPONENT */}
          <div className={cls.center}>
            <ProductEighteen />
          </div>
          {/* OFFER COMPONENT */}
          <div className={cls.side}>
            <ProductEighteen />
          </div>
          <div className={cls.side}>
            <ProductEighteen />
          </div>
          <div className={cls.side}>
            <ProductEighteen />
          </div>
          <div className={cls.side}>
            <ProductEighteen />
          </div>
          <div className={cls.side}>
            <ProductEighteen />
          </div>
          <div className={cls.side}>
            <ProductEighteen />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionThirtyOne;