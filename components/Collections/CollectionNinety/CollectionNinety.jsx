import ProductThirtySeven from '../../ProductCard/ProductThirtySeven/ProductThirtySeven';

import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './collectionNinety.module.scss';

const CollectionNinety = () => {
  const { i18n } = useTranslation('common');
  const products = [...Array(12)];

  return (
    <div className={cls.collection}>
      <div className={cls.products}>
        <div className={cls.head}>
          <h2>Featured Products</h2>
        </div>

        <Grid container spacing={2} justifyContent="center">
          {products.map((_, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
              <ProductThirtySeven />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default CollectionNinety;
