import HeaderThirtyOne from '../../Headers/HeaderThirtyOne/HeaderThirtyOne';
import SliderTwenty from '../../MainSlider/SliderTwenty/SliderTwenty';
import FeaturesEleven from '../../Features/FeaturesEleven/FeaturesEleven';
import BlogTwenty from '../../Blogs/BlogTwenty/BlogTwenty';
import Collection106 from '../../Collections/Collection106/Collection106';
import SaleSeventySix from '../../Sale/SaleSeventySix/SaleSeventySix';
import SaleSixtyEight from '../../Sale/SaleSixtyEight/SaleSixtyEight';
import BlogNineteen from '../../Blogs/BlogNineteen/BlogNineteen';
import NewsletterNineteen from '../../Newsletter/NewsletterNineteen/NewsletterNineteen';
import FooterTwentyFour from '../../Footers/FooterTwentyFour/FooterTwentyFour';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import cls from './template62.module.scss';

const Template62 = () => {
  return (
    <div>

      <HeaderThirtyOne />

      <Container maxWidth="xxl">

        <div style={{ marginTop: '20px' }}>
          <SliderTwenty />
        </div>

        <div style={{ margin: '30px 0 0' }}>
          <FeaturesEleven />
        </div>

        <div className="margin">
          <BlogTwenty />
        </div>

        <Collection106 />

        <div className="margin">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <SaleSeventySix />
            </Grid>
            <Grid item xs={12} md={6}>
              <SaleSeventySix />
            </Grid>
          </Grid>
        </div>

        <Collection106 slides={5} />

        <div className={`${cls.sales} margin`}>

          <div className={cls.small}>
            <SaleSixtyEight />
          </div>

          <div className={cls.big}>
            <SaleSixtyEight />
          </div>

          <div className={cls.small}>
            <SaleSixtyEight />
          </div>

          <div className={cls.small}>
            <SaleSixtyEight />
          </div>

          <div className={cls.small}>
            <SaleSixtyEight />
          </div>

        </div>

        <BlogNineteen />

        <div className='margin'>
          <FeaturesEleven />
        </div>

      </Container>

      <NewsletterNineteen />

      <FooterTwentyFour />

    </div>
  )
}

export default Template62