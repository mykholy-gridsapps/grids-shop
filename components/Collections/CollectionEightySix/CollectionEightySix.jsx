
import { Grid } from "@mui/material";
import ProductOne from "../../ProductCard/ProductOne/ProductOne"

import cls from './collectionEightySix.module.scss';



const CollectionEightySix = () => {

  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <h2> Featured Products</h2>
      </div>
      <Grid container spacing={3}>
        <Grid item sm={4} xs={12}>
          <ProductOne />
        </Grid>  
        <Grid item sm={4} xs={12}>
          <ProductOne />
        </Grid>  
        <Grid item sm={4} xs={12}>
          <ProductOne />
        </Grid>  
        <Grid item sm={4} xs={12}>
          <ProductOne />
        </Grid>  
        <Grid item sm={4} xs={12}>
          <ProductOne />
        </Grid>  
        <Grid item sm={4} xs={12}>
          <ProductOne />
        </Grid>  
      </Grid>      
        
    </div>
  )
}

export default CollectionEightySix;
