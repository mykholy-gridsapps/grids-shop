import { useTranslation } from 'next-i18next';

import Grid from '@mui/material/Grid';

import cls from './saleSeventyFive.module.scss';

const SaleSeventyFive = () => {
  const { i18n } = useTranslation('common');

  return (
    <div className={`${cls.sale} ${cls[i18n.language]}`}>
      <Grid container>
        <Grid item xs={12} sm={6} md={4} lg={6}></Grid>
        <Grid item xs={12} sm={6} md={8} lg={6}>
          <img src="/imgs/slide2.png" alt="product" />
          <span>Starting from $899</span>
          <h2>
            iphone 12 pro
            <br />
            128Gb
          </h2>
          <p>Special Sale</p>
          <button>SHOP NOW <i className={`fa-sharp fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i></button>
        </Grid>
      </Grid>
    </div>
  )
}

export default SaleSeventyFive
