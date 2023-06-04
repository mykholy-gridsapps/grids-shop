import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './categoriesFourtyFive.module.scss';

const CategoriesFourtyFive = () => {
  const { i18n } = useTranslation('common');

  const arr = [...Array(4)];

  return (
    <div className={cls.categories}>

      <div className={cls.list}>
        <Grid container spacing={2} justifyContent="center">
          {arr.map((_, idx) => (
            <Grid item xs={12} sm={6} lg={4} xl={3} key={idx}>
              <div className={cls.item}>
                <div className={`${cls.image} ${cls[i18n.language]}`}>
                  <img src="/imgs/sh.png" alt="product" />
                  <button>view all</button>
                </div>
                <div>
                  <h6>Smart Phone</h6>
                  <ul className={cls[i18n.language]}>
                    <li><i className={`fa-light fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Phone Accessories</li>
                    <li><i className={`fa-light fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Phone Cases</li>
                    <li><i className={`fa-light fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Postpaid Phones</li>
                    <li><i className={`fa-light fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Refurbished Phones</li>
                  </ul>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default CategoriesFourtyFive
