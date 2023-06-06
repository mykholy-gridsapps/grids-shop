import HeaderThirtyOne from '../../Headers/HeaderThirtyOne/HeaderThirtyOne';
import SliderThirtyFive from '../../MainSlider/SliderThirtyFive/SliderThirtyFive';
import FeaturesEleven from '../../Features/FeaturesEleven/FeaturesEleven';
import SaleSeventy from '../../Sale/SaleSeventy/SaleSeventy';
import SaleSixtyEight from '../../Sale/SaleSixtyEight/SaleSixtyEight';
import SaleSixtyNine from '../../Sale/SaleSixtyNine/SaleSixtyNine';
import CollectionThirtyNine from '../../Collections/CollectionThirtyNine/CollectionThirtyNine';
import CollectionNinetyNine from '../../Collections/CollectionNinetyNine/CollectionNinetyNine';
import CollectionFourty from '../../Collections/CollectionFourty/CollectionFourty';
import CollectionHundred from '../../Collections/CollectionHundred/CollectionHundred';
import Collection101 from '../../Collections/Collection101/Collection101';
import BlogNineteen from '../../Blogs/BlogNineteen/BlogNineteen';
import BrandsTwelve from '../../Brands/BrandsTwelve/BrandsTwelve';
import NewsletterNineteen from '../../Newsletter/NewsletterNineteen/NewsletterNineteen';
import FooterTwentyFour from '../../Footers/FooterTwentyFour/FooterTwentyFour';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Template59 = () => {
  return (
    <div>

      <HeaderThirtyOne />

      <SliderThirtyFive />

      <Container maxWidth="xxl">

        <div className="margin">
          <FeaturesEleven />
        </div>

        <Grid container spacing={2}>

          <Grid item xs={12} sm={6} lg={4}>
            <SaleSeventy />
          </Grid>

          <Grid item xs={12} sm={6} lg={4}>
            <SaleSixtyEight />
          </Grid>

          <Grid item xs={12} sm={12} lg={4}>
            <SaleSixtyNine />
          </Grid>

        </Grid>

        <div className="margin">
          <CollectionThirtyNine />
        </div>

        <CollectionNinetyNine />

        <div className="margin">
          <CollectionFourty />
        </div>

        <CollectionHundred />

        <div className="margin">
          <Collection101 />
        </div>

        <Grid container spacing={2}>

          <Grid item xs={12} md={6}>
            <SaleSixtyEight />
          </Grid>

          <Grid item xs={12} md={6}>
            <SaleSixtyEight />
          </Grid>

        </Grid>

        <div className="margin">
          <BlogNineteen />
        </div>

        <BrandsTwelve />

      </Container>

      <div className="marginTop">
        <NewsletterNineteen />
      </div>

      <FooterTwentyFour />

    </div>
  )
}

export default Template59