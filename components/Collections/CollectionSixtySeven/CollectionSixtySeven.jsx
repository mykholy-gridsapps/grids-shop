import HorizontalProductCardOne from "../../HorizontalProductCard/HorizontalProductCardOne/HorizontalProductCardOne"


import cls from './collectionSixtySeven.module.scss';
import { Grid } from "@mui/material";

const CollectionSixtySeven = () => {

  return (
    <div className={cls.collection}>
      <Grid container spacing={3}>
        <Grid item md={3} sm={6} xs={12}>
          <h3>Featured Products</h3>
          <HorizontalProductCardOne />
          <HorizontalProductCardOne />
          <HorizontalProductCardOne />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <h3>Top Rated Products</h3>
          <HorizontalProductCardOne />
          <HorizontalProductCardOne />
          <HorizontalProductCardOne />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <h3>Best Selling Products</h3>
          <HorizontalProductCardOne />
          <HorizontalProductCardOne />
          <HorizontalProductCardOne />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <h3>Latest Products</h3>
          <HorizontalProductCardOne />
          <HorizontalProductCardOne />
          <HorizontalProductCardOne />
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionSixtySeven;
