import HeaderTwentyTwo from '../../Headers/HeaderTwentyTwo/HeaderTwentyTwo';
import SliderTwentyNine from '../../MainSlider/SliderTwentyNine/SliderTwentyNine';
import SaleThirtyOne from '../../Sale/SaleFourtyNine/SaleFourtyNine';
import CollectionEightyOne from '../../Collections/CollectionEightyOne/CollectionEightyOne';
import SaleSixtyOne from '../../Sale/SaleSixtyOne/SaleSixtyOne';


import CollectionFiftyThree from '../../Collections/CollectionFiftyThree/CollectionFiftyThree';

import FooterFourteen from '../../Footers/FooterFourteen/FooterFourteen';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Template51 = () => {
  return (
    <div>
      <HeaderTwentyTwo openSideCategories={true} />

      <Container maxWidth="xl">

        <Grid container style={{ marginTop: '20px' }}>

          <Grid item lg={3.2} xl={2.9}></Grid>

          <Grid item xs={12} lg={8.8} xl={9.1}>
            <SliderTwentyNine />
          </Grid>

        </Grid>

        <div className='margin'>
          <Grid container spacing={3}>

            <Grid item xs={12} lg={6}>
              <SaleThirtyOne />
            </Grid>

            <Grid item xs={12} lg={6}>
              <SaleThirtyOne />
            </Grid>

          </Grid>
        </div>

        <CollectionEightyOne />

        <SaleSixtyOne />

        <div className="margin">
          <CollectionFiftyThree />
        </div>

      </Container>

      <FooterFourteen />
    </div>
  )
}

export default Template51;
