import Link from 'next/link';

import ProductTwentyTwo from '../../ProductCard/ProductTwentyTwo/ProductTwentyTwo';
import OfferCardOne from '../../OfferCards/OfferCardOne/OfferCardOne';
import SmallCountDown from '../../UIs/SmallCountDown/SmallCountDown';

import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import 'swiper/css';
import cls from './collectionNinetyFive.module.scss';

const CollectionNinetyFive = () => {
  const { i18n } = useTranslation('common')

  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <div>
          <h4>Refrigerators & Freezers</h4>
          <p>Special products in this month.</p>
        </div>
        <div className={cls.time}>
          <div>
            <h6>Hurry Up!</h6>
            <span>Offers end in:</span>
          </div>
          <SmallCountDown daysCount={2} />
          <Link href='/'>
            View All <i className={`fa-sharp fa-regular fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'}`}></i>
          </Link>
        </div>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4} display={{ md: 'none', lg: 'block' }}>
          <OfferCardOne />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <ProductTwentyTwo small={true} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <ProductTwentyTwo small={true} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <ProductTwentyTwo small={true} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <ProductTwentyTwo small={true} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <ProductTwentyTwo small={true} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <ProductTwentyTwo small={true} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <ProductTwentyTwo small={true} />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <ProductTwentyTwo small={true} />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <ProductTwentyTwo small={true} />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <ProductTwentyTwo small={true} />
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionNinetyFive;
