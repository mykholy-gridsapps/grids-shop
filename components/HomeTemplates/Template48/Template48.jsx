import HeaderSeventeen from "../../Headers/HeaderSeventeen/HeaderSeventeen";
import FooterNineteen from '../../Footers/FooterNineteen/FooterNineteen';
import SliderSeven from '../../MainSlider/SliderSeven/SliderSeven';
import OfferCardEight from '../../OfferCards/OfferCardEight/OfferCardEight';
import CollectionFiftyOne from '../../Collections/CollectionFiftyOne/CollectionFiftyOne';
import CollectionSeventyThree from '../../Collections/CollectionSeventyThree/CollectionSeventyThree';
import CollectionSeventyFour from '../../Collections/CollectionSeventyFour/CollectionSeventyFour';
import CollectionSeventyFive from '../../Collections/CollectionSeventyFive/CollectionSeventyFive';
import CollectionSeventySix from '../../Collections/CollectionSeventySix/CollectionSeventySix';
import SaleFourtyFour from '../../Sale/SaleFourtyFour/SaleFourtyFour';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Template48 = () => {
  return (
    <div>
      <Container maxWidth="xxl">
        <HeaderSeventeen openCategories={true} />
      </Container>

      <Container maxWidth="xxl">
        <div style={{ marginTop: '20px' }}>
          <Grid container spacing={1.5}>
            <Grid item xl={2.33} xxl={2.17} sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: "block" } }}></Grid>
            <Grid item xs={12} md={8} xl={7} xxl={7}>
              <SliderSeven />
            </Grid>
            <Grid item md={4} xl={2.67} xxl={2.83} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
              <OfferCardEight />
            </Grid>
          </Grid>
        </div>

        <div className="margin">
          <CollectionFiftyOne />
        </div>

      </Container>

      <CollectionSeventyThree />

      <Container maxWidth="xxl">
        <div className="margin">
          <CollectionFiftyOne />
        </div>

        <CollectionSeventyFour />

        <div className="margin">
          <CollectionSeventyFive />
        </div>

        <CollectionSeventySix />

        <div className="marginTop">
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={6} lg={4}>
              <SaleFourtyFour />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <SaleFourtyFour />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <SaleFourtyFour />
            </Grid>
          </Grid>
        </div>

      </Container>

      <FooterNineteen />
    </div>
  )
}

export default Template48
