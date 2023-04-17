import { useState } from 'react';

import Categories from './Categories/Categories';
import ProductNine from '../../ProductCard/ProductNine/ProductNine';
import SaleTwentyOne from '../../Sale/SaleTwentyOne/SaleTwentyOne';

import Grid from '@mui/material/Grid';

import cls from './collectionThirteen.module.scss';

const CollectionThirteen = () => {
  const [activeLink, setActiveLink] = useState('Best Selling');

  const links = [
    "Best Selling",
    "Specials",
    "New Arrivals",
    "Most Reviews",
  ]

  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <Grid container alignItems="center">
          <Grid item sm={4} md={3} lg={2}><h5>CLOTHES</h5></Grid>
          <Grid item sm={8} md={9} lg={10}>
            <div className={cls.headLinks}>
              <ul>
                {links.map((link, idx) => (
                  <li key={idx} onClick={() => setActiveLink(link)} className={activeLink === link ? cls.active : ''}>
                    {link}
                    <span></span>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={cls.products}>
        <div className={cls.categories}>
          <Categories />
        </div>
        <div className={cls.sale}>
          <SaleTwentyOne />
        </div>
        <div className={cls.one}>
          <ProductNine />
        </div>
        <div className={cls.one}>
          <ProductNine />
        </div>
        <div className={cls.one}>
          <ProductNine />
        </div>
        <div className={cls.one}>
          <ProductNine />
        </div>
        <div className={cls.one}>
          <ProductNine />
        </div>
        <div className={cls.one}>
          <ProductNine />
        </div>
        <div className={cls.one}>
          <ProductNine />
        </div>
        <div className={cls.one}>
          <ProductNine />
        </div>
      </div>
    </div>
  )
}

export default CollectionThirteen;