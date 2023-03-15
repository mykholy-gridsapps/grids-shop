import ProductThree from '../../ProductCard/ProductThree/ProductThree';
import SaleSeven from './../../Sale/SaleSeven/SaleSeven';

import Grid from '@mui/material/Grid';

import cls from './productsCategoriesEight.module.scss';

const ProductsCategoriesEight = () => {
  return (
    <div className={cls.wrapper}>
      <h5>Best selling of our products</h5>
      <div className={cls.collection}>
        <Grid container spacing={0.5}>
          <Grid item xs={12} md={4}>
            <Grid container>
              <Grid item xs={12} sm={6} md={12}>
                <ProductThree />
              </Grid>
              <Grid item xs={12} sm={6} md={12}>
                <SaleSeven />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={0.5}>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <ProductThree />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <ProductThree />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <ProductThree />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <ProductThree />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <ProductThree />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <ProductThree />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default ProductsCategoriesEight