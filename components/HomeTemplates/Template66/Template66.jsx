import HeaderThirtySeven from '../../Headers/HeaderThirtySeven/HeaderThirtySeven';
import SliderFourtyOne from '../../MainSlider/SliderFourtyOne/SliderFourtyOne';
import Collection116 from '../../Collections/Collection116/Collection116';
import Collection123 from '../../Collections/Collection123/Collection123';
import Collection121 from '../../Collections/Collection121/Collection121';
import CategoriesFourtySeven from '../../Categories/CategoriesFourtySeven/CategoriesFourtySeven';
import Collection122 from '../../Collections/Collection122/Collection122';

import BrandsTwelve from '../../Brands/BrandsTwelve/BrandsTwelve';
import BriefCollectionSix from '../../BriefCollections/BriefCollectionSix/BriefCollectionSix';
import FooterTwentyFive from '../../Footers/FooterTwentyFive/FooterTwentyFive';

import Container from '@mui/material/Container';

const Template66 = () => {
  return (
    <>

      <HeaderThirtySeven />

      <SliderFourtyOne />

      <div className="margin">
        <Collection116 slides={6} />
      </div>

      <Collection121 />

      <Container maxWidth='xxl'>

        <div className="margin">
          <Collection123 />
        </div>

        <Collection123 />

        <div className="margin">
          <CategoriesFourtySeven />
        </div>

        <Collection122 />

        <Collection122 />

        <div className="margin">
          <BrandsTwelve />
        </div>

      </Container>

      <BriefCollectionSix />

      <FooterTwentyFive />

    </>
  )
}

export default Template66;