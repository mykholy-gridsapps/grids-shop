import Link from 'next/link';

import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './collectionTwentyNine.module.scss';
import Product from './Product/Product';
import ProductSeventeen from '../../ProductCard/ProductSeventeen/ProductSeventeen';

const CollectionTwentyNine = () => {
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <h6>Featured Products</h6>
        <Link href='/'>
          More Products <i className={`fa-solid fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'}-long`}></i>
        </Link>
      </div>
      <div className={cls.wrapper}>
        <div className={cls.part}>
          <Product />
        </div>
        <div className={cls.part}>
          <ProductSeventeen />
        </div>
        <div className={cls.part}>
          <ProductSeventeen />
        </div>
        <div className={cls.part}>
          <ProductSeventeen />
        </div>
        <div className={cls.part}>
          <ProductSeventeen />
        </div>
        <div className={cls.part}>
          <ProductSeventeen />
        </div>
        <div className={cls.part}>
          <ProductSeventeen />
        </div>
        <div className={cls.part}>
          <ProductSeventeen />
        </div>
        <div className={cls.part}>
          <ProductSeventeen />
        </div>
      </div>
    </div>
  )
}

export default CollectionTwentyNine
