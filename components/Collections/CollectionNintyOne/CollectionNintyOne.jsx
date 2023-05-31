
import ProductOne from '../../ProductCard/ProductOne/ProductOne';

import Grid from '@mui/material/Grid';

import { useTranslation } from "next-i18next";

import cls from './collectionNintyOne.module.scss';
import Link from 'next/link';

const CollectionNintyOne = ({title, subtitle}) => {

  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>


      <div className={cls.view}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <ProductOne />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductOne />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductOne />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductOne />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductOne />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProductOne />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CollectionNintyOne;
