import React from 'react';

import Grid from '@mui/material/Grid';
import Link from 'next/link';

import cls from './saleFourtyTwo.module.scss';

const SaleFourtyTwo = () => {
  return (
    <div className={cls.saleFourtyTwo}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={cls.category}>
            <div className={cls.content}>
              <h4>ALL STAR NIKE SHOES</h4>
              <span>16 PRODUCTS</span>
            </div>
            <Link href='/'>
              SHOP NOW
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={cls.sale}>
            <span></span>
            <div className={cls.content}>
              <span>SEASONAL</span>
              <h2>Clearance</h2>
              <p>Top 5 trends From Tripple Shop</p>
            </div>
            <Link href='/'>
              SHOP NOW <i className="fa-sharp fa-light fa-arrow-right"></i>
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={cls.category}>
            <div className={cls.content}>
              <h4>ALL STAR NIKE SHOES</h4>
              <span>16 PRODUCTS</span>
            </div>
            <Link href='/'>
              SHOP NOW
            </Link>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={cls.sale}>
            <span></span>
            <div className={cls.content}>
              <span>SEASONAL</span>
              <h2>Clearance</h2>
              <p>Top 5 trends From Tripple Shop</p>
            </div>
            <Link href='/'>
              SHOP NOW <i className="fa-sharp fa-light fa-arrow-right"></i>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default SaleFourtyTwo
