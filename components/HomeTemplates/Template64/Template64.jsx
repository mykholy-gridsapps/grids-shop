import HeaderThirtyFive from '../../Headers/HeaderThirtyFive/HeaderThirtyFive';
import SliderThirtyEight from "../../MainSlider/SliderThirtyEight/SliderThirtyEight";
import Collection107 from '../../Collections/Collection107/Collection107';
import Collection111 from '../../Collections/Collection111/Collection111';
import Collection112 from '../../Collections/Collection112/Collection112';
import Collection113 from '../../Collections/Collection113/Collection113';
import FeaturesEighteen from '../../Features/FeaturesEighteen/FeaturesEighteen';
import ProductFiftyOne from '../../ProductCard/ProductFiftyOne/ProductFiftyOne';
import Collection114 from '../../Collections/Collection114/Collection114';
import SaleThirteen from '../../Sale/SaleThirteen/SaleThirteen';
import Collection115 from '../../Collections/Collection115/Collection115';
import BlogTwentyOne from '../../Blogs/BlogTwentyOne/BlogTwentyOne';
import BrandsTwelve from '../../Brands/BrandsTwelve/BrandsTwelve';
import BriefCollectionSix from '../../BriefCollections/BriefCollectionSix/BriefCollectionSix';
import FooterTwentyFive from '../../Footers/FooterTwentyFive/FooterTwentyFive';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Template64 = () => {
  return (
    <>
      <HeaderThirtyFive />

      <SliderThirtyEight />

      <div className="margin">
        <Collection107 />
      </div>

      <Container maxWidth="xxl">
        <Collection111 />

        <div className="margin">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} lg={2}>
              <FeaturesEighteen />
            </Grid>
            <Grid item xs={12} md={8} lg={10}>
              <Collection112 />
              <Collection113 />
            </Grid>
          </Grid>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4} lg={3}>
            <ProductFiftyOne />
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Collection114 />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <SaleThirteen />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SaleThirteen />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <div className="margin">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} lg={3}>
              <BlogTwentyOne />
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <Collection115 />
            </Grid>
          </Grid>
        </div>

      </Container>

      <Container maxWidth="xxl">
        <div className="margin">
          <BrandsTwelve />
        </div>
      </Container>

      <BriefCollectionSix />

      <FooterTwentyFive />
    </>
  )
}

export default Template64;