import HeaderThirtySix from '../../Headers/HeaderThirtySix/HeaderThirtySix';
import SliderFourty from '../../MainSlider/SliderFourty/SliderFourty';
import FeaturesNineteen from '../../Features/FeaturesNineteen/FeaturesNineteen';
import Collection116 from '../../Collections/Collection116/Collection116';
import Collection117 from '../../Collections/Collection117/Collection117';

import BrandsTwelve from '../../Brands/BrandsTwelve/BrandsTwelve';
import BriefCollectionSix from '../../BriefCollections/BriefCollectionSix/BriefCollectionSix';
import FooterTwentyFive from '../../Footers/FooterTwentyFive/FooterTwentyFive';

import Container from '@mui/material/Container';

const Template65 = () => {
  return (
    <>
      <HeaderThirtySix />
      <SliderFourty />

      <Container maxWidth="xxl">
        <div className="margin">
          <FeaturesNineteen />
        </div>
      </Container>

      <Collection116 />

      <div className="margin">
        <Collection117 />
      </div>

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

export default Template65;