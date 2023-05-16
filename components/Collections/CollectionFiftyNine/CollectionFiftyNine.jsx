import HorizontalProductCardOne from "../../HorizontalProductCard/HorizontalProductCardOne/HorizontalProductCardOne"
import SwiperCore, { Pagination } from 'swiper/core';


import cls from './collectionFiftyNine.module.scss';
import { Grid } from "@mui/material";

const CollectionFiftyEight = () => {

  return (
    <div className={cls.collection}>
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
