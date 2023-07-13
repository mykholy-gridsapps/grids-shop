import HeaderThirtyEight from '../../Headers/HeaderThirtyEight/HeaderThirtyEight';
import SliderFourtyTwo from '../../MainSlider/SliderFourtyTwo/SliderFourtyTwo';
import Collection124 from '../../Collections/Collection124/Collection124';
import Collection125 from '../../Collections/Collection125/Collection125';
import Collection126 from '../../Collections/Collection126/Collection126';
import Collection112 from '../../Collections/Collection112/Collection112';
import CategoriesFourtyEight from '../../Categories/CategoriesFourtyEight/CategoriesFourtyEight';
import SaleFourty from '../../Sale/SaleFourty/SaleFourty';
import SaleFiftyThree from '../../Sale/SaleFiftyThree/SaleFiftyThree';
import SaleFourtyThree from '../../Sale/SaleFourtyThree/SaleFourtyThree';

import BrandsTwelve from '../../Brands/BrandsTwelve/BrandsTwelve';
import BriefCollectionSix from '../../BriefCollections/BriefCollectionSix/BriefCollectionSix';
import FooterTwentyFive from '../../Footers/FooterTwentyFive/FooterTwentyFive';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Template67 = () => {
  return (
    <>

      <HeaderThirtyEight />

      <SliderFourtyTwo />

      <Container maxWidth="xxl">

        <div className="margin">
          <Collection124 />
        </div>

        <Collection125 />

        <div className="margin">
          <Collection126 />
        </div>

        <Collection126 withSale={true} />

        <div className="margin">
          <Collection112 slides={4} />
        </div>

        <CategoriesFourtyEight />

        <div className="margin">
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <SaleFourty />
            </Grid>
            <Grid item xs={12} md={4}>
              <SaleFiftyThree />
            </Grid>
            <Grid item xs={12} md={4}>
              <SaleFiftyThree />
            </Grid>
            <Grid item xs={12} md={8}>
              <SaleFourtyThree />
            </Grid>
          </Grid>
        </div>

        <div className="margin">
          <BrandsTwelve />
        </div>

      </Container>

      <BriefCollectionSix />

      <FooterTwentyFive />

    </>
  )
}

export default Template67;