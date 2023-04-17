/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import ProductEleven from '../../ProductCard/ProductEleven/ProductEleven';

import { useTranslation } from 'next-i18next';

import cls from './collectionTwentyThree.module.scss';

const CollectionTwentyThree = () => {
  const { i18n } = useTranslation();

  return (
    <div className={`${cls.homeCategory}`}>

      <div className={cls.homeCategory__wrapper}>

        <div className={`${cls.homeCategory__head} ${cls[i18n.language]}`}>

          <h3>Smart phones & tablets</h3>

          <div>
            <Link href="/">
              More Products <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>

        </div>

        <div className={`${cls.homeCategory__products} ${cls[i18n.language]}`}>

          <div className={cls.panner}>
            <img src="/imgs/products/panner2.jpg" alt="pannerImage" />
          </div>

          <div className={cls.side}>
            <ProductEleven />
          </div>

          <div className={cls.side}>
            <ProductEleven />
          </div>

          <div className={cls.side}>
            <ProductEleven />
          </div>

          <div className={cls.side}>
            <ProductEleven />
          </div>

          <div className={cls.side}>
            <ProductEleven />
          </div>

          <div className={cls.side}>
            <ProductEleven />
          </div>

          <div className={cls.side}>
            <ProductEleven />
          </div>

          <div className={cls.side}>
            <ProductEleven />
          </div>

        </div>

      </div>

    </div>
  )
}

export default CollectionTwentyThree;