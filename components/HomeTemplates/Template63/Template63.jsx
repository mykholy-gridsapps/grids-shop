import HeaderThirtyFive from '../../Headers/HeaderThirtyFive/HeaderThirtyFive';
import SliderThirtyEight from "../../MainSlider/SliderThirtyEight/SliderThirtyEight";
import Collection107 from '../../Collections/Collection107/Collection107';
import Collection108 from '../../Collections/Collection108/Collection108';
import Collection109 from '../../Collections/Collection109/Collection109';
import Collection110 from '../../Collections/Collection110/Collection110';
import BrandsTwelve from '../../Brands/BrandsTwelve/BrandsTwelve';
import BriefCollectionSix from '../../BriefCollections/BriefCollectionSix/BriefCollectionSix';
import FooterTwentyFive from '../../Footers/FooterTwentyFive/FooterTwentyFive';

import Container from '@mui/material/Container';

const Template63 = () => {
  return (
    <>
      <HeaderThirtyFive />
      <SliderThirtyEight />
      <div className="margin">
        <Collection107 />
      </div>
      <Collection108 />
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

export default Template63;