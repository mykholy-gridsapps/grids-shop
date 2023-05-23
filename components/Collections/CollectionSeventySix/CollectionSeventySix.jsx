import OfferCardEight from '../../OfferCards/OfferCardEight/OfferCardEight'
import SaleFourtyEight from '../../Sale/SaleFourtyEight/SaleFourtyEight';
import ProductThirtyEight from '../../ProductCard/ProductThirtyEight/ProductThirtyEight';

import Grid from '@mui/material/Grid';

import cls from './collectionSeventySix.module.scss';

const CollectionSeventySix = () => {
  return (
    <div className={cls.collection}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={3}>
          <div className={cls.products}>
            <div className={cls.head}>
              <h4>Most Popular</h4>
              <span></span>
            </div>
            <div className={cls.one}>
              <ProductThirtyEight />
            </div>
            <div className={cls.one}>
              <ProductThirtyEight />
            </div>
            <div className={cls.one}>
              <ProductThirtyEight />
            </div>
            <div className={cls.one}>
              <ProductThirtyEight />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <OfferCardEight />
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <SaleFourtyEight />
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionSeventySix
