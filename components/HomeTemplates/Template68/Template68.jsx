import HeaderThirtyNine from '../../Headers/HeaderThirtyNine/HeaderThirtyNine';
import SliderFourtyThree from '../../MainSlider/SliderFourtyThree/SliderFourtyThree';
import Collection127 from '../../Collections/Collection127/Collection127';
import Collection125 from '../../Collections/Collection125/Collection125';
import Collection128 from '../../Collections/Collection128/Collection128';
import CategoriesFourtyNine from '../../Categories/CategoriesFourtyNine/CategoriesFourtyNine';
import SaleFourty from '../../Sale/SaleFourty/SaleFourty';
import SaleSeventySeven from '../../Sale/SaleSeventySeven/SaleSeventySeven';

import BrandsTwelve from '../../Brands/BrandsTwelve/BrandsTwelve';
import BriefCollectionSix from '../../BriefCollections/BriefCollectionSix/BriefCollectionSix';
import FooterTwentyFive from '../../Footers/FooterTwentyFive/FooterTwentyFive';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Template68 = () => {
  return (
    <>

      <HeaderThirtyNine />

      <SliderFourtyThree />

      <Container maxWidth="xxl">

        <div style={{ marginTop: '20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <SaleFourty />
            </Grid>
            <Grid item xs={12} md={6}>
              <SaleFourty />
            </Grid>
          </Grid>
        </div>

        <CategoriesFourtyNine />

        <div className="margin">
          <Collection127 />
        </div>

        <Collection125 />

        <div className="margin">
          <Collection128 withSale={true} />
        </div>

        <Collection128 />

        <div className="margin">
          <SaleSeventySeven />
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

export default Template68;