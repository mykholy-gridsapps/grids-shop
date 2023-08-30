import HeaderFourty from '../../Headers/HeaderFourty/HeaderFourty';
import SliderFourtyFour from '../../MainSlider/SliderFourtyFour/SliderFourtyFour';
import Collection128 from '../../Collections/Collection128/Collection128';
import Collection129 from '../../Collections/Collection129/Collection129';
import SaleFourty from '../../Sale/SaleFourty/SaleFourty';
import SaleTwentySeven from '../../Sale/SaleTwentySeven/SaleTwentySeven';
import SaleFourtyThree from '../../Sale/SaleFourtyThree/SaleFourtyThree';
import Collection130 from '../../Collections/Collection130/Collection130';

import BrandsTwelve from '../../Brands/BrandsTwelve/BrandsTwelve';
import BriefCollectionSix from '../../BriefCollections/BriefCollectionSix/BriefCollectionSix';
import FooterTwentyFive from '../../Footers/FooterTwentyFive/FooterTwentyFive';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Template70 = () => {
  return (
    <>

      <HeaderFourty />

      <SliderFourtyFour />

      <Container maxWidth="xxl">

        <div className="margin">
          <Collection130 />
        </div>

        <SaleTwentySeven />

        <div className="margin">
          <Collection128 />
        </div>

        <SaleFourtyThree />

        <div className="margin">
          <Collection128 />
        </div>

        <Collection129 />

        <div className="margin">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <SaleFourty />
            </Grid>
            <Grid item xs={12} md={6}>
              <SaleFourty />
            </Grid>
          </Grid>
        </div>

        <BrandsTwelve />

      </Container>

      <div className='marginTop'>
        <BriefCollectionSix />
      </div>

      <FooterTwentyFive />

    </>
  )
}

export default Template70;