import Link from 'next/link';

import ProductThirtyEight from '../../ProductCard/ProductThirtyEight/ProductThirtyEight';

import Grid from '@mui/material/Grid';

import { useTranslation } from 'next-i18next';

import cls from './briefCollectionFive.module.scss';

const BriefCollectionFive = () => {
  const { i18n } = useTranslation('common');

  return (
    <div className={cls.briefCollection}>
      <Grid container spacing={2} alignItems="center">
        {[...Array(2)].map((_, idx) => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={idx}>
            <h4>Best selling</h4>
            <div className={cls.product}>
              <ProductThirtyEight />
            </div>
            <div className={cls.product}>
              <ProductThirtyEight />
            </div>
            <div className={cls.product}>
              <ProductThirtyEight />
            </div>
          </Grid>
        ))}
        <Grid item xs={12} lg={6}>
          <div className={`${cls.newsletter} ${cls[i18n.language]}`}>
            <span>TO TRIPPLE SHOP</span>
            <h3>REGISTER FOR OUR</h3>
            <h3>NEWSLETTER</h3>
            <p>Sign up for all the news about our last arrivals and get an exclusive early access shopping.</p>
            <form className={cls.form}>
              <input type="email" placeholder="Enter your email" className={cls.input} />
              <button className={cls.button}>Sign Up</button>
            </form>
            <h6>Or Join Us In</h6>
            <div className={cls.socialIcons}>
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
    </div>
  )
}

export default BriefCollectionFive;
