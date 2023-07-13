import Grid from '@mui/material/Grid';

import cls from './categoriesFourtySeven.module.scss';

const CategoriesFourtySeven = () => {
  return (
    <div className={cls.categories}>
      <h4>
        Top Categories this Week
        <span></span>
      </h4>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} xl={12 / 5}>
          <div className={cls.category}>
            <img src="/imgs/screen.png" alt="category" />
            <p>Mobile Phone & Accessories</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={12 / 5}>
          <div className={cls.category}>
            <img src="/imgs/screen.png" alt="category" />
            <p>Camera, Photo & Accessories</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={12 / 5}>
          <div className={cls.category}>
            <img src="/imgs/screen.png" alt="category" />
            <p>Mobile Phone & Accessories</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={12 / 5}>
          <div className={cls.category}>
            <img src="/imgs/screen.png" alt="category" />
            <p>Camera, Photo & Accessories</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={12 / 5}>
          <div className={cls.category}>
            <img src="/imgs/screen.png" alt="category" />
            <p>Mobile Phone & Accessories</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={12 / 5}>
          <div className={cls.category}>
            <img src="/imgs/screen.png" alt="category" />
            <p>Camera, Photo & Accessories</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={12 / 5}>
          <div className={cls.category}>
            <img src="/imgs/screen.png" alt="category" />
            <p>Mobile Phone & Accessories</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={12 / 5}>
          <div className={cls.category}>
            <img src="/imgs/screen.png" alt="category" />
            <p>Camera, Photo & Accessories</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={12 / 5}>
          <div className={cls.category}>
            <img src="/imgs/screen.png" alt="category" />
            <p>Mobile Phone & Accessories</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={12 / 5}>
          <div className={cls.category}>
            <img src="/imgs/screen.png" alt="category" />
            <p>Camera, Photo & Accessories</p>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CategoriesFourtySeven;
