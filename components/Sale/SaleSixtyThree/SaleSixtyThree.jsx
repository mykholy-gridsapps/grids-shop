import Link from 'next/link';

import Grid from '@mui/material/Grid';

import cls from './saleSixtyThree.module.scss';

const SaleSixtyThree = () => {
  return (
    <div className={cls.sale}>
      <Grid container className={cls.container}>
        <Grid item xs={12} lg={5}>
          <div className={cls.details}>
            <span>GAMING COLLECTION</span>
            <h2>Sony Playstation 4 Dualshok Controller</h2>
            <div className={cls.btns}>
              <button>READ MORE</button>
              <Link href='/'>
                Read More
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item lg={7}>
          <img src="/imgs/game.webp" alt="product" />
        </Grid>
      </Grid>
    </div>
  )
}

export default SaleSixtyThree
