import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import cls from './detailsOne.module.scss';

const DetailsOne = () => {
  return (
    <div className={cls.details}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} lg={6}>
            <div className={cls.content}>
              <span>ALL-IN-ONE ECOMMERCE SOLUTION</span>
              <h2>Tripple shop - WooCommerce Theme</h2>
              <p>Tripple shop WooCommerce theme for WordPress is the only thing you need to create your perfect online store. Use it for any kind of website: business, corporate, retail, multivendors.</p>
              <div className={cls.btns}>
                <button>READ MORE</button>
                <button>CONTACT US</button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default DetailsOne
