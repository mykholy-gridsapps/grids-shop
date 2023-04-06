import Grid from '@mui/material/Grid';

import cls from './saleFourty.module.scss';

const SaleFourty = () => {
  return (
    <div className={cls.saleFourty}>
      <span></span>
      <Grid container>
        <Grid item xs={12} md={6}>
          <div className={cls.content}>
            <div className={cls.sale}>
              <span>END OF SEASON</span>
              <h2>SALE</h2>
            </div>
            <div className={cls.circle}>
              <span>AT UP TO</span>
              <p><span>50%</span> OFF</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default SaleFourty
