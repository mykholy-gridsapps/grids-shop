import Grid from '@mui/material/Grid';

import cls from './categoriesFourtyEight.module.scss';

const CategoriesFourtyEight = () => {
  return (
    <div className={cls.categories}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <div className={cls.category}>
            <img src="/imgs/screen.png" alt="category" />
            <p>Mobile Phone & Accessories</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <div className={cls.category}>
            <img src="/imgs/screen.png" alt="category" />
            <p>Camera, Photo & Accessories</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <div className={cls.category}>
            <img src="/imgs/screen.png" alt="category" />
            <p>Mobile Phone & Accessories</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <div className={cls.category}>
            <img src="/imgs/screen.png" alt="category" />
            <p>Camera, Photo & Accessories</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <div className={cls.category}>
            <img src="/imgs/screen.png" alt="category" />
            <p>Mobile Phone & Accessories</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <div className={cls.category}>
            <img src="/imgs/screen.png" alt="category" />
            <p>Camera, Photo & Accessories</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <div className={cls.category}>
            <img src="/imgs/screen.png" alt="category" />
            <p>Mobile Phone & Accessories</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          <div className={cls.category}>
            <img src="/imgs/screen.png" alt="category" />
            <p>Camera, Photo & Accessories</p>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CategoriesFourtyEight;