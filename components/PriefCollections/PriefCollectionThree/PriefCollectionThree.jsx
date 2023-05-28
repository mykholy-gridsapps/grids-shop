import ProductThirtyEight from '../../ProductCard/ProductThirtyEight/ProductThirtyEight';
import SaleFiftyNine from '../../Sale/SaleFiftySeven/SaleFiftySeven';

import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './priefCollectionThree.module.scss';

const PriefCollectionThree = () => {
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.priefCollection}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <div className={cls.salePart}>
            <SaleFiftyNine />
          </div>
        </Grid>
        {[...Array(3)].map((_, idx) => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={idx}>
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

export default PriefCollectionThree;
