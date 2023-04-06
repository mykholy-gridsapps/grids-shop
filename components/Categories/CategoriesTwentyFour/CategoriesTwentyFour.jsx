import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './categoriesTwentyFour.module.scss';

const CategoriesTwentyFour = () => {
  const { i18n } = useTranslation('common')

  return (
    <div className={cls.categories}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} xl={6}>
          <div className={cls.content}>
            <h2>Shop Men's Footwear
              <br />
              & Trainers
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            <p>nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit</p>
            <button>SHOP NOW <i className={`fa-solid fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'}-long`}></i></button>
          </div>
        </Grid>
        <Grid item xs={12} xl={6}>
          <div className={cls.images}>
            <img src="/imgs/shoe1.jpg" alt="product" />
            <div>
              <img src="/imgs/shoe1.jpg" alt="product" />
              <img src="/imgs/shoe1.jpg" alt="product" />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default CategoriesTwentyFour;
