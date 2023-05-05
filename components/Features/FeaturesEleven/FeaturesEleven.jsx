import Grid from '@mui/material/Grid';

import cls from './featuresEleven.module.scss';

const FeaturesEleven = () => {
  const array = [...Array(4)]

  return (
    <div className={cls.features}>
      <Grid container spacing={2}>
        {array.map((_, idx) => (
          <Grid item xs={12} sm={6} lg={3} key={idx}>
            <div className={cls.feature}>
              <i className="fa-sharp fa-light fa-headset"></i>
              <div>
                <h6>Support 24/7</h6>
                <p>Shop with an expert</p>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default FeaturesEleven
