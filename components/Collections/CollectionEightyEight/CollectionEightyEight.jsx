import { useState } from 'react';

import ProductThirtySeven from '../../ProductCard/ProductThirtySeven/ProductThirtySeven';

import Grid from '@mui/material/Grid';

import { useTranslation } from "next-i18next";

import cls from './collectionEightyEight.module.scss';

const CollectionEightyEight = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <span>WOODEN ACCESSORIES</span>
        <h3>FEATURED PRODUCTS</h3>
        <p>Visit our shop to see amazing creations from our designers.</p>
      </div>

      <div className={cls.view}>
        <Grid container spacing={2}>
          {[...Array(8)].map((_, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
              <ProductThirtySeven />
            </Grid>
          ))}
        </Grid>
      </div>

    </div>
  );
}

export default CollectionEightyEight;
