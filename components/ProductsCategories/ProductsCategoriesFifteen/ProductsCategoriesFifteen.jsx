import { useState } from 'react';
import useMultiTab from '../../custom-hooks/useMultiTab';

import TodaysDeals from './TodaysDeals/TodaysDeals';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import BestSelling from './BestSelling/BestSelling';

import SaleThirteen from '../../Sale/SaleThirteen/SaleThirteen';
import SaleThirtyFive from '../../Sale/SaleThirtyFive/SaleThirtyFive';

import Grid from '@mui/material/Grid';

import cls from './productsCategoriesFifteen.module.scss';

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
        <Grid item xs={12} lg={12}>
          <div className={cls.collection__products}>
            <div className={cls.collection__products__head}>
              <h6>Electronics</h6>
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

            <Grid container spacing={2}>
              <Grid item xs={12} sm={5} md={3}>
                <SaleThirtyFive />
              </Grid>
              <Grid item xs={12} sm={7} md={9}>
                <TodaysDeals />
              </Grid>
            </Grid>

          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductsCategoriesSeven