
import ProductOne from '../../ProductCard/ProductOne/ProductOne';

import Grid from '@mui/material/Grid';

import { useTranslation } from "next-i18next";

import cls from './collectionEightyFour.module.scss';
import Link from 'next/link';

const CollectionEightyFour = ({title, subtitle}) => {

  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>


      <div className={cls.view}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ProductOne />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ProductOne />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ProductOne />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ProductOne />
          </Grid>
        </Grid>
        <Link className={cls.showMore} href="#">Load More...</Link>
      </div>
    </div>
  );
}

export default CollectionEightyFour;
