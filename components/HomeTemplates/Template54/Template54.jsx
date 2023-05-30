import HeaderSixteen from '../../Headers/HeaderSixteen/HeaderSixteen';
import SliderEight from '../../MainSlider/SliderEight/SliderEight';
import CategoriesSideThree from '../../CategoriesSide/CategoriesSideThree/CategoriesSideThree';
import SaleSixtyTwo from '../../Sale/SaleSixtyTwo/SaleSixtyTwo';
import CollectionEightyEight from '../../Collections/CollectionEightyEight/CollectionEightyEight';
import CategoriesFourtyTwo from '../../Categories/CategoriesFourtyTwo/CategoriesFourtyTwo';
import CollectionEightyNine from '../../Collections/CollectionEightyNine/CollectionEightyNine';
import TestimonialEight from '../../Testimonials/TestimonialEight/TestimonialEight';
import BlogFourteen from '../../Blogs/BlogFourteen/BlogFourteen';
import BriefCollectionFive from '../../BriefCollections/BriefCollectionFive/BriefCollectionFive'
import FooterFourteen from '../../Footers/FooterFourteen/FooterFourteen';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Template54 = () => {
  return (
    <div>

      <HeaderSixteen />

      <Container maxWidth="xl">

        <Grid container spacing={2} justifyContent="center">

          <Grid item lg={3} display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block', }}>
            <CategoriesSideThree />
          </Grid>

          <Grid item xs={12} lg={9}>
            <SliderEight />
          </Grid>

          <Grid item xs={12} sm={6} lg={4}>
            <SaleSixtyTwo />
          </Grid>

          <Grid item xs={12} sm={6} lg={4}>
            <SaleSixtyTwo />
          </Grid>

          <Grid item xs={12} sm={6} lg={4}>
            <SaleSixtyTwo />
          </Grid>

        </Grid>

        <div className="margin">
          <CollectionEightyEight />
        </div>

        <CategoriesFourtyTwo />

        <div className="margin">
          <CollectionEightyNine />
        </div>

      </Container>

      <TestimonialEight />

      <Container maxWidth="xl">

        <div className='margin'>
          <BlogFourteen />
        </div>

        <BriefCollectionFive />

      </Container>

      <FooterFourteen />

    </div>
  )
}

export default Template54;
