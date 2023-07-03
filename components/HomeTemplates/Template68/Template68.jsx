import HeaderThirtyEight from '../../Headers/HeaderThirtyEight/HeaderThirtyEight';
import SliderFourtyThree from '../../MainSlider/SliderFourtyThree/SliderFourtyThree';
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

const Template68 = () => {
  return (
    <>

      <HeaderThirtyEight />

      <SliderFourtyThree />

      <Container maxWidth="xxl">

        <div className="margin">
          <BrandsTwelve />
        </div>

      </Container>

      <BriefCollectionSix />

      <FooterTwentyFive />

    </>
  )
}

export default Template68;