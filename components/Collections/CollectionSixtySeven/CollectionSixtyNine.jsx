import { useState } from 'react';

import ProductThirtyTwo from '../../ProductCard/ProductThirtyTwo/ProductThirtyTwo';

import Grid from '@mui/material/Grid';

import cls from './collectionSixtyNine.module.scss';

const CollectionSixtyNine = () => {
  const [activeTab, setActiveTab] = useState('Today Deals')

  const array = [...Array(8)];

  const tabs = [
    "Today Deals",
    "Featured Products",
    "Best Selling"
  ]

  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <h4>MOST POPULAR FOR MAN</h4>
        <div className={cls.tabs}>
          {tabs.map((tab, idx) => (
            <span
              className={activeTab === tab ? cls.active : ""}
              onClick={() => setActiveTab(tab)}
              key={idx}
            >
              <span></span> {tab}
            </span>
          ))}
        </div>
      </div>
      <div className={cls.products}>
        <Grid container spacing={0.15} justifyContent="center">
          {array.map((_, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
              <ProductThirtyTwo />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default CollectionSixtyNine
