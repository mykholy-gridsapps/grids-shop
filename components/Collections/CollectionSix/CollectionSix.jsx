import ProductSix from '../../ProductCard/ProductSix/ProductSix';

import Grid from '@mui/material/Grid';

import cls from './collectionSix.module.scss';

const CollectionSix = () => {
  return (
    <div className={cls.collection}>
      <h3>Special Offers</h3>
      <p>All our new arrivals in a exclusive brand selection</p>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <div className={cls.bigProduct}>
            <ProductSix />
          </div>
        </Grid>
        <Grid item md={8}>
          <div className={cls.smallProducts}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} lg={4} xl={3}>
                <ProductSix />
              </Grid>
              <Grid item xs={12} sm={6} lg={4} xl={3}>
                <ProductSix />
              </Grid>
              <Grid item xs={12} sm={6} lg={4} xl={3}>
                <ProductSix />
              </Grid>
              <Grid item xs={12} sm={6} lg={4} xl={3}>
                <ProductSix />
              </Grid>
              <Grid item xs={12} sm={6} lg={4} xl={3}>
                <ProductSix />
              </Grid>
              <Grid item xs={12} sm={6} lg={4} xl={3}>
                <ProductSix />
              </Grid>
              <Grid item xs={12} sm={6} lg={4} xl={3}>
                <ProductSix />
              </Grid>
              <Grid item xs={12} sm={6} lg={4} xl={3}>
                <ProductSix />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionSix;