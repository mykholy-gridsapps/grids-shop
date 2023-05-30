import HeaderTwenty from '../../Headers/HeaderTwenty/HeaderTwenty';
import SliderTwentySix from '../../MainSlider/SliderTwentySix/SliderTwentySix';
import CategoriesThirtyTwo from '../../Categories/CategoriesThirtyTwo/CategoriesThirtyTwo';
import CollectionFourtyNine from '../../Collections/CollectionFourtyNine/CollectionFourtyNine';
import CollectionEighty from '../../Collections/CollectionEighty/CollectionEighty';
import CollectionFiftyTwo from '../../Collections/CollectionFiftyTwo/CollectionFiftyTwo';
import BriefCollectionTwo from '../../BriefCollections/BriefCollectionTwo/BriefCollectionTwo';
import SaleSixty from '../../Sale/SaleSixty/SaleSixty';
import BrandsOne from '../../Brands/BrandsOne/BrandsOne';
import FooterTwenty from '../../Footers/FooterTwenty/FooterTwenty';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Template50 = () => {
  return (
    <div>

      <HeaderTwenty />

      <Container maxWidth="xl">

        <SliderTwentySix />

        <div className="margin">
          <CategoriesThirtyTwo />
        </div>

        <CollectionFourtyNine />

        <CollectionFourtyNine reverse={true} />

        <CollectionEighty />

      </Container>

      <div className="margin">
        <CollectionFiftyTwo />
      </div>

      <Container maxWidth="xl">

        <BriefCollectionTwo />

        <div className="margin">
          <Grid container spacing={2} justifyContent="center">

            <Grid item xs={12} md={6} lg={4}>
              <SaleSixty />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <SaleSixty />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <SaleSixty />
            </Grid>

          </Grid>
        </div>

        <BrandsOne />

      </Container>

      <FooterTwenty />

    </div>
  )
}

export default Template50;