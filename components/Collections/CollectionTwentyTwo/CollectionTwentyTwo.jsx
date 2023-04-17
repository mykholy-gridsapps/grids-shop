import ProductDetails from './Product/ProductDetails';
import BestSeller from './BestSeller/BestSeller';

import Grid from '@mui/material/Grid';

import cls from './collectionTwentyTwo.module.scss';

const CollectionTwentyTwo = () => {
  return (
    <div className={cls.collection}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={9}>
          <ProductDetails />
        </Grid>
        <Grid item xs={12} lg={3}>
          <BestSeller />
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionTwentyTwo;
