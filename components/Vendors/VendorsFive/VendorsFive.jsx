import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

import cls from './vendorsFive.module.scss';

const VendorsFive = () => {
  const array = [...Array(4)]

  return (
    <div className={cls.vendors}>
      <h4>Top Selling Vendors</h4>
      <Grid container spacing={1} justifyContent="center">
        {array.map((_, idx) => (
          <Grid item xs={12} sm={6} lg={4} xl={3} key={idx}>
            <div className={cls.vendor}>
              <img src="/imgs/vendor.jpg" alt="vendor" />
              <div className={cls.details}>
                <div>
                  <h6>Vendor 1</h6>
                  <p>(3 Products)</p>
                </div>
                <Rating name="read-only" value={4} readOnly />
              </div>
            </div>
            <div className={cls.vendor}>
              <img src="/imgs/vendor.jpg" alt="vendor" />
              <div className={cls.details}>
                <div>
                  <h6>Vendor 1</h6>
                  <p>(3 Products)</p>
                </div>
                <Rating name="read-only" value={4} readOnly />
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default VendorsFive;
