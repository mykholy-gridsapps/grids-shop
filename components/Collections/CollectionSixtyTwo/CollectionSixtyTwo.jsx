import ProductThirtyOne from '../../ProductCard/ProductThirtyOne/ProductThirtyOne';
import SaleFourtyEight from '../../Sale/SaleFourtyEight/SaleFourtyEight';

import Grid from '@mui/material/Grid';

import cls from './collectionSixtyTwo.module.scss';

const CollectionSixtyTwo = () => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={3}>
        <SaleFourtyEight />
      </Grid>
      <Grid item lg={9}>
        <div className={cls.collection}>
          <div className={cls.head}>
            <h3>The Best Offers</h3>
            <button>More Products <i className="fa-light fa-angle-right"></i></button>
          </div>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={4}>
              <ProductThirtyOne />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <ProductThirtyOne />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <ProductThirtyOne />
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  )
}

export default CollectionSixtyTwo;
