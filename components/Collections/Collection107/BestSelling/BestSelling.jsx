import ProductFourtyEight from '../../../ProductCard/ProductFourtyEight/ProductFourtyEight';

import Grid from '@mui/material/Grid';

import cls from './bestSelling.module.scss';

const BestSelling = () => {
  return (
    <div className={cls.bestSelling}>

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

export default BestSelling