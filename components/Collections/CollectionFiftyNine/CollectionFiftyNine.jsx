import HorizontalProductCardOne from "../../HorizontalProductCard/HorizontalProductCardOne/HorizontalProductCardOne"

import { Grid } from "@mui/material";

import cls from './collectionFiftyNine.module.scss';

const CollectionFiftyEight = ({border}) => {

  return (
    <div className={cls.collection} style={{border: border}}>
      <Grid container spacing={3}>
        <Grid item md={4} sm={6} xs={12}>
          <h3>Top Rated Products</h3>
          <HorizontalProductCardOne />
          <HorizontalProductCardOne />
          <HorizontalProductCardOne />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <h3>Best Selling Products</h3>
          <HorizontalProductCardOne />
          <HorizontalProductCardOne />
          <HorizontalProductCardOne />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <h3>Latest Products</h3>
          <HorizontalProductCardOne />
          <HorizontalProductCardOne />
          <HorizontalProductCardOne />
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionFiftyEight;
