import HeaderTwenty from '../../Headers/HeaderTwenty/HeaderTwenty';
import SliderTwentySix from '../../MainSlider/SliderTwentySix/SliderTwentySix';
import CategoriesThirtyTwo from '../../Categories/CategoriesThirtyTwo/CategoriesThirtyTwo';
import CollectionFourtyNine from '../../Collections/CollectionFourtyNine/CollectionFourtyNine';
import CollectionEighty from '../../Collections/CollectionEighty/CollectionEighty';
import CollectionFiftyTwo from '../../Collections/CollectionFiftyTwo/CollectionFiftyTwo';
import PriefCollectionTwo from '../../PriefCollections/PriefCollectionTwo/PriefCollectionTwo';
import SaleTwentyTwo from '../../Sale/SaleFifty/SaleFifty';

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

        <PriefCollectionTwo />

        <Grid container>

          <Grid item xs={12} md={6} lg={4}>
            <SaleTwentyTwo />
          </Grid>

        </Grid>

      </Container>

      <FooterTwenty />

    </div>
  )
}

export default Template50;