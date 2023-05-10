import OfferCardSeven from '../../OfferCards/OfferCardSeven/OfferCardSeven';

import Grid from '@mui/material/Grid';

import cls from './collectionFiftyThree.module.scss';

const CollectionFiftyThree = () => {
  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <h3>Today Hot Deals</h3>
      </div>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6} lg={4}>
          <OfferCardSeven />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <OfferCardSeven />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <OfferCardSeven />
        </Grid>
      </Grid>

      <div className={cls.view}>
        <button>View All Deals</button>
      </div>
    </div>
  )
}

export default CollectionFiftyThree
