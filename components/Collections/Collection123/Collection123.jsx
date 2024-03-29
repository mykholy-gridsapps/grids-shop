/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import ProductFifty from '../../ProductCard/ProductFifty/ProductFifty';
import CategoriesList from './CategoriesList/CategoriesList';

import { useTranslation } from 'next-i18next';

import cls from './collection123.module.scss';

const Collection123 = () => {
  const [currentCategory, setCurrentCategory] = useState(1);
  const { i18n } = useTranslation();

  return (
    <div className={`${cls.homeCategory}`}>

      <div className={cls.homeCategory__wrapper}>

        <div className={`${cls.homeCategory__head} ${cls[i18n.language]}`}>

          <h3>
            Smart phones & tablets
            <span></span>
          </h3>

          <div>
            <span className={currentCategory === 1 ? cls.active : ''} onClick={() => setCurrentCategory(1)}>Best Selling</span>
            <span className={currentCategory === 2 ? cls.active : ''} onClick={() => setCurrentCategory(2)}>17 Inch</span>
            <span className={currentCategory === 3 ? cls.active : ''} onClick={() => setCurrentCategory(3)}>15 Inch</span>
            <span className={currentCategory === 4 ? cls.active : ''} onClick={() => setCurrentCategory(4)}>12 Inch</span>
          </div>

        </div>

        <div className={`${cls.homeCategory__products} ${cls[i18n.language]}`}>

          <CategoriesList />

          <div className={cls.panner}>

            <img src="/imgs/products/panner2.jpg" alt="pannerImage" />

          </div>

          <div className={cls.side}>

            <ProductFifty />

          </div>

          <div className={cls.side}>

            <ProductFifty />

          </div>

          <div className={cls.side}>

            <ProductFifty />

          </div>

          <div className={cls.side}>

            <ProductFifty />

          </div>

          <div className={cls.side}>

            <ProductFifty />

          </div>

          <div className={cls.side}>

            <ProductFifty />

          </div>

        </div>

      </div>

    </div>
  )
}

export default Collection123;