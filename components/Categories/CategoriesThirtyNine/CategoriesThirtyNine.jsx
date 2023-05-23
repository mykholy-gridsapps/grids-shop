import React from 'react';
import Container from '@mui/material/Container';

import cls from './categoriesThirtyNine.module.scss';
import { Grid } from '@mui/material';
import Link from 'next/link';

const CategoriesThirtyNine = () => {

  return (
    <div className={cls.categories}>
      <Grid container spacing={3}>
        <Grid item md={4} sm={6} xs={12} className={cls.item}>
          <h3>SHOP LIVING ROOM</h3>
          <div className={cls.headingSpacer}></div>
          <div>
            <Link href="#">
              <img src="./imgs/category/category-18.jpg" />
            </Link>
            <div className={cls.bannerMeta}>
              <Link href="#">LIVING ROOM </Link>

              <span class="banner-price">Starting at <strong>$999</strong></span>
            </div>
          </div>
        </Grid>
        <Grid item md={4} sm={6} xs={12} className={cls.item}>
          <h3>SHOP LIVING ROOM</h3>
          <div className={cls.headingSpacer}></div>
          <div>
            <Link href="#">
              <img src="./imgs/category/category-18.jpg" />
            </Link>
            <div className={cls.bannerMeta}>
              <Link href="#">LIVING ROOM </Link>

              <span class="banner-price">Starting at <strong>$999</strong></span>
            </div>
          </div>
        </Grid>
        <Grid item md={4} sm={6} xs={12} className={cls.item}>
          <h3>SHOP LIVING ROOM</h3>
          <div className={cls.headingSpacer}></div>
          <div>
            <Link href="#">
              <img src="./imgs/category/category-18.jpg" />
            </Link>
            <div className={cls.bannerMeta}>
              <Link href="#">LIVING ROOM </Link>

              <span class="banner-price">Starting at <strong>$999</strong></span>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CategoriesThirtyNine;
