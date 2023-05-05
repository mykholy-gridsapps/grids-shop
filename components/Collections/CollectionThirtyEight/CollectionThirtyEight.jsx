import { useState } from 'react';

import OfferCardThree from '../../OfferCards/OfferCardThree/OfferCardThree';
import OfferCardTwo from '../../OfferCards/OfferCardTwo/OfferCardTwo';
import SaleThirtyFour from '../../Sale/SaleThirtyFour/SaleThirtyFour';

import Grid from '@mui/material/Grid';

import cls from './collectionThirtyEight.module.scss';

const CollectionThirtyEight = () => {
  const [activeTab, setActiveTab] = useState('All')

  const tabs = [
    'All',
    'Best Seller',
    'Most Viewed',
    'Top Brands',
  ]
  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <div>
          <h4>Flash Deals</h4>
          <p>Special products in this month.</p>
        </div>
        <ul>
          {tabs.map(tab => (
            <li key={tab} onClick={() => setActiveTab(tab)} className={activeTab === tab ? cls.active : ''}>{tab}</li>
          ))}
        </ul>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6} xl={5}>
          <OfferCardThree />
        </Grid>
        <Grid item xs={12} lg={6} xl={5}>
          <OfferCardThree />
        </Grid>
        <Grid item lg={2} className={cls.salePart}>
          <SaleThirtyFour />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <OfferCardTwo />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <OfferCardTwo />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <OfferCardTwo />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
          <OfferCardTwo />
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionThirtyEight
