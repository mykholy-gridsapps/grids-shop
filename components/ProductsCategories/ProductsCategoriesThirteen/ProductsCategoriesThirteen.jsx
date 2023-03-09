import ProductEleven from './../../ProductCard/ProductEleven/ProductEleven';

import Grid from '@mui/material/Grid';

import cls from './productsCategoriesThirteen.module.scss';

const ProductsCategoriesThirteen = () => {
  return (
    <div className={cls.collection}>
      <Grid container>
        <Grid item md={3}>
          <ProductEleven />
        </Grid>
        <Grid item md={9}>
          <Grid container>
            <Grid item md={3}>
              <ProductEleven />
            </Grid>
            <Grid item md={3}>
              <ProductEleven />
            </Grid>
            <Grid item md={3}>
              <ProductEleven />
            </Grid>
            <Grid item md={3}>
              <ProductEleven />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductsCategoriesThirteen