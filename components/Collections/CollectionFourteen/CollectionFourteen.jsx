import { useState } from 'react';

import Categories from './Categories/Categories';
import ProductNine from '../../ProductCard/ProductNine/ProductNine';
import SaleThirteen from '../../Sale/SaleThirteen/SaleThirteen';

import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './collectionFourteen.module.scss';

const CollectionFourteen = () => {
  const [activeLink, setActiveLink] = useState('Best Selling');
  const { i18n } = useTranslation('common');

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
          <Grid item xs={7} sm={4} md={4} lg={4}><h5 className={cls[i18n.language]}><i className="fa-regular fa-hat-santa"></i> ACCESSORIES</h5></Grid>
          <Grid item xs={5} sm={8} md={8} lg={8}>
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
          <div className={cls.sale}>
            <SaleThirteen />
            {/* <SaleThirteen /> */}
            {/* <SaleEighteen /> */}
          </div>
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

export default CollectionFourteen;