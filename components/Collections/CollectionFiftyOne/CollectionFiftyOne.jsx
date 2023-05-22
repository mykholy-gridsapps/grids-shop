import ProductThirtyFive from '../../ProductCard/ProductThirtyFive/ProductThirtyFive';
import SaleFourtyEight from '../../Sale/SaleFourtyEight/SaleFourtyEight';

import Grid from '@mui/material/Grid';

import cls from './collectionFiftyOne.module.scss';

const CollectionFiftyOne = () => {
  const array = [...Array(8)];

  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <h4>MOST POPULAR FOR MAN</h4>
        <span></span>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <SaleFourtyEight />
        </Grid>
        <Grid item xs={12} lg={8}>
          <div className={cls.products}>
            <Grid container spacing={0.15} justifyContent="center">
              {array.map((_, idx) => (
                <Grid item xs={12} sm={4} md={3} lg={3} key={idx}>
                  <ProductThirtyFive />
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionFiftyOne
