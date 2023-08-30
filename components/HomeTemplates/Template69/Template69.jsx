import HeaderThirtyFour from '../../Headers/HeaderThirtyFour/HeaderThirtyFour';
import SliderThirtyFive from "../../MainSlider/SliderThirtyFive/SliderThirtyFive";
import Collection107 from '../../Collections/Collection107/Collection107';
import Collection102 from '../../Collections/Collection102/Collection102';
import Collection109 from '../../Collections/Collection109/Collection109';
import Collection110 from '../../Collections/Collection110/Collection110';
import BrandsTwelve from '../../Brands/BrandsTwelve/BrandsTwelve';
import BriefCollectionSix from '../../BriefCollections/BriefCollectionSix/BriefCollectionSix';
import FooterTwentyFive from '../../Footers/FooterTwentyFive/FooterTwentyFive';

import Container from '@mui/material/Container';

const Template69 = () => {
  return (
    <>
      <HeaderThirtyFour />
      <SliderThirtyFive />
      <div className="margin">
        <Collection107 />
      </div>
      <Container maxWidth="xxl">
        <Collection102 />
      </Container>
      <div className="margin">
        <Collection109 />
      </div>
      <Collection110 />
      <Container maxWidth="xxl">
        <div className="margin">
          <BrandsTwelve />
        </div>
        <BriefCollectionSix />
      </Container>
      <FooterTwentyFive />
    </>
  )
}

export default Template69;