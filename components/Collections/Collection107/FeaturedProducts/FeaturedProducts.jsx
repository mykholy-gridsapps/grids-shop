import ProductFourtyEight from '../../../ProductCard/ProductFourtyEight/ProductFourtyEight';

import Grid from '@mui/material/Grid';

import cls from './featuredProducts.module.scss';

const FeaturedProducts = () => {
  return (
    <div className={cls.featuredProducts}>

      <Grid container className={cls.grid}>

        <Grid item xs={12} sm={6} md={6} xl={3} className={cls.grid}>

          <ProductFourtyEight />

        </Grid>

        <Grid item xs={12} sm={6} md={6} xl={3} className={cls.grid}>

          <ProductFourtyEight />

        </Grid>

        <Grid item xs={12} sm={6} md={6} xl={3} className={cls.grid}>

          <ProductFourtyEight />

        </Grid>

        <Grid item xs={12} sm={6} md={6} xl={3} className={cls.grid}>

          <ProductFourtyEight />

        </Grid>

        <Grid item xs={12} sm={6} md={6} xl={3} className={cls.grid}>

          <ProductFourtyEight />

        </Grid>

        <Grid item xs={12} sm={6} md={6} xl={3} className={cls.grid}>

          <ProductFourtyEight />

        </Grid>

        <Grid item xs={12} sm={6} md={6} xl={3} className={cls.grid}>

          <ProductFourtyEight />

        </Grid>

        <Grid item xs={12} sm={6} md={6} xl={3} className={cls.grid}>

          <ProductFourtyEight />

        </Grid>

      </Grid>

    </div>
  )
}

export default FeaturedProducts