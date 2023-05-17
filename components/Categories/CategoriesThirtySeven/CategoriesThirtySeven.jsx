import Grid from '@mui/material/Grid';

import cls from './categoriesThirtySeven.module.scss';

const CategoriesThirtySeven = () => {

  return (
    <div className={cls.categories}>
      <h2 className={cls.title}>
        Most Popular Categories
      </h2>
      <Grid container>
        {[...Array(12)].map((_, idx) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={idx}>
            <div className={cls.category}>
              <img src="/imgs/sh.png" alt="product" />
              <h6>Clothing</h6>
              <p>255 items</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default CategoriesThirtySeven;
