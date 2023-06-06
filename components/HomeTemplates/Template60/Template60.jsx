import HeaderThirtyFour from '../../Headers/HeaderThirtyFour/HeaderThirtyFour';
import SliderNineteen from '../../MainSlider/SliderNineteen/SliderNineteen';
import BrandsTwelve from '../../Brands/BrandsTwelve/BrandsTwelve';
import CategoriesFourtyFive from '../../Categories/CategoriesFourtyFive/CategoriesFourtyFive';
import Collection102 from '../../Collections/Collection102/Collection102';
import CollectionFourtyOne from '../../Collections/CollectionFourtyOne/CollectionFourtyOne';
import SaleSixtyEight from '../../Sale/SaleSixtyEight/SaleSixtyEight';
import Collection103 from '../../Collections/Collection103/Collection103';
import BlogNineteen from '../../Blogs/BlogNineteen/BlogNineteen';
import FeaturesEleven from '../../Features/FeaturesEleven/FeaturesEleven';
import NewsletterNineteen from '../../Newsletter/NewsletterNineteen/NewsletterNineteen';
import FooterTwentyFour from '../../Footers/FooterTwentyFour/FooterTwentyFour';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Template60 = () => {
  return (
    <div>

      <HeaderThirtyFour />

      <Container maxWidth="xxl">

        <div style={{ marginTop: '10px' }}>
          <SliderNineteen />
        </div>

        <div className="margin">
          <BrandsTwelve />
        </div>

        <CategoriesFourtyFive />

        <div className="margin">
          <Collection102 />
        </div>

        <CollectionFourtyOne />

        <div className="margin">
          <Grid container spacing={2}>

            <Grid item xs={12} sm={6} lg={3}>
              <SaleSixtyEight />
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <SaleSixtyEight />
            </Grid>

            <Grid item xs={12} sm={6} lg={5}>
              <SaleSixtyEight />
            </Grid>

          </Grid>
        </div>


        <Collection103 />

        <div className="margin">
          <Grid container spacing={2}>

            <Grid item xs={12} sm={6} lg={4}>
              <SaleSixtyEight />
            </Grid>

            <Grid item xs={12} sm={6} lg={5}>
              <SaleSixtyEight />
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <SaleSixtyEight />
            </Grid>

          </Grid>
        </div>



        <BlogNineteen />

        <div className="margin">
          <FeaturesEleven />
        </div>

      </Container>

      <NewsletterNineteen />

      <FooterTwentyFour />

    </div>
  )
}

export default Template60;