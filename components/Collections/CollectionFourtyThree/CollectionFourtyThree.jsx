import Link from 'next/link';

import OfferCardTwo from '../../OfferCards/OfferCardTwo/OfferCardTwo';
import SmallCountDown from '../../UIs/SmallCountDown/SmallCountDown';

import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './collectionFourtyThree.module.scss';

const CollectionFourtyThree = () => {
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.wrapper}>
      <div className={cls.collection}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <div className={cls.categories}>
              <div className={cls.head}>
                <h5>Computers Accessories</h5>
              </div>
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
            <div className={cls.card}>
              <OfferCardTwo />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <div className={cls.card}>
              <OfferCardTwo />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <div className={cls.card}>
              <OfferCardTwo />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default CollectionFourtyThree;
