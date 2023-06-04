import { useState } from 'react';

import ProductTwentyTwo from '../../ProductCard/ProductTwentyTwo/ProductTwentyTwo';

import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './collectionNinetyFour.module.scss';

const CollectionNinetyFour = () => {
  const [activeTab, setActiveTab] = useState('All')
  const { i18n } = useTranslation('common');

  const tabs = [
    'All',
    'Best seller',
    'Most viewed',
    'Top brands'
  ]

  return (
    <div className={cls.collection}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={cls.head}>
            <div>
              <h4>Refrigerators & Freezers</h4>
              <p>Special products in this month.</p>
            </div>
            <div className={cls.tabs}>
              <ul>
                {tabs.map((tab, idx) => (
                  <li key={idx} className={activeTab === tab ? cls.active : ''} onClick={() => setActiveTab(tab)}>{tab}</li>
                ))}
              </ul>
            </div>
          </div>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
              <ProductTwentyTwo />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
              <ProductTwentyTwo />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
              <ProductTwentyTwo />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
              <ProductTwentyTwo />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionNinetyFour;
