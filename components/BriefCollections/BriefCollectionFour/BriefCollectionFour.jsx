import Link from 'next/link';

import ProductThirtyEight from '../../ProductCard/ProductThirtyEight/ProductThirtyEight';

import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './briefCollectionFour.module.scss';

const BriefCollectionFour = () => {
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.briefCollection}>
      <Grid container spacing={2} alignItems="center">
        {[...Array(4)].map((_, idx) => (
          <Grid item xs={12} sm={6} lg={3} key={idx}>
            <h4>Best selling</h4>
            <div className={cls.product}>
              <ProductThirtyEight />
            </div>
            <div className={cls.product}>
              <ProductThirtyEight />
            </div>
            <div className={cls.product}>
              <ProductThirtyEight />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default BriefCollectionFour;
