import HorizontalProductCardTwo from "../../HorizontalProductCard/HorizontalProductCardTwo/HorizontalProductCardTwo"


import cls from './collectionSeventyEight.module.scss';
import { Grid } from "@mui/material";

const CollectionSeventyEight = ({seprator}) => {

  return (
    <div className={cls.collection}>
      <Grid container spacing={3}>
        <Grid item md={4} sm={6} xs={12}>
          <h3>Top Rated Products</h3>
          <div className={cls.headingSpacer} style={{visibility: seprator}}></div>

          <HorizontalProductCardTwo />
          <HorizontalProductCardTwo />
          <HorizontalProductCardTwo />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <h3>Best Selling Products</h3>
          <div className={cls.headingSpacer} style={{visibility: seprator}}></div>

          <HorizontalProductCardTwo />
          <HorizontalProductCardTwo />
          <HorizontalProductCardTwo />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <h3>Latest Products</h3>
          <div className={cls.headingSpacer} style={{visibility: seprator}}></div>

          <HorizontalProductCardTwo />
          <HorizontalProductCardTwo />
          <HorizontalProductCardTwo />
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionSeventyEight;
