import Link from 'next/link';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './footerTwentyTwo.module.scss';

const FooterTwentyTwo = () => {
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.footer}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className={`${cls.side} ${cls.first} ${cls[i18n.language]}`}>
              <span>GET LATEST MINIMALISM NEWS</span>
              <h2>Newsletter Subscribe</h2>
              <p>It only takes a second to be the first to find out about our latest news and promotions...</p>
              <div className={cls.form}>
                <input type="text" placeholder='Your email address...' />
                <button>Subscribe</button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={cls.side}>
              <span>READ OUR NEWS</span>
              <h2>Follow Us</h2>
              <p>It only takes a second to be the first to find out about our news and promotions...</p>
              <div className={cls.social}>
                <Link href="#">
                  <i className={`fa-brands fa-facebook-f ${cls.facebook}`}></i>
                </Link>
                <Link href="#">
                  <i className={`fa-brands fa-twitter ${cls.twitter}`}></i>
                </Link>
                <Link href="#">
                  <i className={`fa-brands fa-instagram ${cls.instagram}`}></i>
                </Link>
                <Link href="#">
                  <i className={`fa-brands fa-linkedin-in ${cls.linkedin}`}></i>
                </Link>
                <Link href="#">
                  <i className={`fa-brands fa-youtube ${cls.youtube}`}></i>
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      <div className={cls.bottom}>
        <Container maxWidth="xl">
          <div className={cls.bottomWrapper}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className={cls.bottomImages}>
              <img src="/imgs/payments/payment-visa.svg" alt="visa" />
              <img src="/imgs/payments/payment-visa.svg" alt="visa" />
              <img src="/imgs/payments/payment-visa.svg" alt="visa" />
              <img src="/imgs/payments/payment-visa.svg" alt="visa" />
              <img src="/imgs/payments/payment-visa.svg" alt="visa" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default FooterTwentyTwo;
