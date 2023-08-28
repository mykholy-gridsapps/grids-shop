import Link from 'next/link';

import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './saleSeventySeven.module.scss';

const SaleSeventySeven = () => {
  const { i18n } = useTranslation('common');

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} xl={3}>
          <div className={cls.sale}>
            <img src="/imgs/screen.png" alt="product" />
            <div className={cls.content}>
              <p>Catch The Big Deals On Screens</p>
              <Link href="/">
                Shop now
                <i className={`fa-sharp fa-solid fa-angle-${i18n.language === 'en' ? 'right' : 'left'}`}></i>
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} xl={3}>
          <div className={cls.sale}>
            <img src="/imgs/screen.png" alt="product" />
            <div className={cls.content}>
              <p>Catch The Big Deals On Screens</p>
              <Link href="/">
                Shop now
                <i className={`fa-sharp fa-solid fa-angle-${i18n.language === 'en' ? 'right' : 'left'}`}></i>
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} xl={3}>
          <div className={cls.sale}>
            <img src="/imgs/screen.png" alt="product" />
            <div className={cls.content}>
              <p>Catch The Big Deals On Screens</p>
              <Link href="/">
                Shop now
                <i className={`fa-sharp fa-solid fa-angle-${i18n.language === 'en' ? 'right' : 'left'}`}></i>
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} xl={3}>
          <div className={cls.sale}>
            <img src="/imgs/screen.png" alt="product" />
            <div className={cls.content}>
              <p>Catch The Big Deals On Screens</p>
              <Link href="/">
                Shop now
                <i className={`fa-sharp fa-solid fa-angle-${i18n.language === 'en' ? 'right' : 'left'}`}></i>
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default SaleSeventySeven