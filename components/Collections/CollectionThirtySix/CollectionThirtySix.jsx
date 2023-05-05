import Link from 'next/link';

import OfferCardTwo from '../../OfferCards/OfferCardTwo/OfferCardTwo';
import SmallCountDown from '../../UIs/SmallCountDown/SmallCountDown';

import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './collectionThirtySix.module.scss';

const CollectionThirtySix = () => {
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.wrapper}>
      <div className={cls.head}>
        <div className={cls.side}>
          <h3>Latest Deals</h3>
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
      <div className={cls.collection}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <div className={cls.categories}>
              <ul>
                <li><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Mobile Phones</li>
                <li><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Mobile Phones</li>
                <li><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Mobile Phones</li>
                <li><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Mobile Phones</li>
                <li><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Mobile Phones</li>
                <li><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Mobile Phones</li>
                <li><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Mobile Phones</li>
                <li><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Mobile Phones</li>
                <li><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Mobile Phones</li>
                <li><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Mobile Phones</li>
                <li><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Mobile Phones</li>
                <li><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Mobile Phones</li>
                <li><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Mobile Phones</li>
                <li><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Mobile Phones</li>
                <li><i className={`fa-solid fa-caret-${i18n.language === 'ar' ? 'left' : 'right'}`}></i> Mobile Phones</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <OfferCardTwo />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <OfferCardTwo />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <OfferCardTwo />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <OfferCardTwo />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <OfferCardTwo />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <OfferCardTwo />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <OfferCardTwo />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default CollectionThirtySix;
