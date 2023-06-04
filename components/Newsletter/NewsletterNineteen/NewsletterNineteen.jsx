import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import cls from './newsletterNineteen.module.scss';

const NewsletterNineteen = () => {
  return (
    <div className={cls.newsletter}>
      <Container maxWidth="xxl">
        <Grid container alignItems="center" spacing={3}>
          <Grid item xs={12} lg={6}>
            <div className={cls.details}>
              <h2>Subscrible & Get <span>10%</span> Discount</h2>
              <p>Get E-mail updates about our latest shop and special offers.</p>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className={cls.form}>
              <input type="text" placeholder='Your email address' />
              <button>Sign Up</button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default NewsletterNineteen;
