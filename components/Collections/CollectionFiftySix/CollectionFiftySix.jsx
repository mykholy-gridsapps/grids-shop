import ProductThirtyEight from '../../ProductCard/ProductThirtyEight/ProductThirtyEight';

import Grid from '@mui/material/Grid';

import cls from './collectionFiftySix.module.scss';

const CollectionFiftySix = () => {
  return (
    <div className={cls.collection}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} lg={6}>
          <div className={cls.offer}>
            <img src="/imgs/sh.png" alt="product" />
            <div className={cls.details}>
              <span>Special Offer</span>
              <h2>
                Mauris
                <br />
                Rhoncus
              </h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, omnis.</p>
              <button>View More</button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <div className={cls.products}>
            <h6>FETAURED PRODUCTS</h6>
            <ProductThirtyEight />
            <ProductThirtyEight />
            <ProductThirtyEight />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <div className={cls.products}>
            <h6>FETAURED PRODUCTS</h6>
            <ProductThirtyEight />
            <ProductThirtyEight />
            <ProductThirtyEight />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionFiftySix
