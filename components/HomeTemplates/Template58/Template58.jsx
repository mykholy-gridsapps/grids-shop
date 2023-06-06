import HeaderThirtyOne from '../../Headers/HeaderThirtyOne/HeaderThirtyOne';
import SliderEighteen from '../../MainSlider/SliderEighteen/SliderEighteen';
import BrandsTwelve from '../../Brands/BrandsTwelve/BrandsTwelve';
import CategoriesTwenty from '../../Categories/CategoriesThirty/CategoriesThirty';
import CollectionThirtyEight from '../../Collections/CollectionThirtyEight/CollectionThirtyEight';
import CollectionNinetySeven from '../../Collections/CollectionNinetySeven/CollectionNinetySeven';
import SaleSixtyEight from '../../Sale/SaleSixtyEight/SaleSixtyEight';
import SaleSixtyNine from '../../Sale/SaleSixtyNine/SaleSixtyNine';
import CollectionNinetyEight from '../../Collections/CollectionNinetyEight/CollectionNinetyEight';
import CategoriesFourtyFive from '../../Categories/CategoriesFourtyFive/CategoriesFourtyFive';
import BrandsEleven from '../../Brands/BrandsEleven/BrandsEleven';
import BriefCollectionOne from '../../BriefCollections/BriefCollectionOne/BriefCollectionOne';
import BlogNineteen from '../../Blogs/BlogNineteen/BlogNineteen';
import FeaturesEleven from '../../Features/FeaturesEleven/FeaturesEleven';
import NewsletterNineteen from '../../Newsletter/NewsletterNineteen/NewsletterNineteen';
import FooterTwentyFour from '../../Footers/FooterTwentyFour/FooterTwentyFour';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Template58 = () => {
  return (
    <div>
      <HeaderThirtyOne />

      <Container maxWidth="xxl">

        <div style={{ marginTop: '20px' }}>
          <SliderEighteen />
        </div>

        <BrandsTwelve />

        <div className="margin">
          <CategoriesTwenty />
        </div>

        <CollectionThirtyEight />

        <div className='margin'>
          <CollectionNinetySeven />
        </div>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} lg={3}>
            <SaleSixtyEight />
          </Grid>
          <Grid item xs={12} sm={6} lg={5}>
            <SaleSixtyNine />
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            <SaleSixtyEight />
          </Grid>
        </Grid>

        <div className="margin">
          <CollectionNinetyEight />
        </div>

        <CategoriesFourtyFive />

        <div className="margin">
          <BrandsEleven />
        </div>

        <BriefCollectionOne />

        <div className="margin">
          <BlogNineteen />
        </div>

        <FeaturesEleven />

      </Container>

      <div className="marginTop">
        <NewsletterNineteen />
      </div>

      <FooterTwentyFour />

    </div>
  )
}

export default Template58;