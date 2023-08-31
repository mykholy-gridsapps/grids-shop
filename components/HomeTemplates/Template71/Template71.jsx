import HeaderTwentyTwo from '../../Headers/HeaderTwentyTwo/HeaderTwentyTwo';
import SliderFourtyFive from '../../MainSlider/SliderFourtyFive/SliderFourtyFive';
import Collection128 from '../../Collections/Collection128/Collection128';
import Collection125 from '../../Collections/Collection125/Collection125';
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

const Template71 = () => {
  return (
    <>

      <HeaderTwentyTwo size="xxl" />

      <SliderFourtyFive />

      <Container maxWidth="xxl">

        {/* Component Here */}
        <div className="margin">
          <Collection125 />
        </div>

        <Collection125 />

        <div className="margin">
          <Collection125 />
        </div>

        {/* <div className="margin">
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
        </div> */}

        {/* <Collection129 /> */}

        <BrandsTwelve />

      </Container>

      <div className='marginTop'>
        <BriefCollectionSix />
      </div>

      <FooterTwentyFive />

    </>
  )
}

export default Template71;