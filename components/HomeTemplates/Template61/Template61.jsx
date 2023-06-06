import HeaderThirtyFour from '../../Headers/HeaderThirtyFour/HeaderThirtyFour';
import SliderThirtySix from '../../MainSlider/SliderThirtySix/SliderThirtySix';
import FeaturesSeventeen from '../../Features/FeaturesSeventeen/FeaturesSeventeen';
import CategoriesFourtySix from '../../Categories/CategoriesFourtySix/CategoriesFourtySix';
import Collection102 from '../../Collections/Collection102/Collection102';
import SaleSeventyFive from '../../Sale/SaleSeventyFive/SaleSeventyFive';
import CollectionNinetyFour from '../../Collections/CollectionNinetyFour/CollectionNinetyFour';
import CollectionFourtyOne from '../../Collections/CollectionFourtyOne/CollectionFourtyOne';
import BlogNineteen from '../../Blogs/BlogNineteen/BlogNineteen';
import FeaturesEleven from '../../Features/FeaturesEleven/FeaturesEleven';
import NewsletterNineteen from '../../Newsletter/NewsletterNineteen/NewsletterNineteen';

import FooterTwentyFour from '../../Footers/FooterTwentyFour/FooterTwentyFour';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Template61 = () => {
  return (
    <div>

      <HeaderThirtyFour />

      <SliderThirtySix />

      <FeaturesSeventeen />

      <Container maxWidth="xxl">

        <div className="margin">
          <CategoriesFourtySix />
        </div>

        <Collection102 slides={10} />

        <div className="margin">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              {/* STILL WORKING ON THIS SALE */}
              <SaleSeventyFive />
            </Grid>
            <Grid item xs={12} md={6}>
              <SaleSeventyFive />
            </Grid>
          </Grid>
        </div>

        <CollectionNinetyFour />

        <div className="margin">
          <CollectionFourtyOne reverse={true} />
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

export default Template61