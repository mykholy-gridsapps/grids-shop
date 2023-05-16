import ProductThirtyOne from '../../ProductCard/ProductThirtyOne/ProductThirtyOne';

import Grid from '@mui/material/Grid';

import cls from './collectionSixtyOne.module.scss';

const CollectionSixtyOne = () => {
  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <h3>The Best Offers</h3>
        <button>More Products <i className="fa-light fa-angle-right"></i></button>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductThirtyOne />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductThirtyOne />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductThirtyOne />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductThirtyOne />
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionSixtyOne;
