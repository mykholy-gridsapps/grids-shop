import Link from 'next/link';

import Grid from '@mui/material/Grid';

import cls from './categoriesTwentyFive.module.scss';

const CategoriesTwentyFive = () => {
  return (
    <div className={cls.categories}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={cls.category}>
            <img src="/imgs/watch.png" alt="category" />
            <p><Link href='/'>Watches & Accessories</Link></p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={cls.category}>
            <img src="/imgs/watch.png" alt="category" />
            <p><Link href='/'>Watches & Accessories</Link></p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={cls.category}>
            <img src="/imgs/watch.png" alt="category" />
            <p><Link href='/'>Watches & Accessories</Link></p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={cls.category}>
            <img src="/imgs/watch.png" alt="category" />
            <p><Link href='/'>Watches & Accessories</Link></p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={cls.category}>
            <img src="/imgs/watch.png" alt="category" />
            <p><Link href='/'>Watches & Accessories</Link></p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={cls.category}>
            <img src="/imgs/watch.png" alt="category" />
            <p><Link href='/'>Watches & Accessories</Link></p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={cls.category}>
            <img src="/imgs/watch.png" alt="category" />
            <p><Link href='/'>Watches & Accessories</Link></p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className={cls.category}>
            <img src="/imgs/watch.png" alt="category" />
            <p><Link href='/'>Watches & Accessories</Link></p>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CategoriesTwentyFive;
