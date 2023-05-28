import Link from 'next/link';

import Grid from '@mui/material/Grid';

import cls from './saleSixtyFive.module.scss';

const SaleSixtyFive = () => {
  return (
    <div className={cls.sale}>
      <Grid container className={cls.container} alignItems="center">
        <Grid item xs={12} lg={5}>
          <div className={cls.details}>
            <span>GAMING COLLECTION</span>
            <h2>
              Sony Playstation 4
              <br />
              Dualshok Controller
            </h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut quam enim, a praesentium animi aliquam quibusdam reprehenderit deleniti ex?</p>
            <button>Shop Now</button>
          </div>
        </Grid>
        <Grid item lg={7}>
          <img src="/imgs/bike.png" alt="product" />
        </Grid>
      </Grid>
    </div>
  )
}

export default SaleSixtyFive;
