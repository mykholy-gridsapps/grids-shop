import { useState } from 'react';
import useMultiTab from './../../custom-hooks/useMultiTab';

import TodaysDeals from './TodaysDeals/TodaysDeals';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import BestSelling from './BestSelling/BestSelling';

import SaleThirteen from './../../Sale/SaleThirteen/SaleThirteen';
import Offers from './Offers/Offers';

import Grid from '@mui/material/Grid';

import cls from './productsCategoriesSeven.module.scss';

const ProductsCategoriesSeven = () => {
  const [activeCategory, setActiveCategory] = useState('Furniture')
  const { currentTabIndex, setCurrentTabIndex, currentTab } = useMultiTab([
    <TodaysDeals key={0} />,
    <FeaturedProducts key={1} />,
    <BestSelling key={2} />,
  ]);

  const list = [
    'Furniture',
    'Home Accessories',
    'Lighting',
    'Garden',
    'Outdoors',
  ]

  const tabs = [
    "Today Deals",
    "Featured Products",
    "Best Selling"
  ]

  return (
    <div className={cls.collection}>
      <Grid container>
        <Grid item xs={12} lg={9}>
          <div className={cls.collection__products}>
            <div className={cls.collection__products__head}>
              <h6>Home & Outdoors</h6>
              <ul>
                {list.map((item, idx) => (
                  <li key={idx} onClick={() => setActiveCategory(item)} className={activeCategory === item ? cls.active : ''}>{item}</li>
                ))}
              </ul>
            </div>
            <SaleThirteen />

            <div className={cls.tabs}>
              {tabs.map((tab, idx) => (
                <span
                  className={currentTabIndex === idx ? cls.active : ""}
                  onClick={() => setCurrentTabIndex(idx)}
                  key={idx}
                >
                 {tab}
                </span>
              ))}
            </div>

            <TodaysDeals />
          </div>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Offers />
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductsCategoriesSeven