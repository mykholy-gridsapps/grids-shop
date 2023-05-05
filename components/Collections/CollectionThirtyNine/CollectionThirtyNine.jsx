import CountDownBox from '../../UIs/CountDownBox/CountDownBox';
import OfferCardTwo from '../../OfferCards/OfferCardTwo/OfferCardTwo';

import Grid from '@mui/material/Grid';

import cls from './collectionThirtyNine.module.scss';

const CollectionThirtyNine = () => {
  return (
    <div className={cls.collection}>
      <div className={cls.head}>
        <div className={cls.title}>
          <i className="fa-sharp fa-light fa-lightbulb-exclamation-on"></i>
          <div>
            <h4>Shocking Deal</h4>
            <p>The opportunity will quickly pass. Take it!</p>
          </div>
        </div>
        <CountDownBox daysCount={2} />
      </div>

      <Grid container spacing={2}>
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
  )
}

export default CollectionThirtyNine
