// COMPONENTS
import HeaderNine from "../../Headers/HeaderNine/HeaderNine";
import FooterFourteen from '../../Footers/FooterFourteen/FooterFourteen';
import SliderSeven from "../../MainSlider/SliderSeven/SliderSeven";
import CategoriesThirtyFive from '../../Categories/CategoriesThirtyFive/CategoriesThirtyFive';
import CollectionFiftyEight from '../../Collections/CollectionFiftyEight/CollectionFiftyEight';
import CollectionFourtyFive from '../../Collections/CollectionFourtyFive/CollectionFourtyFive';
import DetailsOne from "../../details/DetailsOne/DetailsOne";
import NewsLetterEight from '../../Newsletter/NewsLetterEight/NewsLetterEight';
import BlogTwelve from '../../Blogs/BlogTwelve/BlogTwelve';
import BrandsOne from '../../Brands/BrandsOne/BrandsOne';
// MATERIAL STUFF
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';

const Template43 = () => {
  return (
    <div>
      <Container maxWidth="xl">

        <HeaderNine openCategories={true} />

        <Grid container>
          <Grid item md={2.8}></Grid>

          <Grid item xs={12} lg={9.2}>
            <SliderSeven />
          </Grid>

        </Grid>

        <div className="margin">
          <CategoriesThirtyFive />
        </div>

        <CollectionFiftyEight />

      </Container>

      <div className="marginTop">
        <CollectionFourtyFive />
      </div>

      <DetailsOne />

      <NewsLetterEight />


      <div className="margin">
        <Container maxWidth="xl">
          <BlogTwelve />
        </Container>
      </div>

      <Container maxWidth="xl">
        <BrandsOne />
      </Container>

      <FooterFourteen />
    </div>
  )
}

export default Template43
