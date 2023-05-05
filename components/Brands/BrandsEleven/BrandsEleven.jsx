import Link from 'next/link';
import { useState } from 'react';

import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './brandsEleven.module.scss';

const BrandsEleven = () => {
  const [activeTab, setActiveTab] = useState('All');
  const { i18n } = useTranslation('common');

  const tabs = [
    'All',
    'Digitals',
    'Furniture',
    'Fashion',
  ];

  const array = [...Array(8)]

  return (
    <div className={cls.brands}>
      <div className={cls.head}>
        <div>
          <h4>Top Brands</h4>
          <p>Special products in this month.</p>
        </div>
        <ul>
          {tabs.map(tab => (
            <li key={tab} onClick={() => setActiveTab(tab)} className={activeTab === tab ? cls.active : ''}>{tab}</li>
          ))}
        </ul>
      </div>

      <Grid container spacing={1} justifyContent="center">
        {array.map((_, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
            <div className={cls.brand}>
              <img src="/imgs/brand.jpg" alt="brand image" loading='lazy' />
              <div className={cls.details}>
                <img src="/imgs/casio.png" alt="brand" />
                <p>PC, Laptop, Smart Watch, Gaming Gear ...</p>
                <h6>Up to 15% off</h6>
                <Link href='/'>
                  shop now <i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i>
                </Link>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default BrandsEleven
