import { useState } from 'react';

import ProductTwentyTwo from '../../ProductCard/ProductTwentyTwo/ProductTwentyTwo';
import OfferCardOne from '../../OfferCards/OfferCardOne/OfferCardOne';

import Grid from '@mui/material/Grid';

import 'swiper/css';
import cls from './collectionNinetyNine.module.scss';

const CollectionNinetyNine = () => {
  const [activeTab, setActiveTab] = useState('ALL');

  const tabs = [
    'ALL',
    'BEST SELLER',
    'MOST VIEWED',
    'TOP BRANDS'
  ]

  return (
    <div className={cls.collection}>
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
        <Grid item xs={12} md={6} lg={4} display={{ md: 'none', lg: 'block' }}>
          <OfferCardOne />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <ProductTwentyTwo small={true} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <ProductTwentyTwo small={true} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <ProductTwentyTwo small={true} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <ProductTwentyTwo small={true} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <ProductTwentyTwo small={true} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <ProductTwentyTwo small={true} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionNinetyNine;
