import Grid from '@mui/material/Grid';

import cls from './categoriesTwentyTwo.module.scss';

const CategoriesTwentyTwo = () => {
  return (
    <div className={cls.categories}>
      <Grid container spacing={2}>
        <Grid item lg={2}>
          <div className={cls.category}>
            <i className="fa-regular fa-mobile"></i>
            <p>Mobile Phone & Accessories</p>
          </div>
        </Grid>
        <Grid item lg={2}>
          <div className={cls.category}>
            <i className="fa-regular fa-camera"></i>
            <p>Camera, Photo & Accessories</p>
          </div>
        </Grid>
        <Grid item lg={2}>
          <div className={cls.category}>
            <i className="fa-regular fa-mobile"></i>
            <p>Mobile Phone & Accessories</p>
          </div>
        </Grid>
        <Grid item lg={2}>
          <div className={cls.category}>
            <i className="fa-regular fa-camera"></i>
            <p>Camera, Photo & Accessories</p>
          </div>
        </Grid>
        <Grid item lg={2}>
          <div className={cls.category}>
            <i className="fa-regular fa-mobile"></i>
            <p>Mobile Phone & Accessories</p>
          </div>
        </Grid>
        <Grid item lg={2}>
          <div className={cls.category}>
            <i className="fa-regular fa-camera"></i>
            <p>Camera, Photo & Accessories</p>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CategoriesTwentyTwo
