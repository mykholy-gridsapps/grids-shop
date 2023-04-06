import Grid from '@mui/material/Grid';

import cls from './saleFourtySix.module.scss';

const SaleFourtySix = () => {
  return (
    <div className={cls.sale}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} lg={6}>
          <div className={cls.details}>
            <span>Flash Sale</span>
            <h2>Light Sneaker</h2>
            <p>2022 Fashion Style Collection</p>
            <span className={cls.price}>START AT $99.00</span>
            <button>Shop Now</button>
            <div className={cls.hotDeal}>
              <i className="fa-regular fa-fire"></i>
              <span>Hot
                <br />
                Deal</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className={cls.image}>
            <img src="/imgs/shoes.png" alt="product" />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default SaleFourtySix
