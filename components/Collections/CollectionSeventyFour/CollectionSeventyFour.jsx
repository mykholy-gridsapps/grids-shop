import OfferCardFive from '../../OfferCards/OfferCardFive/OfferCardFive';
import ProductThirtySix from '../../ProductCard/ProductThirtySix/ProductThirtySix';
import SaleFourtyEight from '../../Sale/SaleFourtyEight/SaleFourtyEight';

import Grid from '@mui/material/Grid';

import cls from './collectionSeventyFour.module.scss';

const CollectionSeventyFour = () => {
  return (
    <div className={cls.collection}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <OfferCardFive />
        </Grid>
        <Grid item md={6} lg={4}>
          <div className={cls.products}>
            <div className={cls.head}>
              <h4>MOST POPULAR</h4>
              <span></span>
            </div>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={4} md={6}>
                <ProductThirtySix />
              </Grid>
              <Grid item xs={12} sm={4} md={6}>
                <ProductThirtySix />
              </Grid>
              <Grid item xs={12} sm={4} md={6}>
                <ProductThirtySix />
              </Grid>
              <Grid item xs={12} sm={4} md={6}>
                <ProductThirtySix />
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item md={6} lg={4}>
          <div className={cls.sales}>
            <SaleFourtyEight />
            <SaleFourtyEight />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionSeventyFour;
