import Link from 'next/link';

import CountDown from '../../UIs/CountDown/CountDown';
import ProductSeventeen from '../../ProductCard/ProductSeventeen/ProductSeventeen';

import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

import { useTranslation } from 'next-i18next';

import cls from './collectionThirty.module.scss';

const CollectionThirty = () => {
  const { i18n } = useTranslation('common');
  const arr = [...Array(2)]

  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <h5>Deals Hot Of The Day</h5>
        <Link href="/">
          More Products <i className={`fa-solid fa-arrow-${i18n.language === 'ar' ? 'left' : 'right'}-long`}></i>
        </Link>
      </div>
      <Grid container spacing={2}>
        {arr.map((_, idx) => (
          <Grid item xs={12} lg={12} xl={6}>
            <div className={cls.part}>
              <Grid container spacing={2} alignItems="center">
                <Grid item sm={6}>
                  <div className={cls.image}>
                    <img src="/imgs/shoes.png" alt="product" loading='lazy' />
                    <div className={cls.countdown}>
                      <CountDown daysCount={2} hideLabel={true} />
                    </div>
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div className={cls.details}>
                    <h5>Fashion Lifestyle Collection</h5>
                    <div className={cls.reviews}>
                      <Rating name="read-only" value={4} readOnly />
                      <p>(3 Reviews)</p>
                    </div>
                    <div className={cls.price}>
                      <span>$235.35</span>
                      <span>-</span>
                      <span>$85.05</span>
                    </div>
                    <div className={cls.description}>
                      <p><i className="fa-sharp fa-light fa-check"></i> Aliquam id diam maecenas ultricies.</p>
                      <p><i className="fa-sharp fa-light fa-check"></i> Volutpat ac tincidunt vitae semper.</p>
                      <p><i className="fa-sharp fa-light fa-check"></i> Ultrices eros in cursus turpis.</p>
                    </div>
                    <div className={cls.actions}>
                      <button>Add To Cart</button>
                      <button className={cls.wishlist}><i className="fa-light fa-heart"></i></button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductSeventeen />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductSeventeen />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductSeventeen />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductSeventeen />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductSeventeen />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductSeventeen />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductSeventeen />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ProductSeventeen />
        </Grid>
      </Grid>
    </div>
  )
}

export default CollectionThirty;
