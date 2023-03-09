import ProductOne from '../../ProductCard/ProductOne/ProductOne';

import Grid from '@mui/material/Grid';

import cls from './productsCategoriesEleven.module.scss';

const ProductsCategoriesEleven = () => {
  return (
    <div className={cls.collection}>
      <h5>Featured Products</h5>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <ProductOne />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid container spacing={3}>
            <Grid item md={12} lg={6}>
              <ProductOne />
            </Grid>
            <Grid item md={12} lg={6}>
              <ProductOne />
            </Grid>
            <Grid item md={12} lg={6}>
              <ProductOne />
            </Grid>
            <Grid item md={12} lg={6}>
              <ProductOne />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductsCategoriesEleven