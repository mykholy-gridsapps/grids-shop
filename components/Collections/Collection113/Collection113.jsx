import { useState } from 'react';

import ProductFifty from '../../ProductCard/ProductFifty/ProductFifty';
import SaleTwenty from '../../Sale/SaleTwenty/SaleTwenty';

import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './collection113.module.scss';

const Collection113 = ({ rounded }) => {
  const [currentCategory, setCurrentCategory] = useState(1);
  const { i18n } = useTranslation();

  return (
    <div className={`${cls.homeCategory} ${rounded ? cls.rounded : ''}`}>
      <div className={cls.homeCategory__wrapper}>
        <div className={`${cls.homeCategory__head} ${cls[i18n.language]}`}>
          <h3>
            Electronics
            <span></span>
          </h3>
          <div>
            <span className={currentCategory === 1 ? cls.active : ''} onClick={() => setCurrentCategory(1)}>Labtops</span>
            <span className={currentCategory === 2 ? cls.active : ''} onClick={() => setCurrentCategory(2)}>Memory Cards</span>
            <span className={currentCategory === 3 ? cls.active : ''} onClick={() => setCurrentCategory(3)}>External Hard Drives</span>
            <span className={currentCategory === 4 ? cls.active : ''} onClick={() => setCurrentCategory(4)}>SSDs</span>
          </div>
        </div>
        <div className={`${cls.homeCategory__products} ${cls[i18n.language]}`}>
          <Grid container>
            <Grid item xs={12} md={6} lg={3} xl={12 / 5}>
              <SaleTwenty />
            </Grid>
            <Grid item xs={12} md={6} lg={3} xl={12 / 5}>
              <ProductFifty />
            </Grid>
            <Grid item xs={12} md={6} lg={3} xl={12 / 5}>
              <ProductFifty />
            </Grid>
            <Grid item xs={12} md={6} lg={3} xl={12 / 5}>
              <ProductFifty />
            </Grid>
            <Grid item xs={12} md={6} lg={3} xl={12 / 5}>
              <ProductFifty />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Collection113;