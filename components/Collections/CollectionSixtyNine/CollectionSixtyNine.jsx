import { useState } from 'react';

import ProductThirtySix from '../../ProductCard/ProductThirtySix/ProductThirtySix';

import Grid from '@mui/material/Grid';

import { useTranslation } from "next-i18next";

import cls from './collectionSixtyNine.module.scss';

const CollectionSixtyNine = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState('Today Deals')
  const { t, i18n } = useTranslation('common');

  const tabs = [
    "Today Deals",
    "Featured Products",
    "Best Selling"
  ]

  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <span>WOODEN ACCESSORIES</span>
        <h3>FEATURED PRODUCTS</h3>
        <p>Visit our shop to see amazing creations from our designers.</p>
      </div>
      <div className={cls.tabs}>
        {tabs.map((tab, idx) => (
          <span
            className={currentTabIndex === tab ? cls.active : ""}
            onClick={() => setCurrentTabIndex(tab)}
            key={idx}
          >
            <span></span>
            <p>
              {tab}
            </p>
          </span>
        ))}
      </div>

      <div className={cls.view}>
        <Grid container>
          {[...Array(8)].map((_, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
              <ProductThirtySix />
            </Grid>
          ))}
        </Grid>
      </div>

      <div className={cls.btn}>
        <button>
          <span>
            Load More Products
          </span>
        </button>
      </div>
    </div>
  );
}

export default CollectionSixtyNine;
