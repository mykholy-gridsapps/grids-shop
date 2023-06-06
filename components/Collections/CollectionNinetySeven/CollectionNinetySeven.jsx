import { useState } from 'react';

import ProductTwentyFour from '../../ProductCard/ProductTwentyFour/ProductTwentyFour';

import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './collectionNinetySeven.module.scss';

const CollectionNinetySeven = () => {
  const { i18n } = useTranslation('common');

  const [activeTab, setActiveTab] = useState('All');
  const array = [...Array(10)];

  const tabs = [
    'All',
    'Best Seller',
    'Most Viewed',
    'Top Brands'
  ]

  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <div>
          <h4>Refrigerators & Freezers</h4>
          <p>Special products in this month.</p>
        </div>
        <div className={cls.actions}>
          <ul>
            {tabs.map((tab, idx) => (
              <li onClick={() => setActiveTab(tab)} className={activeTab === tab ? cls.active : ''}>{tab}</li>
            ))}
          </ul>
        </div>
      </div>

      <Grid container spacing={2}>
        {array.map((_, idx) =>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={12 / 5} key={idx}>
            <ProductTwentyFour />
          </Grid>
        )}
      </Grid>
    </div>
  )
}

export default CollectionNinetySeven;