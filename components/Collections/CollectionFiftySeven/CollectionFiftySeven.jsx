import Link from 'next/link';

import ProductFourtySix from '../../ProductCard/ProductFourtySix/ProductFourtySix';

import Grid from '@mui/material/Grid';

import cls from './collectionFiftySeven.module.scss';

const CollectionFiftySeven = () => {
  return (
    <div className={cls.collection}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} xl={3}>
          <ProductFourtySix />
        </Grid>
        <Grid item xs={12} sm={6} xl={3}>
          <ProductFourtySix />
        </Grid>
        <Grid item xs={12} sm={12} xl={6}>
          <div className={cls.offer}>
            <img src="/imgs/scarf.jpg" alt="offer_image" />
            <div className={cls.content}>
              <h4>Accessories</h4>
              <Link href="/">
                View More
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionFiftySeven
