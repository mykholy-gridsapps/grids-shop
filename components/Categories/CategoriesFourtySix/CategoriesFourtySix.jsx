import Grid from '@mui/material/Grid';

import cls from './categoriesFourtySix.module.scss';

const CategoriesFourtySix = () => {
  const arr = [...Array(16)];

  return (
    <div className={cls.categories}>
      <div className={cls.head}>
        <div>
          <h3>Most Popular Categories</h3>
        </div>
      </div>
      <Grid container spacing={1} justifyContent="center">
        {arr.map((_, idx) => (
          <Grid item xs={6} sm={4} md={2} lg={1.5} key={idx}>
            <div className={cls.category}>
              <img src="/imgs/sh.png" alt="category" />
              <h6>Nike Shoes</h6>
              <p>625 items</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default CategoriesFourtySix;
