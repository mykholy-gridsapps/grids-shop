import Grid from '@mui/material/Grid';

import cls from './partnersOne.module.scss';

const PartnersOne = () => {
  return (
    <div className={cls.partners}>
      <div className={cls.head}>
        <h2>
          Our Partners
        </h2>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <div className={cls.video}>
            <img src="/imgs/headphone.jpg" alt="video image" />
            <i className="fa-light fa-play"></i>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className={cls.partners}>
            <img src="/imgs/brands/6.png" alt="partner" />
            <img src="/imgs/brands/6.png" alt="partner" />
            <img src="/imgs/brands/6.png" alt="partner" />
            <img src="/imgs/brands/6.png" alt="partner" />
            <img src="/imgs/brands/6.png" alt="partner" />
            <img src="/imgs/brands/6.png" alt="partner" />
            <img src="/imgs/brands/6.png" alt="partner" />
            <img src="/imgs/brands/6.png" alt="partner" />
            <img src="/imgs/brands/6.png" alt="partner" />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default PartnersOne;
